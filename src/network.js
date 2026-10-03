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

  const material = new THREE.LineBasicMaterial({ color: settings.colour, transparent: true, opacity: 0 });
  const cubeGeometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1));
  const cubes = nodes.map((node) => {
    const cube = new THREE.LineSegments(cubeGeometry, material);
    cube.scale.setScalar(node.size);
    group.add(cube);
    return cube;
  });

  const linePositions = new Float32Array(edges.length * 6);
  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
  const lines = new THREE.LineSegments(lineGeometry, material);
  lines.frustumCulled = false;
  group.add(lines);

  let amount = 1;
  let clock = 0;
  let fade = null;
  const place = [];

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
      const x = (node.u + settings.sway * sway(0)) * halfWidth;
      const y = (node.v + settings.sway * sway(1)) * halfHeight;
      const z = (node.w + settings.sway * 2 * sway(2)) * depthRange;
      place[i] = [x, y, z];
      cubes[i].position.set(x, y, z);
      cubes[i].rotation.set(node.turn[0] * clock, node.turn[1] * clock, node.turn[2] * clock);
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

  apply();
  layout();

  return {
    group,
    get amount() { return amount; },
    set amount(value) { amount = value; apply(); },

    // Called every frame. Does nothing while the network is hidden.
    update(dt) {
      if (amount <= 0.001) return;
      clock += dt;
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
