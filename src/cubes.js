// The cubes: one InstancedMesh for every record, each tied to a physics body once it has been
// dropped. Cubes keep their identity through every step (technical-spec 7).
//
// A thin dark edge is drawn in the fragment shader, so every cube has an outline for one draw
// call. The edge darkens the cube's own colour, so black cubes stay black and pale species
// colours keep a visible outline against white.

import * as THREE from 'three';
import { tween, ease } from './tween.js';
import { spawnPlan } from './arena.js';
import { DURATIONS, PHYSICS } from './config.js';

const EDGE_WIDTH = 0.045; // fraction of a cube face, on each side
const EDGE_DARKEN = 0.55;
const START_COLOUR = '#111111'; // near-black, so lighting still shows the cube's shape
const LIFT_HEIGHT = 40; // how far cubes rise when they leave

function edgeMaterial() {
  const material = new THREE.MeshStandardMaterial({ roughness: 0.55, metalness: 0 });
  material.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vEdgeUv;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvEdgeUv = uv;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vEdgeUv;')
      .replace('#include <color_fragment>', `#include <color_fragment>
        vec2 edgeDistance = min(vEdgeUv, 1.0 - vEdgeUv);
        float edgeLine = 1.0 - smoothstep(${EDGE_WIDTH.toFixed(3)}, ${(EDGE_WIDTH * 2).toFixed(3)}, min(edgeDistance.x, edgeDistance.y));
        diffuseColor.rgb *= 1.0 - ${EDGE_DARKEN.toFixed(2)} * edgeLine;`);
  };
  return material;
}

// `scene` is a THREE.Scene. `cubes` is the list from loadCube(). `getSpawnY` returns the height
// above the visible frame to release cubes from.
export function createCubeField({ scene, physics, cubes, arena, getSpawnY = () => 20 }) {
  const count = cubes.length;
  const mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), edgeMaterial(), count);
  mesh.frustumCulled = false;
  mesh.castShadow = true;
  scene.add(mesh);

  // Per-cube state. `body` is set while physics owns the cube; `pose` while a tween does.
  const state = cubes.map(() => ({ spawned: false, body: null, pose: null }));
  const colour = new THREE.Color();
  const dummy = new THREE.Object3D();
  let clock = 0;
  let pending = []; // cubes waiting to drop, with their plan entries
  let onDropped = null;

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

  function write(i, p, q) {
    dummy.position.set(p.x, p.y, p.z);
    dummy.quaternion.set(q.x, q.y, q.z, q.w);
    dummy.scale.setScalar(1);
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

  const field = {
    mesh,
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
      mesh.instanceMatrix.needsUpdate = true;
      mesh.instanceColor.needsUpdate = true;
    },

    // Release every cube from above the frame, staggered over `duration` seconds. Resolves
    // `settle` seconds after the last cube has been released.
    drop(duration = DURATIONS.drop, settle = DURATIONS.dropSettle) {
      field.clear();
      const plan = spawnPlan(count, { duration });
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
      for (let i = 0; i < count; i++) {
        const s = state[i];
        if (s.body) write(i, s.body.position, s.body.quaternion);
        else if (s.pose) write(i, s.pose.p, s.pose.q);
      }
      mesh.instanceMatrix.needsUpdate = true;
    },

    setColour(i, hex) {
      setColour(i, hex);
      mesh.instanceColor.needsUpdate = true;
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
          colour: `#${colour.getHexString()}`,
        };
      });
    },

    // Cubes rise out of view, one after another, then disappear. Used by Back from the first
    // step. Physics cannot be rewound, so the cubes are lifted by a tween instead.
    liftAway(seconds = DURATIONS.lift) {
      const stagger = seconds * 0.35;
      const lifting = [];
      state.forEach((s, i) => {
        if (!s.body) return;
        const p = s.body.position;
        const q = s.body.quaternion;
        s.pose = { p: { x: p.x, y: p.y, z: p.z }, q: { x: q.x, y: q.y, z: q.z, w: q.w } };
        physics.removeCube(s.body);
        s.body = null;
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
