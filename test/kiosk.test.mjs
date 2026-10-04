import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createKiosk, listenForInput } from '../src/kiosk.js';
import { KIOSK, STEPS } from '../src/config.js';

// A clock and timers the test controls
function fakeTime() {
  let time = 0;
  let next = 1;
  const pending = new Map();
  return {
    now: () => time,
    timers: {
      set: (fn, ms) => { const id = next++; pending.set(id, { fn, at: time + ms }); return id; },
      clear: (id) => pending.delete(id),
    },
    // move time on by `ms`, running timers as they fall due
    advance(ms) {
      const end = time + ms;
      for (;;) {
        const due = [...pending.entries()].filter(([, t]) => t.at <= end).sort((a, b) => a[1].at - b[1].at)[0];
        if (!due) break;
        pending.delete(due[0]);
        time = due[1].at;
        due[1].fn();
      }
      time = end;
    },
    get waiting() { return pending.size; },
  };
}

// A step controller that just records what it is asked to do
function fakeController(count) {
  const log = [];
  const state = { index: 0, busy: false };
  const controller = {
    get state() { return { ...state }; },
    next() { log.push('next'); state.index += 1; return Promise.resolve(true); },
    restart() { log.push('restart'); state.index = 0; return Promise.resolve(true); },
  };
  return { controller, log, state };
}

const steps = STEPS.map((s) => ({ ...s }));
const last = steps.length - 1;

function setup(options = {}) {
  const time = fakeTime();
  const { controller, log, state } = fakeController(steps.length);
  const modes = [];
  const kiosk = createKiosk({ controller, steps, timers: time.timers, now: time.now, onChange: (m) => modes.push(m), ...options });
  // what the page does: the step changes, the animation ends, the caption has appeared
  const settle = (index) => {
    state.index = index;
    state.busy = true;
    kiosk.stateChanged(controller.state);
    state.busy = false;
    kiosk.stateChanged(controller.state);
    kiosk.captionComplete(index);
  };
  return { time, controller, log, state, kiosk, modes, settle };
}

test('it does nothing until it is started', () => {
  const { time, log, kiosk } = setup();
  time.advance(10 * 60 * 1000);
  assert.equal(kiosk.mode, 'off');
  assert.deepEqual(log, []);
});

test('started on the opening screen, it moves on after the opening dwell', () => {
  const { time, log, kiosk } = setup();
  kiosk.start();
  assert.equal(kiosk.mode, 'auto');
  time.advance(KIOSK.introDwell * 1000 - 100);
  assert.deepEqual(log, []);
  time.advance(200);
  assert.deepEqual(log, ['next']);
});

test('it waits for the step to finish and for its caption to appear before it starts counting', () => {
  const { time, log, kiosk, state, controller } = setup();
  kiosk.start();
  time.advance(KIOSK.introDwell * 1000 + 1);
  assert.deepEqual(log, ['next']);
  // the step is playing: a long time passes with nothing finished
  state.busy = true;
  kiosk.stateChanged(controller.state);
  time.advance(60 * 1000);
  assert.deepEqual(log, ['next'], 'it does not move on while the step plays');
  state.busy = false;
  kiosk.stateChanged(controller.state);
  time.advance(60 * 1000);
  assert.deepEqual(log, ['next'], 'nor while the caption has not appeared');
  kiosk.captionComplete(1);
  assert.equal(time.waiting, 1, 'now it counts');
});

test('the time on a step grows with the words in its caption, within limits', () => {
  const dwellOf = (index) => {
    const { time, log, kiosk, settle } = setup();
    kiosk.start();
    settle(index);
    const before = log.length;
    for (let s = 1; s < 120; s++) {
      time.advance(1000);
      if (log.length > before) return s;
    }
    return Infinity;
  };
  const wordsOf = (i) => steps[i].text.trim().split(/\s+/).length;
  const expected = (i) => Math.min(KIOSK.maxDwell, Math.max(KIOSK.minDwell, KIOSK.base + KIOSK.perWord * wordsOf(i)));
  for (const i of [1, 4, 6]) {
    assert.ok(Math.abs(dwellOf(i) - expected(i)) <= 1, `step ${i}: ${dwellOf(i)} s, wanted about ${expected(i).toFixed(1)}`);
  }
  assert.ok(dwellOf(steps.findIndex((s) => s.statement)) >= KIOSK.minDwell, 'a title with no caption still stays a while');
});

test('after the last step it starts the story again', () => {
  const { time, log, kiosk, settle } = setup();
  kiosk.start();
  settle(last);
  time.advance(KIOSK.finaleDwell * 1000 + 1);
  assert.deepEqual(log, ['restart']);
});

test('under reduced motion each step stays twice as long', () => {
  const { time, log, kiosk } = setup({ reduced: () => true });
  kiosk.start();
  time.advance(KIOSK.introDwell * 1000 + 1);
  assert.deepEqual(log, []);
  time.advance(KIOSK.introDwell * 1000);
  assert.deepEqual(log, ['next']);
});

test('any key press, click or touch hands control to the visitor and stops it playing', () => {
  for (const kind of ['keydown', 'pointerdown', 'wheel', 'touchstart']) {
    const { time, log, kiosk } = setup();
    kiosk.start();
    time.advance(1000);
    kiosk.input(kind);
    assert.equal(kiosk.mode, 'manual', kind);
    time.advance(10 * 60 * 1000);
    assert.deepEqual(log, [], `${kind}: it does not move on by itself`);
  }
});

test('moving the pointer hands control over too, but not a tiny movement or one just after it started', () => {
  const { time, kiosk } = setup();
  kiosk.start();
  kiosk.input('pointermove', true);
  assert.equal(kiosk.mode, 'auto', 'inside the short grace after starting');
  time.advance(KIOSK.pointerGrace * 1000 + 100);
  kiosk.input('pointermove', false);
  assert.equal(kiosk.mode, 'auto', 'a tiny movement does not count');
  kiosk.input('pointermove', true);
  assert.equal(kiosk.mode, 'manual');
});

test('the visitor can start it again after taking over', () => {
  const { time, log, kiosk } = setup();
  kiosk.start();
  kiosk.input('keydown');
  assert.equal(kiosk.mode, 'manual');
  kiosk.start();
  assert.equal(kiosk.mode, 'auto');
  time.advance(KIOSK.introDwell * 1000 + 1);
  assert.deepEqual(log, ['next']);
});

test('at an event, a visitor who does nothing for a while is returned to the opening screen and it plays again', () => {
  const { time, log, kiosk, settle, modes } = setup({ eventMode: true });
  kiosk.start();
  settle(3);
  kiosk.input('keydown');
  assert.equal(kiosk.mode, 'manual');
  time.advance((KIOSK.idleReturn - 5) * 1000);
  assert.deepEqual(log, []);
  kiosk.input('pointermove', true); // still there: the wait starts again
  time.advance((KIOSK.idleReturn - 5) * 1000);
  assert.deepEqual(log, [], 'activity restarted the wait');
  time.advance(6 * 1000);
  assert.deepEqual(log, ['restart']);
  assert.equal(kiosk.mode, 'auto');
  assert.deepEqual(modes.slice(-2), ['manual', 'auto']);
});

test('away from an event (started by the link), taking over is for good', () => {
  const { time, log, kiosk, settle } = setup({ eventMode: false });
  kiosk.start();
  settle(3);
  kiosk.input('keydown');
  time.advance(60 * 60 * 1000);
  assert.equal(kiosk.mode, 'manual');
  assert.deepEqual(log, []);
});

test('the virtual cursor is out only while it plays itself, on a step that reacts to the cursor, once the step is complete', () => {
  const arena = { width: 40, depth: 25 };
  const { kiosk, settle, state, controller } = setup();
  const repelling = steps.findIndex((s) => s.repel);
  const notRepelling = steps.findIndex((s) => !s.repel && s.id !== 'intro');
  kiosk.start();
  assert.equal(kiosk.virtualPoint(arena), null, 'not on the opening screen');
  state.index = repelling;
  state.busy = true;
  kiosk.stateChanged(controller.state);
  assert.equal(kiosk.virtualPoint(arena), null, 'not while the step plays');
  settle(repelling);
  kiosk.update(2);
  const point = kiosk.virtualPoint(arena);
  assert.ok(point && Math.abs(point.x) <= 0.38 * arena.width && Math.abs(point.z) <= 0.3 * arena.depth, 'on the floor');
  kiosk.update(1);
  const moved = kiosk.virtualPoint(arena);
  assert.notDeepEqual(moved, point, 'it sweeps');
  settle(notRepelling);
  assert.equal(kiosk.virtualPoint(arena), null, 'not on a step that does not react to the cursor');
  settle(repelling);
  kiosk.input('keydown');
  assert.equal(kiosk.virtualPoint(arena), null, 'gone once the visitor takes over');
});

test('input listeners pass key presses and clicks on, and small pointer movements are marked as such', () => {
  const heard = [];
  const kiosk = { input: (kind, moved) => heard.push([kind, moved]) };
  const listeners = {};
  const target = { addEventListener: (type, fn) => { listeners[type] = fn; } };
  listenForInput(kiosk, target);
  listeners.keydown();
  listeners.pointerdown();
  listeners.pointermove({ clientX: 100, clientY: 100 });
  listeners.pointermove({ clientX: 102, clientY: 101 });
  listeners.pointermove({ clientX: 200, clientY: 150 });
  assert.deepEqual(heard, [['keydown', undefined], ['pointerdown', undefined], ['pointermove', true], ['pointermove', false], ['pointermove', true]]);
});
