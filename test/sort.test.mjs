import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import * as THREE from 'three';
import { arenaSize } from '../src/arena.js';
import { createPhysics } from '../src/physics.js';
import { createCubeField } from '../src/cubes.js';
import { heapSpots, steer, steerStrength } from '../src/steering.js';
import { sortStep } from '../src/steps/sort.js';
import { speciesColour, SORT } from '../src/config.js';
import { loadCube } from '../src/data.js';

const cube = loadCube(JSON.parse(readFileSync('data/data-cube.json', 'utf8')));
const arena = arenaSize(cube.cubes.length);

// ---- heap spots ------------------------------------------------------------------------
test('there is one heap spot per species, in display order, spread evenly across the floor', () => {
  const spots = heapSpots(arena, cube.displayOrder);
  assert.equal(spots.length, cube.size);
  const xs = cube.displayOrder.map((s) => spots[s].x);
  for (let i = 1; i < xs.length; i++) assert.ok(xs[i] > xs[i - 1], 'left to right in display order');
  const gaps = xs.slice(1).map((x, i) => x - xs[i]);
  assert.ok(Math.max(...gaps) - Math.min(...gaps) < 1e-9, 'evenly spaced');
  assert.ok(Math.abs(xs[0] + xs.at(-1)) < 1e-9, 'centred on the floor');
  for (const s of spots) {
    assert.ok(Math.abs(s.x) < arena.width / 2 - 2 && Math.abs(s.z) < arena.depth / 2, 'inside the walls');
  }
});

test('neighbouring heaps are in different rows, which gives each more room', () => {
  const spots = heapSpots(arena, cube.displayOrder);
  const zs = cube.displayOrder.map((s) => spots[s].z);
  for (let i = 1; i < zs.length; i++) assert.ok(Math.abs(zs[i] - zs[i - 1]) > SORT.zigzag);
  const apart = [];
  for (let i = 0; i < spots.length; i++) {
    for (let j = i + 1; j < spots.length; j++) apart.push(Math.hypot(spots[i].x - spots[j].x, spots[i].z - spots[j].z));
  }
  assert.ok(Math.min(...apart) > 7, `heaps at least 7 units apart (closest ${Math.min(...apart).toFixed(1)})`);
});

// ---- steering a cube -------------------------------------------------------------------
test('the pull builds up, holds and eases off', () => {
  assert.equal(steerStrength(0, 3), 0);
  assert.equal(steerStrength(3, 3), 0);
  assert.ok(steerStrength(0.2, 3) > 0 && steerStrength(0.2, 3) < 1);
  assert.equal(steerStrength(1.5, 3), 1);
  assert.ok(steerStrength(2.8, 3) > 0 && steerStrength(2.8, 3) < 1);
});

test('a cube is pulled towards its target, harder when far, and not at all when the strength is zero', () => {
  const dt = 1 / 60;
  const speedAfter = (distance, strength) => {
    const p = createPhysics();
    const body = p.addCube({ x: 0, y: 0.5, z: 0 });
    p.settle(300);
    steer(body, { x: distance, z: 0 }, dt, strength);
    return body.velocity.x;
  };
  assert.ok(speedAfter(15, 1) > speedAfter(5, 1) && speedAfter(5, 1) > 0);
  assert.equal(speedAfter(15, 0), 0);
  assert.ok(speedAfter(0.3, 1) < speedAfter(5, 1) / 5, 'the pull fades out close to the heap');
});

test('a cube sitting on its heap spot is left alone', () => {
  const p = createPhysics();
  const body = p.addCube({ x: 3, y: 0.5, z: 3 });
  p.settle(300);
  const before = { x: body.velocity.x, z: body.velocity.z };
  steer(body, { x: body.position.x, z: body.position.z }, 1 / 60, 1);
  assert.ok(Math.abs(body.velocity.x - before.x) < 1e-3 && Math.abs(body.velocity.z - before.z) < 1e-3);
});

// ---- the sort ---------------------------------------------------------------------------
function makeField() {
  const physics = createPhysics();
  physics.setBounds(arena.width, arena.depth);
  const field = createCubeField({ scene: new THREE.Scene(), physics, cubes: cube.cubes, arena });
  return { field, physics };
}
const frames = (field, physics, seconds) => {
  for (let f = 0; f < seconds * 60; f++) {
    field.tick(1 / 60);
    physics.step(1 / 60);
  }
};
const positionsOf = (field) => field.capture().map((c) => c.p);

async function scatter() {
  const { field, physics } = makeField();
  const dropped = field.drop(2, 0, 1);
  frames(field, physics, 6);
  await dropped;
  await field.recolour((i) => speciesColour(cube.cubes[i].species), 0.05);
  return { field, physics };
}

test('sorting pulls the cubes into heaps, each in its own spot', async () => {
  const { field, physics } = await scatter();
  const spots = heapSpots(arena, cube.displayOrder);
  const done = field.steer((i) => spots[cube.cubes[i].species], 3, 0);
  let finished = false;
  done.then(() => { finished = true; });
  for (let s = 0; s < 8 && !finished; s += 0.5) {
    frames(field, physics, 0.5);
    await new Promise((r) => setTimeout(r, 0));
  }
  await done;
  frames(field, physics, 1.5); // let the heaps settle
  const where = positionsOf(field);
  const distance = (p, i, species) => Math.hypot(p.x - spots[species].x, p.z - spots[species].z);
  const near = where.filter((p, i) => distance(p, i, cube.cubes[i].species) < 5).length;
  const nearestOwn = where.filter((p, i) => {
    const mine = distance(p, i, cube.cubes[i].species);
    return spots.every((_, s) => s === cube.cubes[i].species || distance(p, i, s) >= mine - 1e-9);
  }).length;
  assert.ok(near >= cube.cubes.length * 0.88, `${near} of ${cube.cubes.length} cubes are within 5 units of their heap`);
  assert.ok(nearestOwn >= cube.cubes.length * 0.88, `${nearestOwn} are nearer their own heap than any other`);
  assert.ok(Math.max(...where.map((p) => p.y)) < 5.5, 'the heaps are mounds, not columns');
  for (const p of where) assert.ok(Math.abs(p.x) <= arena.width / 2 + 0.1 && Math.abs(p.z) <= arena.depth / 2 + 0.1);
});

test('Back restores the scatter that the Categorise step ended with', async () => {
  const { field, physics } = await scatter();
  const snapshot = field.capture();
  const spots = heapSpots(arena, cube.displayOrder);
  const done = field.steer((i) => spots[cube.cubes[i].species], 1, 0);
  for (let s = 0; s < 5; s += 0.5) {
    frames(field, physics, 0.5);
    await new Promise((r) => setTimeout(r, 0));
  }
  await done;
  await field.restore(snapshot, 0.05);
  const after = field.capture();
  const far = snapshot.filter((c, i) => Math.hypot(c.p.x - after[i].p.x, c.p.y - after[i].p.y, c.p.z - after[i].p.z) > 0.01).length;
  assert.equal(far, 0, `${far} cubes are not back where they were`);
  assert.equal(physics.bodies.length, cube.cubes.length, 'every cube has its body again');
  snapshot.forEach((c, i) => assert.equal(after[i].colour, c.colour));
});

test('the sort step pulls the cubes to their heaps on the way in, and restores on the way back', async () => {
  const calls = [];
  const field = {
    steer: (targetOf, total, settle) => { calls.push({ kind: 'steer', targets: cube.cubes.slice(0, 3).map((_, i) => targetOf(i)), total, settle }); return Promise.resolve(); },
    restore: (snapshot, seconds) => { calls.push({ kind: 'restore', snapshot, seconds }); return Promise.resolve(); },
  };
  await sortStep.enter({ cube, arena, field });
  const snapshot = [{ spawned: true }];
  await sortStep.reverse({ cube, arena, field }, { snapshot });
  assert.equal(calls[0].kind, 'steer');
  const spots = heapSpots(arena, cube.displayOrder);
  calls[0].targets.forEach((t, i) => assert.deepEqual(t, spots[cube.cubes[i].species]));
  assert.equal(calls[1].kind, 'restore');
  assert.equal(calls[1].snapshot, snapshot);
});

test('the pull is the same at any frame rate: it runs in fixed physics steps', () => {
  const run = (frameSeconds) => {
    const physics = createPhysics();
    const cubeBodies = [physics.addCube({ x: 0, y: 0.5, z: 0 })];
    physics.settle(300);
    // the same hook cubes.js registers, so frame size must not matter
    let elapsed = 0;
    physics.onStep((dt) => { elapsed += dt; steer(cubeBodies[0], { x: 10, z: 0 }, dt, 1); });
    for (let t = 0; t < 1; t += frameSeconds) physics.step(frameSeconds);
    return { x: cubeBodies[0].position.x, elapsed };
  };
  const a = run(1 / 60);
  const b = run(1 / 20);
  assert.ok(Math.abs(a.elapsed - b.elapsed) < 0.06);
  assert.ok(Math.abs(a.x - b.x) < Math.max(1, a.x * 0.1), `60 fps ${a.x.toFixed(2)}, 20 fps ${b.x.toFixed(2)}`);
});
