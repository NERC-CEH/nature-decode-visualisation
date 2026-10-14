import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { isPhone, isPortrait, needsTurn, watchTurn } from '../src/device.js';
import { createQuality, TIERS, QUALITY } from '../src/quality.js';

const sandbox = { module: { exports: {} } };
vm.runInNewContext(readFileSync('data/load-data.js', 'utf8'), sandbox);
const loader = sandbox.module.exports;

const screenEnv = (width, height, coarse) => ({ screen: { width, height }, matchMedia: () => ({ matches: coarse }) });

// ---- the loader --------------------------------------------------------------------------------
test('a phone is a touch screen with a short side of 500 px or less, in either orientation', () => {
  assert.equal(loader.isPhone(screenEnv(390, 844, true)), true);
  assert.equal(loader.isPhone(screenEnv(844, 390, true)), true);
  assert.equal(loader.isPhone(screenEnv(820, 1180, true)), false, 'a tablet');
  assert.equal(loader.isPhone(screenEnv(390, 844, false)), false, 'a narrow desktop window');
  assert.equal(loader.isPhone({}), false);
  assert.equal(loader.isPhone(undefined), false);
});

test('a phone loads the 7 x 7 x 7 cube unless the address asks for a size', () => {
  assert.equal(loader.fileFor('', true), 'data/data-cube-7.js');
  assert.equal(loader.fileFor('?debug', true), 'data/data-cube-7.js');
  assert.equal(loader.fileFor('?size=10', true), 'data/data-cube-10.js');
  assert.equal(loader.fileFor('?size=9', true), 'data/data-cube.js');
  assert.equal(loader.fileFor('?size=99', true), 'data/data-cube-7.js');
  assert.equal(loader.fileFor('', false), 'data/data-cube.js');
});

// ---- device ------------------------------------------------------------------------------------
test('a phone held upright needs turning; a phone on its side, or a desktop, does not', () => {
  const env = (phone, portrait) => ({ UKCEH_PHONE: phone, matchMedia: () => ({ matches: portrait }) });
  assert.equal(isPhone({ UKCEH_PHONE: true }), true);
  assert.equal(isPhone({}), false);
  assert.equal(needsTurn(env(true, true)), true);
  assert.equal(needsTurn(env(true, false)), false);
  assert.equal(needsTurn(env(false, true)), false);
  assert.equal(isPortrait({ innerWidth: 400, innerHeight: 800 }), true, 'without matchMedia it uses the window size');
});

test('watchTurn reports now and again only when the answer changes', () => {
  const listeners = {};
  let portrait = true;
  const env = {
    UKCEH_PHONE: true,
    matchMedia: () => ({ matches: portrait }),
    addEventListener: (type, fn) => { listeners[type] = fn; },
    removeEventListener: (type) => { delete listeners[type]; },
  };
  const heard = [];
  const stop = watchTurn((needed) => heard.push(needed), env);
  listeners.resize();
  portrait = false;
  listeners.resize();
  listeners.orientationchange();
  assert.deepEqual(heard, [true, false]);
  stop();
  assert.deepEqual(Object.keys(listeners), []);
});

// ---- quality -----------------------------------------------------------------------------------
const run = (quality, frames, dt) => { for (let i = 0; i < frames; i++) quality.frame(dt); };

test('a phone starts a tier down from a desktop', () => {
  assert.equal(createQuality({ phone: false }).tier, TIERS[0]);
  assert.equal(createQuality({ phone: true }).tier, TIERS[1]);
});

test('quality holds while frames are fast, and drops a tier after a slow stretch', () => {
  const changes = [];
  const quality = createQuality({ phone: false, onChange: (t) => changes.push(t.name) });
  run(quality, QUALITY.warmup + QUALITY.window * 3, 1 / 60);
  assert.deepEqual(changes, []);
  run(quality, QUALITY.window, 1 / 20);
  assert.deepEqual(changes, ['medium']);
  run(quality, QUALITY.warmup, 1 / 20); // settling after a change is not counted
  assert.deepEqual(changes, ['medium']);
  run(quality, QUALITY.window, 1 / 20);
  assert.deepEqual(changes, ['medium', 'low']);
  run(quality, 1000, 1 / 5); // already at the bottom, and it never climbs back
  assert.equal(quality.tier.name, 'low');
  assert.deepEqual(changes, ['medium', 'low']);
});

test('slow frames while the app starts up do not count', () => {
  const changes = [];
  const quality = createQuality({ phone: false, onChange: (t) => changes.push(t.name) });
  run(quality, QUALITY.warmup, 0.1);
  run(quality, QUALITY.window, 1 / 60);
  assert.deepEqual(changes, []);
});

test('a phone is allowed slower frames than a desktop before it drops', () => {
  const dt = 1 / 33; // between the two thresholds
  const desktop = createQuality({ phone: false });
  const phone = createQuality({ phone: true });
  run(desktop, QUALITY.warmup + QUALITY.window, dt);
  run(phone, QUALITY.warmup + QUALITY.window, dt);
  assert.equal(desktop.tier.name, 'medium');
  assert.equal(phone.tier.name, 'medium', 'it started at medium and has not dropped to low');
});

// ---- tags ----------------------------------------------------------------------------------------
import { crosses } from '../src/callout.js';

test('a line crosses a box only if it passes through it', () => {
  const box = { left: 10, right: 20, top: 10, bottom: 20 };
  assert.equal(crosses({ x1: 0, y1: 15, x2: 30, y2: 15 }, box), true);
  assert.equal(crosses({ x1: 0, y1: 0, x2: 30, y2: 30 }, box), true);
  assert.equal(crosses({ x1: 0, y1: 0, x2: 9, y2: 30 }, box), false);
  assert.equal(crosses({ x1: 12, y1: 12, x2: 14, y2: 14 }, box), true, 'ending inside it');
  assert.equal(crosses({ x1: 0, y1: 25, x2: 30, y2: 25 }, box), false);
  assert.equal(crosses({ x1: 15, y1: 0, x2: 15, y2: 9 }, box), false, 'a vertical line stopping short');
});
