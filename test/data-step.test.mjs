import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { arenaSize, spawnPlan, streamLanes, streamRadius } from '../src/arena.js';
import { createPhysics } from '../src/physics.js';
import { repel } from '../src/repulsion.js';
import { createCubeField } from '../src/cubes.js';
import { REPEL, STREAM } from '../src/config.js';

const dt = 1 / 60;
const STEADY = { ...STREAM, variation: 0 }; // a pour with no random changes, for exact comparisons

// ---- arena ---------------------------------------------------------------------------
test('the arena grows with the cube count and keeps its shape', () => {
  const small = arenaSize(50);
  const large = arenaSize(400);
  assert.ok(large.width > small.width && large.depth > small.depth);
  assert.ok(Math.abs(small.width / small.depth - 1.5) < 1e-9);
  assert.ok(Math.abs(large.width * large.depth / 400 - 6) < 1e-6, 'six square units per cube');
});

test('the spawn plan is repeatable, and with no ramp releases cubes evenly', () => {
  const a = spawnPlan(164, { duration: 1 });
  assert.deepEqual(a, spawnPlan(164, { duration: 1 }));
  assert.notDeepEqual(a, spawnPlan(164, { duration: 1, seed: 2 }));
  const even = spawnPlan(164, { duration: 1, stream: STEADY });
  const delays = even.map((c) => c.delay).sort((x, y) => x - y);
  delays.forEach((d, k) => assert.ok(Math.abs(d - (k + 0.5) / 164) < 1e-9));
  for (const c of a) {
    const q = c.quaternion;
    assert.ok(Math.abs(Math.hypot(q.x, q.y, q.z, q.w) - 1) < 1e-9, 'unit quaternion');
    assert.equal(c.velocity.y, -STREAM.speed);
  }
});

test('the release rate ramps up at the start and down at the end', () => {
  const plan = spawnPlan(164, { duration: 1, ramp: 0.5, stream: STEADY });
  const released = (from, to) => plan.filter((c) => c.delay >= from && c.delay < to).length;
  assert.ok(plan.every((c) => c.delay >= 0 && c.delay <= 1));
  const start = released(0, 0.1);
  const middle = released(0.45, 0.55);
  const end = released(0.9, 1);
  assert.ok(middle > 6 * start, `starts slowly (${start} cubes in the first 0.1 s, ${middle} in the middle 0.1 s)`);
  assert.ok(middle > 6 * end, `and tails off (${end} in the last 0.1 s)`);
  assert.ok(Math.abs(released(0, 0.5) - released(0.5, 1.01)) <= 2, 'the ramp up and down match');
});

test('a short ramp leaves a steady flow in between', () => {
  // 2 s release with 0.5 s ramps: 0.5 s up, 1 s steady, 0.5 s down
  const plan = spawnPlan(300, { duration: 2, ramp: 0.5, stream: STEADY });
  const released = (from, to) => plan.filter((c) => c.delay >= from && c.delay < to).length;
  assert.ok(Math.abs(released(0.6, 0.9) - released(1.0, 1.3)) <= 3, 'equal counts in equal steady spans');
  assert.ok(released(0, 0.1) < released(0.6, 0.7) / 4);
  const delays = plan.map((c) => c.delay).sort((x, y) => x - y);
  assert.ok(Math.abs(delays[149] - 1) < 0.01, 'half the cubes are out at the midpoint');
});

test('the stream is a narrow column into the middle of the floor', () => {
  const plan = spawnPlan(164, { duration: 1 });
  const arena = arenaSize(164);
  for (const c of plan) {
    assert.ok(Math.hypot(c.x, c.z) < 6, 'within a few units of the centre');
    assert.ok(Math.abs(c.x) < arena.width / 2 && Math.abs(c.z) < arena.depth / 2);
  }
});

test('no cube is released inside another: lanes are apart and cubes in a lane are spaced out', () => {
  for (const [count, ramp, stream] of [[30, 0, STEADY], [164, 0, STEADY], [405, 0, STEADY], [164, 0.5, STEADY], [30, 0, STREAM], [164, 0.5, STREAM], [164, 1, STREAM], [405, 0.5, STREAM]]) {
    const plan = spawnPlan(count, { duration: 2, ramp, stream });
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
        assert.ok((times[k] - times[k - 1]) * STREAM.speed >= STREAM.gap - 1e-6,
          `gap along the lane at release (${count} cubes, ramp ${ramp})`);
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
  for (let f = 0; f < 60 && physics.bodies.length === 0; f++) field.tick(1 / 600); // wait for the first cube
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

test('the stream radius matches the outermost lane of the plan', () => {
  for (const count of [30, 164, 405]) {
    for (const ramp of [0, 0.5]) {
      const timing = { duration: 1, ramp };
      const widest = (stream) => Math.max(...spawnPlan(count, { ...timing, stream }).map((c) => Math.hypot(c.x, c.z)));
      assert.ok(Math.abs(streamRadius(count, timing, STEADY) - widest(STEADY)) < 1e-9);
      assert.ok(widest(STREAM) <= streamRadius(count, timing, STREAM) + 1e-9, 'no cube is released outside the stream radius');
    }
  }
  assert.ok(streamRadius(164, { duration: 2, ramp: 1 }) < 6.5, 'a narrow stream');
});

// ---- random changes in the pour ------------------------------------------------------
test('the rate and width of the pour change at random but stay within 50% of the plain pour', () => {
  const timing = { duration: 4, ramp: 0.5 };
  const count = 400;
  const plain = spawnPlan(count, { ...timing, stream: STEADY });
  const random = spawnPlan(count, timing);
  const window = 0.25;
  const counts = (plan, from, to) => {
    const out = [];
    for (let s = from; s + window <= to + 1e-9; s += window) {
      out.push(plan.filter((c) => c.delay >= s && c.delay < s + window).length);
    }
    return out;
  };
  // the steady middle of the pour, from 1 s to 3 s, where the plain pour has a constant rate
  const base = counts(plain, 1, 3);
  const varied = counts(random, 1, 3);
  const mean = base.reduce((a, b) => a + b, 0) / base.length;
  assert.ok(Math.max(...base) - Math.min(...base) <= 2, 'the plain pour is even');
  assert.ok(Math.max(...varied) / Math.min(...varied) > 1.3, `the rate changes (${varied.join(' ')})`);
  assert.ok(Math.max(...varied) <= mean * 1.5 * 1.3, 'at most 50% above the plain rate (with slack for the window)');
  assert.ok(Math.min(...varied) >= mean * 0.5 * 0.7, 'at least 50% below the plain rate (with slack)');

  // the width: how many lanes are in use in each window
  const lanesUsed = (plan, from, to) => {
    const out = [];
    for (let s = from; s + window <= to + 1e-9; s += window) {
      out.push(new Set(plan.filter((c) => c.delay >= s && c.delay < s + window).map((c) => c.x + ',' + c.z)).size);
    }
    return out;
  };
  const widths = lanesUsed(random, 1, 3);
  assert.ok(Math.max(...widths) > Math.min(...widths) * 1.3, `the width changes (${widths.join(' ')})`);
  const lanesInPlan = new Set(random.map((c) => c.x + ',' + c.z)).size;
  const lanesPlain = new Set(plain.map((c) => c.x + ',' + c.z)).size;
  assert.ok(lanesInPlan <= Math.ceil(lanesPlain * 1.5 + 1), 'never more than 50% more lanes than the plain pour');
});

test('the random pour is repeatable for a seed and differs between seeds', () => {
  const timing = { duration: 2, ramp: 1 };
  assert.deepEqual(spawnPlan(164, timing), spawnPlan(164, timing));
  const a = spawnPlan(164, timing).map((c) => c.delay);
  const b = spawnPlan(164, { ...timing, seed: 9 }).map((c) => c.delay);
  assert.notDeepEqual(a, b);
});

test('the pour still ends close to its planned time when the stream is narrow', () => {
  for (const seed of [1, 2, 3, 4, 5]) {
    const delays = spawnPlan(164, { duration: 2, ramp: 1, seed }).map((c) => c.delay);
    assert.ok(Math.max(...delays) < 2.6, `seed ${seed}: last cube at ${Math.max(...delays).toFixed(2)} s`);
  }
});

test('lanes are the inner part of a growing spiral', () => {
  const lanes = streamLanes(30, 1.25);
  const radii = lanes.map((p) => Math.hypot(p.x, p.z));
  for (let i = 1; i < radii.length; i++) assert.ok(radii[i] >= radii[i - 1] - 1e-9);
});
