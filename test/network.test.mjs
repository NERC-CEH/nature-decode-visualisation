import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { createNetwork, networkLayout } from '../src/network.js';
import { NETWORK } from '../src/config.js';

function makeNetwork() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1.8, 0.1, 500);
  return { network: createNetwork({ scene, camera }), scene, camera };
}

test('the layout is repeatable and every cube is joined to the network', () => {
  const a = networkLayout();
  assert.deepEqual(a, networkLayout());
  assert.equal(a.nodes.length, NETWORK.nodes);
  const joined = new Set(a.edges.flat());
  assert.equal(joined.size, NETWORK.nodes, 'no cube is left on its own');
  assert.ok(a.edges.every(([x, y]) => x !== y), 'no cube is joined to itself');
  const keys = a.edges.map(([x, y]) => `${Math.min(x, y)}-${Math.max(x, y)}`);
  assert.equal(new Set(keys).size, keys.length, 'no line is drawn twice');
});

test('the network starts shown, hangs on the camera and is drawn from it', () => {
  const { network, scene, camera } = makeNetwork();
  assert.equal(network.amount, 1);
  assert.equal(network.group.visible, true);
  assert.equal(network.group.parent, camera);
  assert.equal(camera.parent, scene, 'the camera is in the scene, so its children are drawn');
});

test('the cubes drift slowly', () => {
  const { network } = makeNetwork();
  const first = network.group.children[0];
  const before = first.position.clone();
  for (let f = 0; f < 60; f++) network.update(1 / 60); // one second
  const moved = first.position.distanceTo(before);
  assert.ok(moved > 0, 'it moves');
  assert.ok(moved < 1.5, `but slowly (${moved.toFixed(2)} units in a second)`);
});

test('fading takes the network away and brings it back', async () => {
  const { network } = makeNetwork();
  const material = network.group.children[0].material;
  assert.ok(Math.abs(material.opacity - NETWORK.opacity) < 1e-9);
  await network.fadeTo(0, 0.05);
  assert.equal(network.amount, 0);
  assert.equal(network.group.visible, false);
  assert.equal(material.opacity, 0);
  await network.fadeTo(1, 0.05);
  assert.equal(network.group.visible, true);
  assert.ok(Math.abs(material.opacity - NETWORK.opacity) < 1e-9);
});

test('a hidden network does no work, and a new fade replaces one in progress', async () => {
  const { network } = makeNetwork();
  await network.fadeTo(0, 0.02);
  const cube = network.group.children[0];
  const where = cube.position.clone();
  network.update(5);
  assert.ok(cube.position.equals(where), 'does not move while hidden');
  const slow = network.fadeTo(1, 5);
  const fast = network.fadeTo(0, 0.02);
  await fast;
  assert.equal(network.amount, 0);
  slow.catch(() => {});
});

// ---- the cursor pushes cubes away ----------------------------------------------------
function screenOf(camera, cube) {
  camera.updateMatrixWorld(true);
  return new THREE.Vector3().setFromMatrixPosition(cube.matrixWorld).project(camera);
}
const cubesOf = (network) => network.group.children.filter((c) => c.geometry.type === 'EdgesGeometry');

function pushedRun(frames, pointerFor) {
  const a = makeNetwork();
  const b = makeNetwork(); // the same network with no cursor, as a control
  const cubesA = cubesOf(a.network);
  const cubesB = cubesOf(b.network);
  a.network.update(0, null);
  b.network.update(0, null);
  const start = screenOf(a.camera, cubesA[0]);
  for (let f = 0; f < frames; f++) {
    a.network.update(1 / 60, pointerFor(start, f));
    b.network.update(1 / 60, null);
  }
  const offset = (i) => {
    const pa = screenOf(a.camera, cubesA[i]);
    const pb = screenOf(b.camera, cubesB[i]);
    return { dx: pa.x - pb.x, dy: pa.y - pb.y, length: Math.hypot(pa.x - pb.x, pa.y - pb.y) };
  };
  return { offset, start, a, b, cubesA };
}

test('a cursor beside a cube pushes it away, on the screen', () => {
  const { offset } = pushedRun(40, (start) => ({ x: start.x - 0.08, y: start.y }));
  const o = offset(0);
  assert.ok(o.dx > 0.05, `pushed to the right, away from a cursor on its left (dx = ${o.dx.toFixed(3)})`);
  assert.ok(Math.abs(o.dy) < Math.abs(o.dx), 'mostly along the line away from the cursor');
});

test('cubes far from the cursor stay put', () => {
  const { offset, cubesA, a } = pushedRun(40, (start) => ({ x: start.x - 0.08, y: start.y }));
  const far = cubesA
    .map((cube, i) => ({ i, d: Math.hypot(screenOf(a.camera, cube).x - screenOf(a.camera, cubesA[0]).x, screenOf(a.camera, cube).y - screenOf(a.camera, cubesA[0]).y) }))
    .filter((p) => p.d > 1.2);
  assert.ok(far.length > 5);
  for (const { i } of far) assert.ok(offset(i).length < 1e-6, `cube ${i} was not touched`);
});

test('pushed cubes spring back when the cursor leaves, and the push is capped', () => {
  // the cursor sits on the cube for a while, then leaves
  const { offset } = pushedRun(400, (start, f) => (f < 120 ? { x: start.x - 0.03, y: start.y } : null));
  assert.ok(offset(0).length < 0.02, `settled back (still ${offset(0).length.toFixed(3)} view units away)`);
  const held = pushedRun(300, (start) => ({ x: start.x - 0.03, y: start.y }));
  assert.ok(held.offset(0).length < 1, 'the push stops at a limit');
});

test('a cube that has been pushed also tumbles, and stops tumbling after', () => {
  const { a, b, cubesA } = pushedRun(40, (start) => ({ x: start.x - 0.08, y: start.y }));
  const cubesB = cubesOf(b.network);
  const turned = Math.abs(cubesA[0].rotation.x - cubesB[0].rotation.x) + Math.abs(cubesA[0].rotation.y - cubesB[0].rotation.y) + Math.abs(cubesA[0].rotation.z - cubesB[0].rotation.z);
  assert.ok(turned > 0.01, `turned by ${turned.toFixed(3)} rad`);
  for (let f = 0; f < 600; f++) {
    a.network.update(1 / 60, null);
    b.network.update(1 / 60, null);
  }
  const later = Math.abs(cubesA[0].rotation.x - cubesB[0].rotation.x) + Math.abs(cubesA[0].rotation.y - cubesB[0].rotation.y) + Math.abs(cubesA[0].rotation.z - cubesB[0].rotation.z);
  assert.ok(later < 0.02, `settled (${later.toFixed(4)} rad left)`);
});

test('the network no longer writes depth or tests it, so the floor cannot hide parts of it', () => {
  const { network } = makeNetwork();
  const material = network.group.children[0].material;
  assert.equal(material.depthTest, false);
  assert.equal(material.depthWrite, false);
  assert.ok(network.group.children.every((c) => c.renderOrder < 0));
});
