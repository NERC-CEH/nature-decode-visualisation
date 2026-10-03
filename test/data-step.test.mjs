import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { arenaSize, spawnPlan } from '../src/arena.js';
import { createPhysics } from '../src/physics.js';
import { repel } from '../src/repulsion.js';
import { createCubeField } from '../src/cubes.js';
import { REPEL, STREAM } from '../src/config.js';

const dt = 1 / 60;

// ---- arena ---------------------------------------------------------------------------
test('the arena grows with the cube count and keeps its shape', () => {
  const small = arenaSize(50);
  const large = arenaSize(400);
  assert.ok(large.width > small.width && large.depth > small.depth);
  assert.ok(Math.abs(small.width / small.depth - 1.5) < 1e-9);
  assert.ok(Math.abs(large.width * large.depth / 400 - 6) < 1e-6, 'six square units per cube');
});

test('the spawn plan is repeatable and releases one cube per time slot', () => {
  const a = spawnPlan(164, { duration: 1 });
  assert.deepEqual(a, spawnPlan(164, { duration: 1 }));
  assert.notDeepEqual(a, spawnPlan(164, { duration: 1, seed: 2 }));
  const delays = a.map((c) => c.delay).sort((x, y) => x - y);
  delays.forEach((d, k) => assert.ok(Math.abs(d - (k * 1) / 164) < 1e-9));
  for (const c of a) {
    const q = c.quaternion;
    assert.ok(Math.abs(Math.hypot(q.x, q.y, q.z, q.w) - 1) < 1e-9, 'unit quaternion');
    assert.equal(c.velocity.y, -STREAM.speed);
  }
});

test('the stream is a narrow column into the middle of the floor', () => {
  const plan = spawnPlan(164, { duration: 1 });
  const arena = arenaSize(164);
  for (const c of plan) {
    assert.ok(Math.hypot(c.x, c.z) < 5, 'within a few units of the centre');
    assert.ok(Math.abs(c.x) < arena.width / 2 && Math.abs(c.z) < arena.depth / 2);
  }
});

test('no cube is released inside another: lanes are apart and cubes in a lane are spaced out', () => {
  for (const count of [30, 164, 405]) {
    const plan = spawnPlan(count, { duration: 1 });
    const lanes = new Map();
    for (const c of plan) {
      const key = c.x + ',' + c.z;
      if (!lanes.has(key)) lanes.set(key, { x: c.x, z: c.z, times: [] });
      lanes.get(key).times.push(c.delay);
    }
    const list = [...lanes.values()];
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        assert.ok(Math.hypot(list[i].x - list[j].x, list[i].z - list[j].z) >= 1.2, 'lanes at least 1.2 apart');
      }
      const times = list[i].times.sort((x, y) => x - y);
      for (let k = 1; k < times.length; k++) {
        assert.ok((times[k] - times[k - 1]) * STREAM.speed >= STREAM.gap - 1e-9, 'gap along the lane at release');
      }
    }
  }
});

// ---- walls ---------------------------------------------------------------------------
test('walls keep a cube thrown at them inside the arena', () => {
  const arena = arenaSize(164);
  const physics = createPhysics();
  physics.setBounds(arena.width, arena.depth);
  const bodies = [
    physics.addCube({ x: arena.width / 2 - 1, y: 0.5, z: 0 }),
    physics.addCube({ x: -arena.width / 2 + 1, y: 0.5, z: 0 }),
    physics.addCube({ x: 0, y: 0.5, z: arena.depth / 2 - 1 }),
    physics.addCube({ x: 0, y: 0.5, z: -arena.depth / 2 + 1 }),
  ];
  bodies[0].velocity.set(40, 0, 0);
  bodies[1].velocity.set(-40, 0, 0);
  bodies[2].velocity.set(0, 0, 40);
  bodies[3].velocity.set(0, 0, -40);
  physics.settle(600);
  for (const b of bodies) {
    assert.ok(Math.abs(b.position.x) <= arena.width / 2, `x ${b.position.x}`);
    assert.ok(Math.abs(b.position.z) <= arena.depth / 2, `z ${b.position.z}`);
    assert.ok(b.position.y > 0.3, 'still above the floor');
  }
});

// ---- cursor repulsion ----------------------------------------------------------------
function restingCube(x, z) {
  const physics = createPhysics();
  const body = physics.addCube({ x, y: 0.5, z });
  physics.settle(300);
  assert.equal(body.sleepState, 2, 'starts asleep');
  return { physics, body };
}

test('a cursor beside a resting cube wakes it and pushes it away', () => {
  const { physics, body } = restingCube(0, 0);
  for (let f = 0; f < 60; f++) {
    repel(physics.bodies, { x: 1.5, z: 0 }, dt);
    physics.world.step(dt);
  }
  assert.ok(body.position.x < -1.5, `pushed away from the cursor (x = ${body.position.x})`);
  assert.ok(Math.abs(body.position.z) < 2, 'pushed along the line away from the cursor');
});

test('a cursor far away does nothing', () => {
  const { physics, body } = restingCube(0, 0);
  const pushed = repel(physics.bodies, { x: REPEL.radius + 1, z: 0 }, dt);
  assert.equal(pushed, 0);
  assert.equal(body.sleepState, 2);
});

test('the push does not depend on the frame rate', () => {
  const distanceAt = (fps) => {
    const { physics, body } = restingCube(0, 0);
    for (let f = 0; f < fps; f++) {
      repel(physics.bodies, { x: 1.5, z: 0 }, 1 / fps);
      for (let s = 0; s < 60 / fps; s++) physics.world.step(1 / 60);
    }
    return -body.position.x;
  };
  const at60 = distanceAt(60);
  const at30 = distanceAt(30);
  assert.ok(Math.abs(at60 - at30) < at60 * 0.35, `60 fps ${at60.toFixed(1)}, 30 fps ${at30.toFixed(1)}`);
});

test('a cube exactly under the cursor is still pushed, in some direction', () => {
  const { physics, body } = restingCube(0, 0);
  for (let f = 0; f < 30; f++) {
    repel(physics.bodies, { x: 0, z: 0 }, dt);
    physics.world.step(dt);
  }
  assert.ok(Math.hypot(body.position.x, body.position.z) > 0.5);
});

// ---- the cube field ------------------------------------------------------------------
function makeField(count = 20) {
  const cubes = Array.from({ length: count }, (_, id) => ({ id, species: id % 3, time: 0, location: 0 }));
  const arena = arenaSize(count);
  const physics = createPhysics();
  physics.setBounds(arena.width, arena.depth);
  const scene = new THREE.Scene();
  const field = createCubeField({ scene, physics, cubes, arena, getSpawnY: () => 20 });
  return { field, physics, scene, count };
}
const scaleOf = (field, i) => {
  const m = new THREE.Matrix4();
  field.mesh.getMatrixAt(i, m);
  return new THREE.Vector3().setFromMatrixScale(m).x;
};
const positionOf = (field, i) => {
  const m = new THREE.Matrix4();
  field.mesh.getMatrixAt(i, m);
  return new THREE.Vector3().setFromMatrixPosition(m);
};

test('cubes start hidden, and the drop releases all of them from above the frame', async () => {
  const { field, physics, count } = makeField();
  for (let i = 0; i < count; i++) assert.equal(scaleOf(field, i), 0);
  const done = field.drop(0.5, 0);
  for (let f = 0; f < 15; f++) field.tick(1 / 60);
  assert.ok(physics.bodies.length > 0 && physics.bodies.length < count, 'released over time');
  for (let f = 0; f < 30; f++) field.tick(1 / 60);
  await done;
  assert.equal(physics.bodies.length, count);
  field.sync();
  for (let i = 0; i < count; i++) {
    assert.ok(Math.abs(scaleOf(field, i) - 1) < 1e-6);
  }
});

test('a cube released late on a slow frame starts further down its fall, not at the top', async () => {
  const { field, physics } = makeField(10);
  const done = field.drop(0.5, 0);
  field.tick(0.6); // one very slow frame releases everything at once
  await done;
  const heights = physics.bodies.map((b) => b.position.y);
  assert.ok(heights.every((y) => y < 20), 'all have already fallen from the release height');
  assert.ok(new Set(heights.map((y) => y.toFixed(2))).size > 5, 'and are spread out, not in one row');
  assert.ok(physics.bodies.every((b) => b.velocity.y < -28), 'moving faster than the release speed');
});

test('cubes are released above the frame', async () => {
  const { field, physics } = makeField(10);
  const done = field.drop(0.5, 0);
  field.tick(1 / 600); // the first cube is due at time zero
  assert.ok(physics.bodies.length >= 1);
  assert.ok(physics.bodies[0].position.y > 19.9 && physics.bodies[0].position.y <= 20);
  field.tick(1);
  await done;
});

test('dropped cubes fall to the floor and settle inside the arena', async () => {
  const { field, physics, count } = makeField(30);
  const done = field.drop(0.2, 0);
  field.tick(0.3);
  await done;
  physics.settle(1500);
  field.sync();
  const arena = arenaSize(count);
  for (let i = 0; i < count; i++) {
    const p = positionOf(field, i);
    assert.ok(p.y > 0.4 && p.y < 3.5, `cube ${i} rests at y = ${p.y}`);
    assert.ok(Math.abs(p.x) <= arena.width / 2 && Math.abs(p.z) <= arena.depth / 2);
  }
});

test('lifting away removes the bodies and hides every cube', async () => {
  const { field, physics, count } = makeField();
  const done = field.drop(0.1, 0);
  field.tick(0.2);
  await done;
  physics.settle(900);
  field.sync();
  const before = positionOf(field, 0).y;
  await field.liftAway(0.1);
  assert.equal(physics.bodies.length, 0);
  for (let i = 0; i < count; i++) assert.equal(scaleOf(field, i), 0);
  assert.ok(before < 5);
});

test('capture records every cube, and clear empties the field', async () => {
  const { field, physics, count } = makeField(10);
  assert.ok(field.capture().every((c) => c.spawned === false));
  const done = field.drop(0.1, 0);
  field.tick(0.2);
  await done;
  const snapshot = field.capture();
  assert.equal(snapshot.length, count);
  assert.ok(snapshot.every((c) => c.spawned && Number.isFinite(c.p.y) && /^#[0-9a-f]{6}$/.test(c.colour)));
  field.clear();
  assert.equal(physics.bodies.length, 0);
  assert.ok(field.capture().every((c) => c.spawned === false));
});

test('dropping again starts from scratch', async () => {
  const { field, physics, count } = makeField(10);
  let done = field.drop(0.1, 0);
  field.tick(0.2);
  await done;
  done = field.drop(0.1, 0);
  assert.equal(physics.bodies.length, 0, 'the first drop was cleared');
  field.tick(0.2);
  await done;
  assert.equal(physics.bodies.length, count);
});
