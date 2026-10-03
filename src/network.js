// The opening screen's background: a slowly drifting network of small wireframe cubes joined
// by lines. It hangs in front of the camera, so it stays behind the title at any window shape,
// and fades away as the page eases from black to white.

import * as THREE from 'three';
import { NETWORK } from './config.js';
import { mulberry32 } from './random.js';
import { tween, ease } from './tween.js';

// Node layout in the view, before any motion. u and v run -1..1 across and up the view, and w
// -1..1 through the depth of the cloud. Each node is joined to its nearest neighbours.
export function networkLayout(settings = NETWORK, aspect = 1.8) {
  const random = mulberry32(settings.seed);
  const nodes = Array.from({ length: settings.nodes }, () => ({
    u: random() * 2 - 1,
    v: random() * 2 - 1,
    w: random() * 2 - 1,
    size: settings.size[0] + random() * (settings.size[1] - settings.size[0]),
    // Each node sways on its own slow cycle, and turns slowly about its own axes.
    phase: [random() * 6.283, random() * 6.283, random() * 6.283],
    period: [0.7 + random() * 0.6, 0.7 + random() * 0.6, 0.7 + random() * 0.6],
    turn: [(random() - 0.5) * 0.3, (random() - 0.5) * 0.3, (random() - 0.5) * 0.3],
  }));

  const distance = (a, b) => Math.hypot((a.u - b.u) * aspect, a.v - b.v, (a.w - b.w) * 0.25);
  const seen = new Set();
  const edges = [];
  nodes.forEach((node, i) => {
    const nearest = nodes
      .map((other, j) => ({ j, d: i === j ? Infinity : distance(node, other) }))
      .sort((p, q) => p.d - q.d)
      .slice(0, settings.neighbours);
    for (const { j } of nearest) {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!seen.has(key)) {
        seen.add(key);
        edges.push([i, j]);
      }
    }
  });
  return { nodes, edges };
}

export function createNetwork({ scene, camera, settings = NETWORK }) {
  const { nodes, edges } = networkLayout(settings);
  const group = new THREE.Group();
  group.position.set(0, 0, -settings.depth);
  camera.add(group);
  if (!camera.parent) scene.add(camera); // children of the camera only render if it is in the scene

  // The network is drawn first and ignores depth. It hangs in front of the camera, so the invisible
  // floor of the animation (which writes depth) would otherwise hide the parts of it that lie
  // behind the floor from the camera.
  const material = new THREE.LineBasicMaterial({
    color: settings.colour,
    transparent: true,
    opacity: 0,
    depthTest: false,
    depthWrite: false,
  });
  const cubeGeometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1));
  const cubes = nodes.map((node) => {
    const cube = new THREE.LineSegments(cubeGeometry, material);
    cube.scale.setScalar(node.size);
    cube.renderOrder = -1;
    group.add(cube);
    return cube;
  });

  const linePositions = new Float32Array(edges.length * 6);
  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
  const lines = new THREE.LineSegments(lineGeometry, material);
  lines.frustumCulled = false;
  lines.renderOrder = -1;
  group.add(lines);

  let amount = 1;
  let clock = 0;
  let fade = null;
  const place = [];

  // How far each cube has been pushed by the cursor (x and y), how fast it is moving, and how far
  // it has been spun (s) and how fast (sv). Pushes spring back, so the network recovers.
  const pushes = nodes.map(() => ({ x: 0, y: 0, vx: 0, vy: 0, s: [0, 0, 0], sv: [0, 0, 0] }));
  const onScreen = new THREE.Vector3();

  function apply() {
    material.opacity = settings.opacity * amount;
    group.visible = amount > 0.001;
  }

  // Move every node to where it is at the current time.
  function layout() {
    const halfHeight = Math.tan((camera.fov * Math.PI) / 360) * settings.depth;
    const halfWidth = halfHeight * camera.aspect;
    const depthRange = settings.depth * 0.3;
    nodes.forEach((node, i) => {
      const sway = (k) => Math.sin((clock / (settings.cycle * node.period[k])) * 6.283 + node.phase[k]);
      const x = (node.u + settings.sway * sway(0)) * halfWidth + pushes[i].x;
      const y = (node.v + settings.sway * sway(1)) * halfHeight + pushes[i].y;
      const z = (node.w + settings.sway * 2 * sway(2)) * depthRange;
      place[i] = [x, y, z];
      cubes[i].position.set(x, y, z);
      cubes[i].rotation.set(
        node.turn[0] * clock + pushes[i].s[0],
        node.turn[1] * clock + pushes[i].s[1],
        node.turn[2] * clock + pushes[i].s[2]);
    });
    edges.forEach(([a, b], k) => {
      linePositions.set(place[a], k * 6);
      linePositions.set(place[b], k * 6 + 3);
    });
    lineGeometry.attributes.position.needsUpdate = true;
    // The whole cloud turns a little back and forth, so it has depth as it drifts.
    group.rotation.y = settings.turn * Math.sin(clock * 0.07);
    group.rotation.x = settings.turn * 0.4 * Math.sin(clock * 0.05 + 1);
  }

  // Cubes near the cursor are pushed away from it across the screen and tumble, then spring back.
  // `pointer` is the cursor in view coordinates (-1..1 across and up), or null.
  function pushAway(dt, pointer) {
    camera.updateMatrixWorld(true);
    nodes.forEach((node, i) => {
      const p = pushes[i];
      let ax = -settings.spring * p.x - settings.damping * p.vx;
      let ay = -settings.spring * p.y - settings.damping * p.vy;
      if (pointer) {
        onScreen.setFromMatrixPosition(cubes[i].matrixWorld).project(camera);
        const dx = (onScreen.x - pointer.x) * camera.aspect; // so that "near" is the same all round
        const dy = onScreen.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance < settings.repelRadius) {
          const strength = (1 - distance / settings.repelRadius) ** 2;
          const nx = distance > 1e-4 ? dx / distance : 1;
          const ny = distance > 1e-4 ? dy / distance : 0;
          ax += nx * settings.repelPush * strength;
          ay += ny * settings.repelPush * strength;
          for (let k = 0; k < 3; k++) p.sv[k] += (Math.random() - 0.5) * settings.repelSpin * strength * dt;
        }
      }
      p.vx += ax * dt;
      p.vy += ay * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      const length = Math.hypot(p.x, p.y);
      if (length > settings.maxPush) {
        p.x *= settings.maxPush / length;
        p.y *= settings.maxPush / length;
      }
      for (let k = 0; k < 3; k++) {
        p.sv[k] += (-2 * p.s[k] - 1.5 * p.sv[k]) * dt; // the spin settles back to the slow drift
        p.s[k] += p.sv[k] * dt;
      }
    });
  }

  apply();
  layout();

  return {
    group,
    get amount() { return amount; },
    set amount(value) { amount = value; apply(); },

    // Called every frame, with the cursor in view coordinates (or null). Does nothing while the
    // network is hidden.
    update(dt, pointer = null) {
      if (amount <= 0.001) return;
      clock += dt;
      pushAway(dt, pointer);
      layout();
    },

    // Fade to `target` (0 = gone, 1 = fully shown) over `seconds`. A new call replaces one in progress.
    fadeTo(target, seconds) {
      fade?.cancel();
      const from = amount;
      if (from === target) return Promise.resolve();
      fade = tween({
        duration: seconds,
        easing: ease.inOutQuad,
        onUpdate: (p) => { amount = from + (target - from) * p; apply(); },
      });
      return fade.finished.then(() => undefined);
    },
  };
}
