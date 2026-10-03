import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import * as THREE from 'three';
import { arenaSize } from '../src/arena.js';
import { createPhysics } from '../src/physics.js';
import { createCubeField } from '../src/cubes.js';
import { arrangement, cubeFrame, sheetOf } from '../src/layout.js';
import { createRotation } from '../src/rotate.js';
import { createFrame } from '../src/frame.js';
import { arrangeStep } from '../src/steps/arrange.js';
import { CUBE, ROTATE } from '../src/config.js';
import { loadCube } from '../src/data.js';

const cube = loadCube(JSON.parse(readFileSync('data/data-cube.json', 'utf8')));
const arena = arenaSize(cube.cubes.length);

// ---- layout ---------------------------------------------------------------------------------
test('every cube has its own cell, inside the frame, at the right place on each axis', () => {
  const cells = arrangement(cube.cubes, cube.displayOrder, cube.size);
  const { edge, centreY } = cubeFrame(cube.size);
  const keys = new Set(cells.map((c) => `${c.x},${c.y},${c.z}`));
  assert.equal(keys.size, cube.cubes.length, 'no two cubes share a cell');
  for (const c of cells) {
    assert.ok(Math.abs(c.x) < edge / 2 && Math.abs(c.z) < edge / 2 && Math.abs(c.y - centreY) < edge / 2);
  }
  // time runs left to right, location front to back, and the species in display order upwards
  const a = cube.cubes.findIndex((c) => c.time === 0);
  const b = cube.cubes.findIndex((c) => c.time === cube.size - 1);
  assert.ok(cells[a].x < cells[b].x);
  const lo = cube.cubes.findIndex((c) => c.location === 0);
  const hi = cube.cubes.findIndex((c) => c.location === cube.size - 1);
  assert.ok(cells[lo].z < cells[hi].z);
  const bi = cube.cubes.findIndex((c) => c.species === cube.displayOrder[0]);
  const ti = cube.cubes.findIndex((c) => c.species === cube.displayOrder.at(-1));
  assert.ok(cells[bi].y < cells[ti].y);
});

test('the cube floats above the floor and its sheets follow the display order', () => {
  const { edge, centreY } = cubeFrame(cube.size);
  assert.ok(centreY - edge / 2 >= CUBE.floorGap - 1e-9);
  const sheets = sheetOf(cube.cubes, cube.displayOrder);
  cube.cubes.forEach((c, i) => assert.equal(sheets[i], cube.displayOrder.indexOf(c.species)));
  assert.equal(Math.min(...sheets), 0);
  assert.equal(Math.max(...sheets), cube.size - 1);
});

test('the layout copes with any cube size', () => {
  for (const size of [5, 7, 12]) {
    const { edge } = cubeFrame(size);
    assert.ok(Math.abs(edge - size * CUBE.pitch) < 1e-9);
  }
});

// ---- rotation -------------------------------------------------------------------------------
test('dragging turns the cube and letting go springs it back to the angle the step wants', () => {
  const pivot = new THREE.Group();
  const rotation = createRotation({ element: null, pivot });
  rotation.enabled = true;
  rotation.setTarget({ yaw: -0.55, pitch: 0.05 });
  rotation.drag(100, -40);
  assert.ok(Math.abs(rotation.state.yaw - 100 * ROTATE.sensitivity) < 1e-9);
  assert.ok(Math.abs(pivot.rotation.y - rotation.state.yaw) < 1e-9, 'the pivot turns with it');
  assert.equal(rotation.atRest, false);
  for (let f = 0; f < 60 * 3; f++) rotation.update(1 / 60);
  assert.ok(Math.abs(rotation.state.yaw + 0.55) < 1e-3 && Math.abs(rotation.state.pitch - 0.05) < 1e-3);
  assert.equal(rotation.atRest, true);
});

test('a cube turned more than a half turn springs back the short way', () => {
  const rotation = createRotation({ element: null, pivot: new THREE.Group() });
  rotation.drag((Math.PI * 1.75) / ROTATE.sensitivity, 0); // 315 degrees round
  rotation.update(0.001);
  const before = rotation.state.yaw;
  rotation.update(0.2);
  assert.ok(rotation.state.yaw > before, 'it carries on round to the nearest copy of the target, not back through 315 degrees');
});

test('the tilt is limited and the spring never overshoots, at any frame length', () => {
  const rotation = createRotation({ element: null, pivot: new THREE.Group() });
  rotation.drag(0, 1e6);
  assert.ok(rotation.state.pitch <= ROTATE.maxPitch + 1e-9);
  let widest = 0;
  for (const frame of [1 / 120, 1 / 30, 0.1]) {
    rotation.drag(500, 0);
    const start = rotation.state.yaw;
    for (let t = 0; t < 4; t += frame) {
      rotation.update(frame);
      widest = Math.max(widest, Math.abs(rotation.state.yaw));
    }
    assert.ok(Math.abs(rotation.state.yaw) < 0.01, `settled at frame length ${frame} (started at ${start.toFixed(2)})`);
  }
  assert.ok(widest <= 500 * ROTATE.sensitivity * 1.001 + 0.2, 'critically damped: it never swings past the start');
});

test('a pointer drag on the element turns the cube only while rotation is enabled', () => {
  const listeners = {};
  const element = { style: {}, addEventListener: (type, fn) => { listeners[type] = fn; }, setPointerCapture() {} };
  const rotation = createRotation({ element, pivot: new THREE.Group() });
  listeners.pointerdown({ button: 0, clientX: 10, clientY: 10, pointerId: 1 });
  listeners.pointermove({ clientX: 60, clientY: 10 });
  assert.equal(rotation.state.yaw, 0, 'disabled: no turn');
  rotation.enabled = true;
  assert.equal(element.style.cursor, 'grab');
  listeners.pointerdown({ button: 0, clientX: 10, clientY: 10, pointerId: 1 });
  listeners.pointermove({ clientX: 60, clientY: 10 });
  assert.ok(rotation.state.yaw > 0.3);
  listeners.pointerup({});
  rotation.update(0.016);
  assert.ok(rotation.state.yaw < 50 * ROTATE.sensitivity, 'springs back once released');
  rotation.enabled = false;
  assert.equal(element.style.cursor, '');
});

// ---- the frame ------------------------------------------------------------------------------
function makeFrame() {
  const parent = new THREE.Group();
  const made = [];
  const frame = createFrame({
    parent,
    edge: 11.25,
    centreY: 7.1,
    makeLabel: (text) => {
      const element = { textContent: text, style: {}, className: '', setAttribute() {} };
      made.push(element);
      return element;
    },
  });
  return { frame, parent, made };
}

test('the frame starts hidden and has titles for the three axes', () => {
  const { frame, made } = makeFrame();
  assert.equal(frame.amount, 0);
  assert.equal(frame.group.visible, false);
  assert.deepEqual(made.slice(0, 3).map((m) => m.textContent), ['Time', 'Species', 'Location']);
  assert.ok(made.every((m) => m.style.opacity === '0'));
});

test('the frame fades in and out, together with its titles', async () => {
  const { frame, made } = makeFrame();
  await frame.fadeTo(1, 0.05);
  assert.equal(frame.amount, 1);
  assert.equal(frame.group.visible, true);
  assert.ok(made.slice(0, 3).every((m) => m.style.opacity === '1'));
  await frame.fadeTo(0, 0.05);
  assert.equal(frame.group.visible, false);
  assert.ok(made.every((m) => m.style.opacity === '0'));
});

// ---- the flight to the cells ------------------------------------------------------------------
function makeField() {
  const physics = createPhysics();
  physics.setBounds(arena.width, arena.depth);
  const field = createCubeField({ scene: new THREE.Group(), physics, cubes: cube.cubes, arena });
  return { field, physics };
}
async function pile() {
  const { field, physics } = makeField();
  const dropped = field.drop(1, 0, 0.5);
  for (let f = 0; f < 4 * 60; f++) {
    field.tick(1 / 60);
    physics.step(1 / 60);
  }
  await dropped;
  return { field, physics };
}

test('arranging puts every cube exactly in its cell and takes it out of the physics', async () => {
  const { field, physics } = await pile();
  const cells = arrangement(cube.cubes, cube.displayOrder, cube.size);
  const sheets = sheetOf(cube.cubes, cube.displayOrder);
  await field.arrange(cells, (i) => sheets[i], cube.size, 0.3, 0.1);
  assert.equal(physics.bodies.length, 0);
  field.capture().forEach((c, i) => {
    assert.ok(Math.hypot(c.p.x - cells[i].x, c.p.y - cells[i].y, c.p.z - cells[i].z) < 1e-9, `cube ${i}`);
    assert.ok(Math.abs(Math.abs(c.q.w) - 1) < 1e-9 && Math.abs(c.q.x) + Math.abs(c.q.y) + Math.abs(c.q.z) < 1e-9, 'square to the axes');
  });
});

test('the sheets lift off one after another, bottom sheet first', async () => {
  const { field } = await pile();
  const cells = arrangement(cube.cubes, cube.displayOrder, cube.size);
  const sheets = sheetOf(cube.cubes, cube.displayOrder);
  const start = field.capture().map((c) => c.p.y);
  const done = field.arrange(cells, (i) => sheets[i], cube.size, 0.6, 0.2);
  await new Promise((r) => setTimeout(r, 150)); // a quarter of the way in
  const moved = field.capture().map((c, i) => Math.abs(c.p.y - start[i]) > 0.05);
  const share = (sheet) => {
    const ids = sheets.map((s, i) => (s === sheet ? i : -1)).filter((i) => i >= 0);
    return ids.filter((i) => moved[i]).length / ids.length;
  };
  assert.ok(share(0) > share(cube.size - 1), `bottom sheet has started (${share(0).toFixed(2)}), top has not (${share(cube.size - 1).toFixed(2)})`);
  await done;
});

test('Back from the arranged cube returns the cubes to the heaps, with their physics', async () => {
  const { field, physics } = await pile();
  const snapshot = field.capture();
  const cells = arrangement(cube.cubes, cube.displayOrder, cube.size);
  const sheets = sheetOf(cube.cubes, cube.displayOrder);
  await field.arrange(cells, (i) => sheets[i], cube.size, 0.2, 0.08);
  await field.restore(snapshot, 0.05);
  assert.equal(physics.bodies.length, cube.cubes.length);
  field.capture().forEach((c, i) => {
    assert.ok(Math.hypot(c.p.x - snapshot[i].p.x, c.p.y - snapshot[i].p.y, c.p.z - snapshot[i].p.z) < 1e-6, `cube ${i}`);
  });
});

test('lifting away works on an arranged cube, which has no physics bodies', async () => {
  const { field, physics } = await pile();
  const cells = arrangement(cube.cubes, cube.displayOrder, cube.size);
  const sheets = sheetOf(cube.cubes, cube.displayOrder);
  await field.arrange(cells, (i) => sheets[i], cube.size, 0.2, 0.08);
  await field.liftAway(0.05);
  assert.ok(field.capture().every((c) => !c.spawned), 'every cube is gone');
  assert.equal(physics.bodies.length, 0);
});

// ---- the step -------------------------------------------------------------------------------
test('the arrange step arranges the cubes, raises the camera and shows the frame; Back undoes all of it', async () => {
  const calls = [];
  const field = {
    arrange: (cells, sheetOfCube, sheets, total, flight) => {
      calls.push(['arrange', cells.length, sheets, total, flight, sheetOfCube(0)]);
      return Promise.resolve();
    },
    restore: (snapshot) => { calls.push(['restore', snapshot]); return Promise.resolve(); },
  };
  const scene = {
    setView: (name) => { calls.push(['view', name]); return Promise.resolve(); },
    fadeShadow: (amount) => { calls.push(['shadow', amount]); return Promise.resolve(); },
  };
  const frame = { fadeTo: (amount) => { calls.push(['frame', amount]); return Promise.resolve(); } };
  const targets = [];
  const rotation = { setTarget: (t) => targets.push(t) };
  const ctx = { cube, field, scene, frame, rotation };
  await arrangeStep.enter(ctx);
  assert.deepEqual(targets[0], { yaw: CUBE.yaw, pitch: CUBE.tilt });
  assert.deepEqual(calls.find((c) => c[0] === 'view'), ['view', 'cube']);
  assert.deepEqual(calls.find((c) => c[0] === 'shadow'), ['shadow', 0]);
  assert.deepEqual(calls.find((c) => c[0] === 'frame'), ['frame', 1]);
  assert.equal(calls.find((c) => c[0] === 'arrange')[1], cube.cubes.length);
  calls.length = 0;
  const snapshot = [{ spawned: true }];
  await arrangeStep.reverse(ctx, { snapshot });
  assert.deepEqual(targets[1], { yaw: 0, pitch: 0 });
  assert.deepEqual(calls.find((c) => c[0] === 'view'), ['view', 'floor']);
  assert.deepEqual(calls.find((c) => c[0] === 'shadow'), ['shadow', 1]);
  assert.deepEqual(calls.find((c) => c[0] === 'frame'), ['frame', 0]);
  assert.equal(calls.find((c) => c[0] === 'restore')[1], snapshot);
});
