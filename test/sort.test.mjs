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
  for (let i = 1; i < zs.length; i++) assert.ok(Math.abs(zs[i] - zs[i - 1]) > SORT.zigzag * arena.depth);
  const apart = [];
  for (let i = 0; i < spots.length; i++) {
    for (let j = i + 1; j < spots.length; j++) apart.push(Math.hypot(spots[i].x - spots[j].x, spots[i].z - spots[j].z));
  }
  assert.ok(Math.min(...apart) > 0.19 * arena.width, `heaps well apart (closest ${Math.min(...apart).toFixed(1)})`);
});

test('at every cube size every heap spot is on the floor, with room for the heap before the wall', () => {
  for (const size of [5, 6, 7, 8, 9, 10, 11, 12]) {
    const sized = loadCube(JSON.parse(readFileSync(size === 9 ? 'data/data-cube.json' : `data/data-cube-${size}.json`, 'utf8')));
    const floor = arenaSize(sized.cubes.length);
    const spots = heapSpots(floor, sized.displayOrder);
    for (const s of spots) {
      assert.ok(Math.abs(s.z) <= floor.depth / 2 - 1.1, `size ${size}: spot z ${s.z.toFixed(1)} is too close to the wall at ${(floor.depth / 2).toFixed(1)}`);
      assert.ok(Math.abs(s.x) <= floor.width / 2 - 1.1, `size ${size}: spot x ${s.x.toFixed(1)}`);
    }
  }
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
  // as the Sort step does: throw the cubes apart and hold them in mid air, then pull
  const exploded = field.explode();
  frames(field, physics, 1.2);
  await exploded;
  const done = field.steer((i) => spots[cube.cubes[i].species], 3, 0);
  let finished = false;
  done.then(() => { finished = true; });
  for (let s = 0; s < 14 && !finished; s += 0.5) { // a bigger floor takes longer to cross; the pull gives up after 10 s
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
  let finished = false;
  done.then(() => { finished = true; });
  for (let s = 0; s < 14 && !finished; s += 0.5) {
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
    explode: () => { calls.push({ kind: 'explode' }); return Promise.resolve(); },
    steer: (targetOf, total, settle) => { calls.push({ kind: 'steer', targets: cube.cubes.slice(0, 3).map((_, i) => targetOf(i)), total, settle }); return Promise.resolve(); },
    restore: (snapshot, seconds) => { calls.push({ kind: 'restore', snapshot, seconds }); return Promise.resolve(); },
  };
  await sortStep.enter({ cube, arena, field });
  const snapshot = [{ spawned: true }];
  await sortStep.reverse({ cube, arena, field }, { snapshot });
  assert.equal(calls[0].kind, 'explode', 'the cubes are thrown apart first');
  assert.equal(calls[1].kind, 'steer');
  const spots = heapSpots(arena, cube.displayOrder);
  calls[1].targets.forEach((t, i) => assert.deepEqual(t, spots[cube.cubes[i].species]));
  assert.equal(calls[2].kind, 'restore');
  assert.equal(calls[2].snapshot, snapshot);
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

test('the explosion throws the cubes up and out, then holds them still in mid air', async () => {
  const { field, physics } = await scatter();
  const before = positionsOf(field);
  // how far each cube is from its nearest neighbour, on average
  const apart = (ps) => ps.reduce((sum, p, i) => sum + Math.min(...ps.filter((_, j) => j !== i).map((q) => Math.hypot(p.x - q.x, p.y - q.y, p.z - q.z))), 0) / ps.length;
  const done = field.explode(0.5, 0.5);
  let finished = false;
  done.then(() => { finished = true; });
  frames(field, physics, 0.6);
  const frozen = positionsOf(field);
  frames(field, physics, 0.3);
  const held = positionsOf(field);
  await new Promise((r) => setTimeout(r, 0));
  assert.equal(finished, false, 'still holding');
  const lifted = frozen.filter((p, i) => p.y > before[i].y + 0.3).length;
  assert.ok(lifted > cube.cubes.length * 0.9, `${lifted} cubes are higher than before`);
  assert.ok(apart(frozen) > apart(before) + 0.3, `the cubes are further apart (${apart(before).toFixed(2)} to ${apart(frozen).toFixed(2)})`);
  const drift = Math.max(...held.map((p, i) => Math.hypot(p.x - frozen[i].x, p.y - frozen[i].y, p.z - frozen[i].z)));
  assert.ok(drift < 0.25, `frozen cubes drift by at most ${drift.toFixed(2)}`);
  frames(field, physics, 0.5);
  await done;
});

test('the sort step is ready after a few seconds even if the pull has not finished', async () => {
  const field = {
    explode: () => Promise.resolve(),
    steer: () => new Promise(() => {}),
  };
  const config = await import('../src/config.js');
  const saved = config.DURATIONS.sortReady;
  config.DURATIONS.sortReady = 0.05;
  try {
    await sortStep.enter({ cube, arena, field }); // would hang if it waited for the pull
  } finally {
    config.DURATIONS.sortReady = saved;
  }
});

test('a cube that has reached its heap is no longer pulled, only slowed', () => {
  const physics = createPhysics();
  const body = physics.addCube({ x: 0.4, y: 5, z: 0 });
  body.velocity.set(3, 0, 0);
  steer(body, { x: 0, z: 0 }, 1 / 60, 1);
  assert.ok(body.velocity.x < 3 && body.velocity.x > 0, 'only the drag acts: it slows but is not pushed back');
  const outside = physics.addCube({ x: 5, y: 5, z: 0 });
  steer(outside, { x: 0, z: 0 }, 1 / 60, 1);
  assert.ok(outside.velocity.x < -1, 'a cube outside the release radius is pulled');
});

test('on the smallest floor the heaps stay low and no cube is left held up by the pull against the wall', async () => {
  const small = loadCube(JSON.parse(readFileSync('data/data-cube-5.json', 'utf8')));
  const floor = arenaSize(small.cubes.length);
  const physics = createPhysics();
  physics.setBounds(floor.width, floor.depth);
  const field = createCubeField({ scene: new THREE.Scene(), physics, cubes: small.cubes, arena: floor });
  const dropped = field.drop(2, 0, 1);
  frames(field, physics, 5);
  await dropped;
  const spots = heapSpots(floor, small.displayOrder);
  const boom = field.explode();
  frames(field, physics, 1.2);
  await boom;
  field.steer((i) => spots[small.cubes[i].species], 3, 0.5);
  frames(field, physics, 3.5); // well inside the main pull, when the pinned cubes used to hang
  const heights = positionsOf(field).map((p) => p.y).sort((a, b) => b - a);
  assert.ok(heights[0] < 3.2, `the highest cube is ${heights[0].toFixed(1)} up (3.9 with the old heap spots and no release; in the browser pinned cubes hung much higher)`);
});
