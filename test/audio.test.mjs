import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createAudio } from '../src/audio/index.js';
import { BED, STEPS, SOUND } from '../src/config.js';
import { createPhysics } from '../src/physics.js';

const logging = () => createAudio({ log: true, stepIds: STEPS.map((s) => s.id) });

test('every step has a bed', () => {
  for (const step of STEPS) assert.ok(BED.steps[step.id], `no bed for ${step.id}`);
});

test('in log mode each call is written to the list, with its time', () => {
  const audio = logging();
  audio.step('intro', 0);
  audio.step('data', 1);
  audio.tag();
  audio.turn();
  audio.finale();
  assert.deepEqual(audio.log.map((e) => e.type), ['step', 'step', 'tag', 'turn', 'finale']);
  assert.deepEqual(audio.log.slice(0, 2).map((e) => [e.id, e.direction]), [['intro', 0], ['data', 1]]);
  assert.ok(audio.log.every((e) => typeof e.t === 'number'));
});

test('slow contacts make no sound, and the strength follows the speed', () => {
  const audio = logging();
  audio.impact('cube', SOUND.impactMinSpeed / 2);
  assert.equal(audio.log.length, 0);
  audio.impact('ground', SOUND.impactFullSpeed * 2, 0);
  audio.impact('cube', SOUND.impactFullSpeed / 3, 0);
  const [hard, soft] = audio.log;
  assert.equal(hard.kind, 'ground');
  assert.equal(hard.strength, 1);
  assert.ok(soft.strength < 0.5 && soft.gain < hard.gain);
});

test('only the first few impacts of a physics step sound, and they are spread over the step', () => {
  const audio = logging();
  for (let i = 0; i < 20; i++) audio.impact('cube', SOUND.impactMinSpeed + 3, 0);
  assert.equal(audio.log.length, SOUND.impactsPerStep);
  const times = audio.log.map((e) => e.t);
  assert.ok(Math.max(...times) - Math.min(...times) <= SOUND.impactSpread + 0.002);
  audio.impact('cube', SOUND.impactMinSpeed + 3, 1 / 60); // the next step in the same frame has its own allowance
  assert.equal(audio.log.length, SOUND.impactsPerStep + 1);
});

test('the visitor\'s choice about sound is not undone by kiosk mode', () => {
  const changes = [];
  const audio = createAudio({ log: true, onChange: (m) => changes.push(m) });
  audio.setMuted(true); // kiosk mode
  assert.equal(audio.muted, true);
  audio.setMuted(false, { byVisitor: true }); // the visitor presses Sound
  audio.setMuted(true); // kiosk mode starts again
  assert.equal(audio.muted, false);
  assert.deepEqual(changes, [true, false]);
});

test('the physics reports ground and cube contacts with their speed', () => {
  const physics = createPhysics();
  const heard = [];
  physics.onImpact((kind, speed) => heard.push({ kind, speed }));
  physics.addCube({ x: 0, y: 3, z: 0 });
  physics.addCube({ x: 0, y: 6, z: 0 });
  for (let i = 0; i < 240; i++) physics.step(1 / 60);
  assert.ok(heard.some((h) => h.kind === 'ground' && h.speed > SOUND.impactMinSpeed), 'a cube hit the floor');
  assert.ok(heard.some((h) => h.kind === 'cube'), 'two cubes touched');
  assert.equal(heard.filter((h) => h.kind === 'cube').length, new Set(heard.filter((h) => h.kind === 'cube').map((h) => h.speed)).size, 'each cube contact is reported once');
});

// ---- the player, on a stand-in for an audio context ------------------------------------
function fakeContext() {
  const param = () => ({ value: 0, setValueAtTime() {}, linearRampToValueAtTime() {}, setTargetAtTime() {}, cancelScheduledValues() {} });
  const node = () => ({ connect() {}, disconnect() {}, gain: param(), threshold: param(), knee: param(), ratio: param(), attack: param(), release: param() });
  const started = [];
  return {
    started,
    destination: {},
    createGain: node,
    createDynamicsCompressor: node,
    createBufferSource: () => ({ ...node(), playbackRate: param(), start(at) { started.push(at); }, stop() {} }),
  };
}
const { createPlayer } = await import('../src/audio/player.js');

test('the voice limit counts sounds by when they end, so a whole soundtrack booked ahead is not cut off', () => {
  const ctx = fakeContext();
  const player = createPlayer(ctx);
  const buffer = { duration: 0.4 };
  // far more sounds than the limit, each well after the last one has ended: all must play
  for (let i = 0; i < SOUND.voices * 3; i++) assert.equal(player.effect(buffer, i * 10), true);
  assert.equal(ctx.started.length, SOUND.voices * 3);
  // but too many at the same moment are refused
  const again = fakeContext();
  const busy = createPlayer(again);
  const results = Array.from({ length: SOUND.voices + 5 }, () => busy.effect(buffer, 1));
  assert.equal(results.filter(Boolean).length, SOUND.voices);
});
