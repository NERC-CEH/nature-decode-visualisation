// The cubes: one InstancedMesh for every record, each tied to a physics body once it has been
// dropped. Cubes keep their identity through every step (technical-spec 7).
//
// Cubes are plain shaded boxes with no outline: the lighting alone shows their shape.

import * as THREE from 'three';
import { tween, ease } from './tween.js';
import { spawnPlan } from './arena.js';
import { ARENA, DURATIONS, EXPLODE, PHYSICS, SORT } from './config.js';
import { steer, steerStrength } from './steering.js';
import { mulberry32 } from './random.js';

export const START_COLOUR = '#111111'; // near-black, so lighting still shows the cube's shape
const LIFT_HEIGHT = 40; // how far cubes rise when they leave

// The shadow a cube casts fades in as it falls: none at the release height, full strength once it
// is within SHADOW_FULL of the floor. The shadow map has no transparency, so each cube's shadow
// is dithered: a fraction of its shadow pixels are dropped, and the map's soft filtering turns
// that into a lighter shadow.
const SHADOW_FULL = 3.5;

function shadowDepthMaterial(getFadeTop) {
  const material = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uFadeBottom = { value: SHADOW_FULL };
    shader.uniforms.uFadeTop = { value: 20 };
    material.userData.uniforms = shader.uniforms;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying float vCubeHeight;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        #ifdef USE_INSTANCING
          vCubeHeight = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).y;
        #else
          vCubeHeight = 0.0;
        #endif`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vCubeHeight;\nuniform float uFadeBottom;\nuniform float uFadeTop;')
      .replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
        float shadowStrength = 1.0 - smoothstep(uFadeBottom, uFadeTop, vCubeHeight);
        float shadowNoise = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
        if (shadowNoise >= shadowStrength) discard;`);
  };
  material.syncFadeTop = () => {
    if (material.userData.uniforms) material.userData.uniforms.uFadeTop.value = getFadeTop();
  };
  return material;
}

// `scene` is a THREE.Scene. `cubes` is the list from loadCube(). `getSpawnY` returns the height
// above the visible frame to release cubes from.
export function createCubeField({ scene, physics, cubes, arena, getSpawnY = () => 20 }) {
  const count = cubes.length;
  const material = new THREE.MeshStandardMaterial({ roughness: 0.55, metalness: 0 });
  // How far the cubes have turned into spheres (0 = cubes, 1 = spheres), used in the finale. The box
  // is cut into small squares on each face so there are enough points to bend into a sphere.
  const morph = { value: 0 };
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uMorph = morph;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uMorph;')
      .replace('#include <beginnormal_vertex>', '#include <beginnormal_vertex>\nobjectNormal = normalize(mix(objectNormal, normalize(position), uMorph));')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\ntransformed = mix(transformed, normalize(position) * 0.5, uMorph);');
  };
  const mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1, 8, 8, 8), material, count);
  mesh.frustumCulled = false;
  mesh.castShadow = true;
  const shadowMaterial = shadowDepthMaterial(() => getSpawnY());
  mesh.customDepthMaterial = shadowMaterial;
  scene.add(mesh);

  // Per-cube state. `body` is set while physics owns the cube; `pose` while a tween does.
  const state = cubes.map(() => ({ spawned: false, body: null, pose: null }));
  const colour = new THREE.Color();
  const dummy = new THREE.Object3D();
  let clock = 0;
  let pending = []; // cubes waiting to drop, with their plan entries
  let onDropped = null;
  let recolouring = null;
  let exploding = null; // { elapsed, freezeAt, total, done } while the cubes are thrown up and held
  let steering = null; // { targets, elapsed, total, done } while the Sort pull is running

  // Solid cubes are opaque and write depth; see-through ones (the face views) blend, and the more
  // lie behind each other along the line of sight the darker the result.
  function setSolid() {
    material.opacity = 1;
    material.transparent = false;
    material.depthWrite = true;
    material.needsUpdate = true;
  }

  // Make the cubes glow flat white (1) or show their ordinary shaded colours (0). The colour fades
  // to black while the glow rises, so the two add up to white and the cubes look like the flat dots
  // of the logo.
  function setGlow(amount) {
    material.color.setScalar(1 - amount);
    material.emissive.setScalar(amount);
    material.needsUpdate = false;
  }

  function hide(i) {
    dummy.position.set(0, -100, 0);
    dummy.scale.setScalar(0);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  function setColour(i, hex) {
    mesh.setColorAt(i, colour.set(hex));
  }
  for (let i = 0; i < count; i++) {
    hide(i);
    setColour(i, START_COLOUR);
  }
  mesh.instanceMatrix.needsUpdate = true;
  mesh.instanceColor.needsUpdate = true;

  function write(i, p, q, size = 1) {
    dummy.position.set(p.x, p.y, p.z);
    dummy.quaternion.set(q.x, q.y, q.z, q.w);
    dummy.scale.setScalar(size);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }

  // `late` is how long after its release time the frame came, so on a slow frame the cube starts
  // where it would have fallen to, and the stream stays smooth.
  function spawn(i, plan, late) {
    const g = PHYSICS.gravity;
    const y = getSpawnY() + plan.velocity.y * late + 0.5 * g * late * late;
    const body = physics.addCube({ x: plan.x, y, z: plan.z }, plan.quaternion);
    body.velocity.set(plan.velocity.x, plan.velocity.y + g * late, plan.velocity.z);
    body.angularVelocity.set(plan.spin.x, plan.spin.y, plan.spin.z);
    state[i].spawned = true;
    state[i].body = body;
  }

  // One frame of the Sort pull. For the first `total` seconds every cube is pulled to its heap
  // with a strength that builds up and eases off; after that only cubes that are still far from
  // their heap are pulled, until nearly all have arrived or the extra time is used up.
  function steerCubes(dt) {
    const pull = steering;
    pull.elapsed += dt;
    const main = pull.elapsed < pull.total;
    const strength = main ? steerStrength(pull.elapsed, pull.total) : 1;
    let far = 0;
    for (let i = 0; i < count; i++) {
      const body = state[i].body;
      if (!body) continue;
      const target = pull.targets[i];
      const isFar = Math.hypot(target.x - body.position.x, target.z - body.position.z) > SORT.farRadius;
      if (isFar) far++;
      if (main || isFar) steer(body, target, dt, strength, SORT);
    }
    if (!main && (far <= count * SORT.farShare || pull.elapsed >= pull.total + SORT.stragglers)) {
      steering = null;
      setTimeout(pull.done, pull.settle * 1000);
    }
  }

  // After the throw, the cubes are stopped dead and held where they are: their speed is damped away
  // and an upward force cancels gravity, until the hold is over.
  function holdCubes(dt) {
    const blast = exploding;
    blast.elapsed += dt;
    if (blast.elapsed >= blast.freezeAt) {
      const damp = Math.exp(-dt * 30);
      const lift = -PHYSICS.gravity;
      for (let i = 0; i < count; i++) {
        const body = state[i].body;
        if (!body) continue;
        body.wakeUp();
        body.velocity.scale(damp, body.velocity);
        body.angularVelocity.scale(damp, body.angularVelocity);
        body.force.y += lift * body.mass;
      }
    }
    if (blast.elapsed >= blast.total) {
      exploding = null;
      for (let i = 0; i < count; i++) state[i].body?.wakeUp();
      blast.done();
    }
  }

  // The pull is applied before every fixed physics step, so it is the same at any frame rate.
  physics.onStep((dt) => {
    if (exploding) holdCubes(dt);
    if (steering) steerCubes(dt);
  });

  const field = {
    mesh,
    material,
    morph,
    count,

    // Remove every cube, instantly.
    clear() {
      for (let i = 0; i < count; i++) {
        if (state[i].body) physics.removeCube(state[i].body);
        state[i].spawned = false;
        state[i].body = null;
        state[i].pose = null;
        hide(i);
        setColour(i, START_COLOUR);
      }
      pending = [];
      onDropped = null;
      steering = null;
      exploding = null;
      recolouring?.cancel();
      setSolid();
      setGlow(0); // and back to cubes, shown and shaded, after the finale
      morph.value = 0;
      mesh.visible = true;
      mesh.instanceMatrix.needsUpdate = true;
      mesh.instanceColor.needsUpdate = true;
    },

    // Release every cube from above the frame, staggered over `duration` seconds. Resolves
    // `settle` seconds after the last cube has been released.
    drop(duration = DURATIONS.drop, settle = DURATIONS.dropSettle, ramp = DURATIONS.dropRamp) {
      field.clear();
      const plan = spawnPlan(count, { duration, ramp });
      pending = plan.map((entry, i) => ({ i, entry })).sort((a, b) => a.entry.delay - b.entry.delay);
      clock = 0;
      return new Promise((resolve) => {
        onDropped = () => setTimeout(resolve, settle * 1000);
        if (!pending.length) onDropped();
      });
    },

    // Called every frame, before the physics step: releases cubes whose time has come.
    tick(dt) {
      if (!pending.length) return;
      clock += dt;
      while (pending.length && pending[0].entry.delay <= clock) {
        const { i, entry } = pending.shift();
        spawn(i, entry, clock - entry.delay);
      }
      if (!pending.length) {
        const done = onDropped;
        onDropped = null;
        done?.();
      }
    },

    // Called every frame, after the physics step: copy poses to the instanced mesh.
    sync() {
      shadowMaterial.syncFadeTop();
      for (let i = 0; i < count; i++) {
        const s = state[i];
        if (s.body) write(i, s.body.position, s.body.quaternion);
        else if (s.pose) write(i, s.pose.p, s.pose.q, s.pose.s);
      }
      mesh.instanceMatrix.needsUpdate = true;
    },

    setColour(i, hex) {
      setColour(i, hex);
      mesh.instanceColor.needsUpdate = true;
    },

    // Every cube changes to the colour `targetOf(i)` returns, each at its own random moment and
    // instantly (there is no fade), so the change sweeps over the cubes in no order. All are done
    // within `total` seconds. The order is the same every time.
    recolour(targetOf, total = DURATIONS.categorise) {
      recolouring?.cancel();
      const random = mulberry32(ARENA.spawnSeed + 11);
      const from = [];
      const to = [];
      const start = [];
      for (let i = 0; i < count; i++) {
        mesh.getColorAt(i, colour);
        from.push(colour.clone());
        to.push(new THREE.Color(targetOf(i)));
        start.push(random() * total);
      }
      recolouring = tween({
        duration: total,
        easing: ease.linear,
        onUpdate: (progress) => {
          const time = progress * total;
          for (let i = 0; i < count; i++) mesh.setColorAt(i, time >= start[i] ? to[i] : from[i]);
          mesh.instanceColor.needsUpdate = true;
        },
      });
      return recolouring.finished.then(() => undefined);
    },

    // Where cube `i` is now, or null if it has not been released yet.
    positionOf(i) {
      const source = state[i].body ?? state[i].pose;
      if (!source) return null;
      const p = source.position ?? source.p;
      return { x: p.x, y: p.y, z: p.z };
    },

    // The pose and colour of every cube, so a step can be returned to later.
    capture() {
      return state.map((s, i) => {
        const source = s.body ?? s.pose;
        if (!source) return { spawned: false };
        const p = source.position ?? source.p;
        const q = source.quaternion ?? source.q;
        mesh.getColorAt(i, colour);
        return {
          spawned: true,
          p: { x: p.x, y: p.y, z: p.z },
          q: { x: q.x, y: q.y, z: q.z, w: q.w },
          s: source.s ?? 1,
          colour: `#${colour.getHexString()}`,
        };
      });
    },

    // Fade the cubes `indices` away: they lose their colour towards the page's white and shrink to nothing,
    // so the others are left on their own. Each is a pose, as after the Arrange step.
    fadeOut(indices, seconds) {
      const fading = [];
      for (const i of indices) {
        const s = state[i];
        const source = s.body ?? s.pose;
        if (!source) continue;
        const p = source.position ?? source.p;
        const q = source.quaternion ?? source.q;
        if (s.body) physics.removeCube(s.body);
        s.body = null;
        s.pose = { p: { x: p.x, y: p.y, z: p.z }, q: { x: q.x, y: q.y, z: q.z, w: q.w }, s: source.s ?? 1 };
        mesh.getColorAt(i, colour);
        fading.push({ i, from: colour.clone(), size: s.pose.s });
      }
      if (!fading.length) return Promise.resolve();
      const white = new THREE.Color('#ffffff');
      return tween({
        duration: seconds,
        easing: ease.inOutQuad,
        onUpdate: (t) => {
          const shrink = Math.max(0, (t - 0.4) / 0.6);
          for (const { i, from, size } of fading) {
            mesh.setColorAt(i, colour.copy(from).lerp(white, t));
            state[i].pose.s = size * (1 - shrink);
          }
          mesh.instanceColor.needsUpdate = true;
          field.sync();
        },
      }).finished.then(() => undefined);
    },

    // Fly every cube to its target `targets[i]` ({ x, y, z, scale }), turning it to face the camera,
    // and change how the cubes look: `morph` (0 = cubes, 1 = spheres) and `glow` (0 = shaded
    // colours, 1 = flat white) are set at the end, moving gradually on the way. Cubes with scale 0
    // shrink away. Used to fly the cubes into the dots of the logo and back.
    flyTo(targets, { seconds, morph: morphTo = 0, glow = 0, stagger = 0.25, scale = 1 }) {
      const fromQ = new THREE.Quaternion();
      const identity = new THREE.Quaternion();
      const flights = [];
      const morphFrom = morph.value;
      const glowFrom = material.emissive.r;
      const random = mulberry32(ARENA.spawnSeed + 31);
      state.forEach((s, i) => {
        const body = s.body;
        const from = body
          ? { p: { x: body.position.x, y: body.position.y, z: body.position.z }, q: { x: body.quaternion.x, y: body.quaternion.y, z: body.quaternion.z, w: body.quaternion.w }, s: 1 }
          : s.pose && { p: { ...s.pose.p }, q: { ...s.pose.q }, s: s.pose.s ?? 1 };
        if (!from || !targets[i]) return;
        if (body) physics.removeCube(body);
        s.body = null;
        s.pose = { p: { ...from.p }, q: { ...from.q }, s: from.s };
        flights.push({ i, from, to: targets[i], delay: random() * stagger * seconds });
      });
      return tween({
        duration: seconds,
        easing: ease.linear,
        onUpdate: (progress) => {
          const time = progress * seconds;
          const all = ease.inOutCubic(progress);
          morph.value = morphFrom + (morphTo - morphFrom) * all;
          setGlow(glowFrom + (glow - glowFrom) * all);
          for (const { i, from, to, delay } of flights) {
            const e = ease.inOutCubic(Math.min(1, Math.max(0, (time - delay) / (seconds - stagger * seconds))));
            const pose = state[i].pose;
            pose.p.x = from.p.x + (to.x - from.p.x) * e;
            pose.p.y = from.p.y + (to.y - from.p.y) * e;
            pose.p.z = from.p.z + ((to.z ?? from.p.z) - from.p.z) * e;
            fromQ.set(from.q.x, from.q.y, from.q.z, from.q.w).slerp(identity, e);
            pose.q.x = fromQ.x; pose.q.y = fromQ.y; pose.q.z = fromQ.z; pose.q.w = fromQ.w;
            pose.s = from.s + ((to.scale ?? scale) - from.s) * e;
          }
          field.sync();
        },
      }).finished.then(() => undefined);
    },

    // Show or hide all the cubes at once (the logo takes over from them in the finale).
    setVisible(visible) {
      mesh.visible = visible;
    },

    // Fade every cube to the colour `colourOf(i)` returns and to `alpha` (1 = solid, less =
    // see-through), all together, over `seconds`.
    blendTo(colourOf, alpha, seconds = DURATIONS.look) {
      recolouring?.cancel();
      const from = [];
      const to = [];
      for (let i = 0; i < count; i++) {
        mesh.getColorAt(i, colour);
        from.push(colour.clone());
        to.push(new THREE.Color(colourOf(i)));
      }
      const alphaFrom = material.opacity;
      if (alpha < 1 || alphaFrom < 1) {
        material.transparent = true;
        material.depthWrite = false;
        material.needsUpdate = true;
      }
      recolouring = tween({
        duration: seconds,
        easing: ease.inOutQuad,
        onUpdate: (t) => {
          material.opacity = alphaFrom + (alpha - alphaFrom) * t;
          for (let i = 0; i < count; i++) mesh.setColorAt(i, colour.copy(from[i]).lerp(to[i], t));
          mesh.instanceColor.needsUpdate = true;
        },
      });
      return recolouring.finished.then((completed) => {
        if (completed && alpha >= 1) setSolid();
      });
    },

    // Throw every cube up and away from the middle of the pile, as if by an explosion, then hold them
    // frozen in mid air. Resolves when the hold is over. The throw lasts `freezeAt` seconds and the hold
    // `hold` seconds.
    explode(freezeAt = DURATIONS.explode, hold = DURATIONS.freeze) {
      const bodies = state.map((s) => s.body).filter(Boolean);
      const centre = { x: 0, z: 0 };
      for (const b of bodies) { centre.x += b.position.x / bodies.length; centre.z += b.position.z / bodies.length; }
      const random = mulberry32(ARENA.spawnSeed + 47);
      for (const b of bodies) {
        b.wakeUp();
        let dx = b.position.x - centre.x;
        let dz = b.position.z - centre.z;
        let d = Math.hypot(dx, dz);
        if (d < 0.5) { const a = random() * Math.PI * 2; dx = Math.cos(a); dz = Math.sin(a); d = 1; }
        const outward = EXPLODE.outward * (0.5 + random());
        const up = EXPLODE.up * (0.6 + 0.8 * random()) + EXPLODE.lowBonus / (1 + Math.max(0, b.position.y));
        b.velocity.set((dx / d) * outward, up, (dz / d) * outward);
        b.angularVelocity.set((random() - 0.5) * 2 * EXPLODE.spin, (random() - 0.5) * 2 * EXPLODE.spin, (random() - 0.5) * 2 * EXPLODE.spin);
      }
      return new Promise((resolve) => {
        exploding = { elapsed: 0, freezeAt, total: freezeAt + hold, done: resolve };
      });
    },

    // Pull every cube across the floor to the spot `targetOf(i)` ({ x, z }) gives, so that the cubes
    // pile up there by physics. Resolves `settle` seconds after the pull ends.
    steer(targetOf, total = DURATIONS.sort, settle = DURATIONS.sortSettle) {
      const targets = Array.from({ length: count }, (_, i) => targetOf(i));
      return new Promise((resolve) => {
        steering = { targets, elapsed: 0, total, settle, done: resolve };
      });
    },

    // Ease every cube from where it is to where `snapshot` (from capture()) has it, then hand it
    // back to physics. Physics cannot be rewound, so this is how Back returns to a step.
    restore(snapshot, seconds = DURATIONS.sortBack) {
      steering = null;
      exploding = null;
      const moving = [];
      state.forEach((s, i) => {
        const to = snapshot?.[i];
        if (!to?.spawned) return;
        const body = s.body;
        const from = body
          ? { p: { x: body.position.x, y: body.position.y, z: body.position.z }, q: { x: body.quaternion.x, y: body.quaternion.y, z: body.quaternion.z, w: body.quaternion.w } }
          : s.pose;
        if (!from) return;
        if (body) physics.removeCube(body);
        s.body = null;
        s.pose = { p: { ...from.p }, q: { ...from.q } };
        setColour(i, to.colour);
        moving.push({ i, from, to });
      });
      mesh.instanceColor.needsUpdate = true;
      const fromQ = new THREE.Quaternion();
      const toQ = new THREE.Quaternion();
      return tween({
        duration: seconds,
        easing: ease.inOutCubic,
        onUpdate: (t) => {
          for (const { i, from, to } of moving) {
            const pose = state[i].pose;
            pose.p.x = from.p.x + (to.p.x - from.p.x) * t;
            pose.p.y = from.p.y + (to.p.y - from.p.y) * t;
            pose.p.z = from.p.z + (to.p.z - from.p.z) * t;
            fromQ.set(from.q.x, from.q.y, from.q.z, from.q.w);
            toQ.set(to.q.x, to.q.y, to.q.z, to.q.w);
            fromQ.slerp(toQ, t);
            pose.q.x = fromQ.x; pose.q.y = fromQ.y; pose.q.z = fromQ.z; pose.q.w = fromQ.w;
          }
          field.sync();
        },
      }).finished.then(() => {
        for (const { i, to } of moving) {
          state[i].body = physics.addCube(to.p, to.q);
          state[i].pose = null;
        }
      });
    },

    // Fly every cube to its cell in the data cube and leave it there, fixed in place (it is no
    // longer part of the physics). `cells[i]` is the cell for cube i ({ x, y, z }); `sheetOf(i)`
    // says which sheet it is on (0..sheets-1). Sheets lift off one after another, bottom first,
    // so every cube is in its cell within `total` seconds, and each flight takes `flight` seconds,
    // up an arc and turning to sit square in its cell.
    arrange(cells, sheetOf, sheets, total = DURATIONS.arrange, flight = DURATIONS.arrangeFlight) {
      steering = null;
      const random = mulberry32(ARENA.spawnSeed + 23);
      const stagger = sheets > 1 ? (total - flight) / (sheets - 1) : 0;
      const flying = [];
      state.forEach((s, i) => {
        const body = s.body;
        const from = body
          ? { p: { x: body.position.x, y: body.position.y, z: body.position.z }, q: { x: body.quaternion.x, y: body.quaternion.y, z: body.quaternion.z, w: body.quaternion.w } }
          : s.pose;
        if (!from) return;
        if (body) physics.removeCube(body);
        s.body = null;
        s.pose = { p: { ...from.p }, q: { ...from.q } };
        // the cubes of a sheet leave within a tenth of the gap between sheets of each other
        const delay = sheetOf(i) * stagger * 0.9 + random() * stagger * 0.1;
        flying.push({ i, from: { p: { ...from.p }, q: { ...from.q } }, to: cells[i], delay, arc: 2 + random() * 2 });
      });
      const fromQ = new THREE.Quaternion();
      const identity = new THREE.Quaternion();
      return tween({
        duration: total,
        easing: ease.linear,
        onUpdate: (progress) => {
          const time = progress * total;
          for (const { i, from, to, delay, arc } of flying) {
            const local = Math.min(1, Math.max(0, (time - delay) / flight));
            const e = ease.inOutCubic(local);
            const pose = state[i].pose;
            pose.p.x = from.p.x + (to.x - from.p.x) * e;
            pose.p.y = from.p.y + (to.y - from.p.y) * e + arc * Math.sin(Math.PI * e);
            pose.p.z = from.p.z + (to.z - from.p.z) * e;
            fromQ.set(from.q.x, from.q.y, from.q.z, from.q.w).slerp(identity, e);
            pose.q.x = fromQ.x; pose.q.y = fromQ.y; pose.q.z = fromQ.z; pose.q.w = fromQ.w;
          }
          field.sync();
        },
      }).finished.then(() => undefined);
    },

    // Cubes rise out of view, one after another, then disappear. Used by Back from the first
    // step. Physics cannot be rewound, so the cubes are lifted by a tween instead.
    liftAway(seconds = DURATIONS.lift) {
      const stagger = seconds * 0.35;
      const lifting = [];
      state.forEach((s, i) => {
        if (s.body) {
          const p = s.body.position;
          const q = s.body.quaternion;
          s.pose = { p: { x: p.x, y: p.y, z: p.z }, q: { x: q.x, y: q.y, z: q.z, w: q.w } };
          physics.removeCube(s.body);
          s.body = null;
        } else if (!s.pose) {
          return;
        }
        lifting.push({ i, from: { ...s.pose.p }, delay: ((i * 7919) % count) / count * stagger });
      });
      pending = [];
      onDropped = null;
      return tween({
        duration: seconds,
        easing: ease.linear,
        onUpdate: (progress) => {
          const t = progress * seconds;
          for (const { i, from, delay } of lifting) {
            const local = Math.min(1, Math.max(0, (t - delay) / (seconds - stagger)));
            state[i].pose.p.y = from.y + LIFT_HEIGHT * ease.inCubic(local);
          }
          field.sync();
        },
      }).finished.then(() => field.clear());
    },
  };
  return field;
}
