import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import * as THREE from 'three';
import { REDUCED_MAX, reducedMotion, scaled } from '../src/motion.js';
import { tween } from '../src/tween.js';
import { createRotation } from '../src/rotate.js';
import { buildSteps } from '../src/steps/index.js';
import { dataStep } from '../src/steps/data.js';
import { sortStep } from '../src/steps/sort.js';
import { arenaSize } from '../src/arena.js';
import { loadCube } from '../src/data.js';
import { ROTATE, STEPS } from '../src/config.js';

const cube = loadCube(JSON.parse(readFileSync('data/data-cube.json', 'utf8')));
const arena = arenaSize(cube.cubes.length);

// Run `fn` as a visitor who has asked for reduced motion (or not)
async function withReducedMotion(reduced, fn) {
  const saved = globalThis.matchMedia;
  globalThis.matchMedia = (query) => ({ matches: reduced && query.includes('prefers-reduced-motion') });
  try {
    return await fn();
  } finally {
    if (saved) globalThis.matchMedia = saved; else delete globalThis.matchMedia;
  }
}

// ---- reduced motion -------------------------------------------------------------------------------
test('reduced motion shortens every duration to a quick fade, and leaves short ones alone', async () => {
  assert.equal(reducedMotion(), false, 'off when the browser does not say');
  assert.equal(scaled(3), 3);
  await withReducedMotion(true, () => {
    assert.equal(reducedMotion(), true);
    assert.equal(scaled(3), REDUCED_MAX);
    assert.equal(scaled(0.2), 0.2);
  });
});

test('under reduced motion a long tween finishes in well under a second', async () => {
  await withReducedMotion(true, async () => {
    const start = performance.now();
    await tween({ duration: 5, onUpdate: () => {} }).finished;
    assert.ok(performance.now() - start < 1500, `took ${(performance.now() - start).toFixed(0)} ms`);
  });
});

test('under reduced motion the cube cuts to its new angle instead of turning', async () => {
  const rotation = createRotation({ element: null, pivot: new THREE.Group() });
  rotation.setTarget({ yaw: 1, pitch: 0.4 });
  assert.equal(rotation.state.yaw, 0, 'when motion is allowed it waits for the spring to turn it');
  await withReducedMotion(true, () => {
    rotation.setTarget({ yaw: 1.5, pitch: 0.2 });
    assert.equal(rotation.state.yaw, 1.5);
    assert.equal(rotation.state.pitch, 0.2);
    assert.equal(rotation.atRest, true);
  });
});

// ---- the physics steps are not played under reduced motion --------------------------------------
test('under reduced motion the Data step settles the cubes out of sight and fades them in', async () => {
  const calls = [];
  const field = {
    setVisible: (v) => calls.push(['visible', v]),
    drop: () => { calls.push(['drop']); return Promise.resolve(); },
    headless: (s, until) => { calls.push(['headless', s > 5 && typeof until === 'function']); return Promise.resolve(); },
    reveal: (s) => { calls.push(['reveal', s <= REDUCED_MAX]); return Promise.resolve(); },
  };
  await withReducedMotion(true, () => dataStep.enter({ field, setTheme: () => Promise.resolve(), network: null }));
  assert.deepEqual(calls.map((c) => c[0]), ['visible', 'drop', 'headless', 'reveal']);
  assert.deepEqual(calls[0], ['visible', false]);
  assert.deepEqual(calls.at(-1), ['reveal', true]);
});

test('under reduced motion the Sort step skips the explosion and shows the finished heaps', async () => {
  const calls = [];
  const field = {
    setVisible: (v) => calls.push(['visible', v]),
    explode: () => { calls.push(['explode']); return Promise.resolve(); },
    steer: () => { calls.push(['steer']); return Promise.resolve(); },
    headless: () => { calls.push(['headless']); return Promise.resolve(); },
    reveal: () => { calls.push(['reveal']); return Promise.resolve(); },
  };
  await withReducedMotion(true, () => sortStep.enter({ cube, arena, field }));
  assert.equal(calls.some((c) => c[0] === 'explode'), false, 'no explosion to watch');
  assert.deepEqual(calls.map((c) => c[0]), ['visible', 'steer', 'headless', 'reveal']);
});

// ---- the keyboard ---------------------------------------------------------------------------------
function keyboardRotation() {
  const listeners = {};
  const attributes = {};
  const element = {
    style: {},
    addEventListener: (type, fn) => { (listeners[type] ??= []).push(fn); },
    setAttribute: (name, value) => { attributes[name] = value; },
    removeAttribute: (name) => { delete attributes[name]; },
  };
  const rotation = createRotation({ element, pivot: new THREE.Group() });
  const press = (type, key) => {
    const event = { key, defaultPrevented: false, preventDefault() { this.defaultPrevented = true; } };
    (listeners[type] ?? []).forEach((fn) => fn(event));
    return event;
  };
  return { rotation, press, attributes };
}

test('the canvas can be reached with Tab on the steps where the cube turns, and not on the others', () => {
  const { rotation, attributes } = keyboardRotation();
  assert.equal(attributes.tabindex, undefined);
  rotation.enabled = true;
  assert.equal(attributes.tabindex, '0');
  assert.equal(attributes.role, 'application');
  rotation.enabled = false;
  assert.equal(attributes.tabindex, undefined);
  assert.equal(attributes.role, 'img');
});

test('the arrow keys turn the cube while held, and it springs back when they are let go', () => {
  const { rotation, press } = keyboardRotation();
  rotation.enabled = true;
  rotation.setTarget({ yaw: 0, pitch: 0 });
  const event = press('keydown', 'ArrowRight');
  assert.equal(event.defaultPrevented, true, 'the page does not scroll');
  for (let f = 0; f < 30; f++) rotation.update(1 / 60);
  assert.ok(Math.abs(rotation.state.yaw - 0.5 * ROTATE.keySpeed) < 0.01, `turned ${rotation.state.yaw.toFixed(2)} rad in half a second`);
  press('keydown', 'ArrowDown');
  for (let f = 0; f < 30; f++) rotation.update(1 / 60);
  assert.ok(rotation.state.pitch > 0.5, 'and tipped');
  press('keyup', 'ArrowRight');
  press('keyup', 'ArrowDown');
  for (let f = 0; f < 60 * 5; f++) rotation.update(1 / 60);
  assert.equal(rotation.atRest, true, 'back at rest');
});

test('the arrow keys do nothing on steps where the cube does not turn, and other keys are left alone', () => {
  const { rotation, press } = keyboardRotation();
  const ignored = press('keydown', 'ArrowLeft');
  assert.equal(ignored.defaultPrevented, false);
  rotation.enabled = true;
  assert.equal(press('keydown', 'PageDown').defaultPrevented, false, 'Next and Back shortcuts are not taken');
});

// ---- no WebGL --------------------------------------------------------------------------------------
test('without WebGL every step only changes the page, and still gives its words', async () => {
  const log = [];
  const steps = buildSteps(STEPS);
  const ctx = { scene: null, field: null, setTheme: (name) => { log.push(name); return Promise.resolve(); } };
  for (const step of steps) {
    await step.enter(ctx, { from: steps[0], to: step });
    await step.reverse(ctx, { from: step, to: steps[0] });
  }
  assert.equal(log.length, steps.length * 2, 'each step only set the theme');
  assert.ok(steps.every((step) => step.title), 'the words are there for the list');
});
