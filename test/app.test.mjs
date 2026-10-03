import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { loadCube } from '../src/data.js';
import { createController } from '../src/controller.js';
import { mixHex, themeColours, createTheme } from '../src/theme.js';
import { createPhysics } from '../src/physics.js';
import { tween } from '../src/tween.js';
import { STEPS, THEMES } from '../src/config.js';

const raw = () => JSON.parse(readFileSync('data/data-cube.json', 'utf8'));

// ---- data ----------------------------------------------------------------------------
test('loadCube derives one cube per record', () => {
  const cube = loadCube(raw());
  const records = raw().data.flat(2).reduce((a, b) => a + b, 0);
  assert.equal(cube.cubes.length, records);
  assert.equal(cube.size, 9);
  assert.deepEqual(cube.cubes.map((c) => c.id), cube.cubes.map((_, i) => i));
});

test('loadCube rejects bad data with a clear message', () => {
  assert.throws(() => loadCube(undefined), /no data found/);
  const wrongSize = raw();
  wrongSize.data.pop();
  assert.throws(() => loadCube(wrongSize), /expected 9 species layers/);
  const nonBinary = raw();
  nonBinary.data[0][0][0] = 2;
  assert.throws(() => loadCube(nonBinary), /expected 0 or 1/);
  const badOrder = raw();
  badOrder.meta.displayOrder = [0, 0, 1, 2, 3, 4, 5, 6, 7];
  assert.throws(() => loadCube(badOrder), /displayOrder/);
});

// ---- step controller -----------------------------------------------------------------
function makeController() {
  const log = [];
  const steps = ['a', 'b', 'c'].map((id) => ({
    id,
    title: id,
    enter: async (ctx, { from }) => { log.push(`enter ${id} from ${from.id}`); await Promise.resolve(); },
    reverse: async (ctx, { to, snapshot }) => { log.push(`reverse ${id} to ${to.id} snapshot=${JSON.stringify(snapshot)}`); },
  }));
  let counter = 0;
  const ctx = { capture: () => ({ n: ++counter }), reset: async () => { log.push('reset'); } };
  const changes = [];
  const controller = createController({ steps, ctx, onChange: (s) => changes.push(s) });
  return { controller, log, changes };
}

test('next and back move through the steps and call the step animations', async () => {
  const { controller, log } = makeController();
  assert.equal(controller.state.index, 0);
  assert.equal(controller.state.canBack, false);
  await controller.next();
  await controller.next();
  assert.equal(controller.state.index, 2);
  assert.equal(controller.state.canNext, false);
  assert.equal(controller.state.canRestart, true);
  await controller.back();
  assert.equal(controller.state.index, 1);
  assert.deepEqual(log, [
    'enter b from a',
    'enter c from b',
    'reverse c to b snapshot={"n":2}',
  ]);
});

test('a snapshot is taken on leaving a step forward and handed to reverse', async () => {
  const { controller, log } = makeController();
  await controller.next(); // leaves a: snapshot 1
  await controller.back(); // back to a, reverse of b receives a's snapshot
  assert.equal(log[1], 'reverse b to a snapshot={"n":1}');
});

test('presses are ignored while a step is playing', async () => {
  const { controller } = makeController();
  const first = controller.next();
  assert.equal(controller.state.busy, true);
  assert.equal(controller.state.canNext, false);
  assert.equal(await controller.next(), false);
  assert.equal(await controller.back(), false);
  await first;
  assert.equal(controller.state.index, 1);
  assert.equal(controller.state.busy, false);
});

test('next at the end and back at the start do nothing; restart returns to the intro', async () => {
  const { controller, log } = makeController();
  assert.equal(await controller.back(), false);
  await controller.next();
  await controller.next();
  assert.equal(await controller.next(), false);
  assert.equal(await controller.restart(), true);
  assert.equal(controller.state.index, 0);
  assert.ok(log.includes('reset'));
  assert.equal(await controller.restart(), false);
});

test('the caption step changes as a transition starts and busy clears when it ends', async () => {
  const { controller, changes } = makeController();
  await controller.next();
  assert.deepEqual(changes.map((s) => [s.index, s.busy]), [[1, true], [1, false]]);
});

test('an error in a step animation leaves the controller usable', async () => {
  const steps = [
    { id: 'a', enter: async () => {}, reverse: async () => {} },
    { id: 'b', enter: async () => { throw new Error('boom'); }, reverse: async () => {} },
  ];
  const original = console.error;
  console.error = () => {};
  const controller = createController({ steps, ctx: {} });
  await controller.next();
  console.error = original;
  assert.equal(controller.state.busy, false);
  assert.equal(controller.state.error.message, 'boom');
  assert.equal(await controller.back(), true);
});

test('the configured steps are in the order the spec gives', () => {
  assert.deepEqual(STEPS.map((s) => s.id),
    ['intro', 'data', 'categorise', 'sort', 'arrange', 'insight1', 'insight2', 'insight3', 'finale']);
  assert.deepEqual(STEPS.map((s) => s.theme),
    ['dark', 'light', 'light', 'light', 'light', 'light', 'light', 'light', 'dark']);
  assert.ok(STEPS.every((s) => s.title && s.text && s.canvasLabel));
});

// ---- theme ---------------------------------------------------------------------------
test('theme colours mix between light and dark', () => {
  assert.equal(mixHex('#000000', '#FFFFFF', 0.5), '#808080');
  assert.equal(themeColours(0).bg, THEMES.light.bg);
  assert.equal(themeColours(1).fg, THEMES.dark.fg);
});

test('the theme eases to its target and applies every change', async () => {
  const seen = [];
  const theme = createTheme((colours, t) => seen.push(t), 'dark');
  assert.equal(theme.value, 1);
  await theme.animateTo('light', 0.05);
  assert.equal(theme.value, 0);
  assert.equal(seen.at(-1), 0);
  assert.ok(seen.length > 2);
});

// ---- tween ---------------------------------------------------------------------------
test('a tween ends exactly at 1 and a cancelled tween stops', async () => {
  const values = [];
  const done = await tween({ duration: 0.03, onUpdate: (v) => values.push(v) }).finished;
  assert.equal(done, true);
  assert.equal(values.at(-1), 1);
  const handle = tween({ duration: 5, onUpdate: () => {} });
  handle.cancel();
  assert.equal(await handle.finished, false);
});

// ---- physics -------------------------------------------------------------------------
test('a cube dropped on the floor lands on it and goes to sleep', () => {
  const physics = createPhysics();
  const body = physics.addCube({ x: 0, y: 6, z: 0 });
  const steps = physics.settle(900);
  assert.ok(steps < 900, `still moving after ${steps} steps`);
  assert.ok(Math.abs(body.position.y - 0.5) < 0.05, `rests at y=${body.position.y}`);
});

test('settling is deterministic', () => {
  const run = () => {
    const physics = createPhysics();
    const bodies = [0, 1, 2].map((i) => physics.addCube({ x: i * 0.3, y: 3 + i * 1.5, z: 0.1 * i }));
    physics.settle(900);
    return bodies.map((b) => [b.position.x, b.position.y, b.position.z]);
  };
  assert.deepEqual(run(), run());
});
