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
