// Sound for the animation: soft impacts, small cues and a quiet bed that follows the story. Everything
// is synthesised (see synth.js); there are no audio files.
//
// The page calls step(), impact(), tag(), turn() and finale(). Sound waits for the first tap or key
// press, as browsers require, and can be muted. Kiosk mode starts muted.
//
// With `log` set (the address has ?audiolog), nothing is played: each call is written to a list with
// its time instead. scripts/capture-video.mjs uses that list to build the soundtrack of the recorded
// video, so the video sounds exactly as the page would have.

import { BED, SOUND } from '../config.js';
import { createPlayer, perform } from './player.js';

const seconds = () => performance.now() / 1000;
const jitter = () => 0.9 + Math.random() * 0.2; // a little pitch variation, so repeats do not sound mechanical

// `synth` is { EFFECT_NAMES, renderBed, renderEffect } from synth.js, passed in so this file (and its tests)
// load without Tone.js; it is not needed in log mode.
export function createAudio({ synth = null, log = false, stepIds = Object.keys(BED.steps), muted = false, onChange = () => {} } = {}) {
  const events = [];
  let ctx = null;
  let player = null;
  let ready = false; // the sound effects have been drawn
  let wanted = null; // the step whose bed should be playing
  let playing = null; // the step whose bed is playing
  let userChoice = false; // the visitor has pressed the sound button
  let isMuted = muted;
  let bucket = { offset: -1, t: -1, n: 0 };
  let density = 0; // impacts recently sounded, fading over SOUND.densityTau
  let densityAt = 0;
  let tokens = SOUND.burst; // impacts allowed now: refilled at SOUND.rate a second, so a long rush stays a patter
  let tokensAt = 0;
  const state = {};
  const effects = {};
  const beds = {};
  const drawing = new Set();

  const supported = log || (Boolean(synth) && typeof window !== 'undefined' && Boolean(window.AudioContext || window.webkitAudioContext));

  // `delay` is how long after now the sound happens (see impact())
  function record(event, delay = 0) { events.push({ t: seconds() + delay, ...event }); }

  // ---- drawing the buffers, one at a time, in the background
  function drawBed(id) {
    if (beds[id] || drawing.has(id) || !BED.steps[id]) return;
    drawing.add(id);
    synth.renderBed(id).then((buffer) => {
      beds[id] = buffer;
      drawing.delete(id);
      startBedIfWanted();
    }).catch((error) => { drawing.delete(id); console.error(error); });
  }
  function drawEverything() {
    const first = Math.max(0, stepIds.indexOf(wanted));
    drawBed(wanted); // the one that is wanted now, then the rest in story order from there
    Promise.all(synth.EFFECT_NAMES.map((name) => synth.renderEffect(name).then((buffer) => { effects[name] = buffer; }))).then(() => {
      ready = true;
      for (let i = 0; i < stepIds.length; i++) drawBed(stepIds[(first + i) % stepIds.length]);
    }).catch((error) => console.error(error));
  }

  function startBedIfWanted() {
    if (!player || !wanted || playing === wanted || !beds[wanted]) return;
    player.bed(beds[wanted], ctx.currentTime + 0.02, playing ? BED.crossfade : 1.5);
    playing = wanted;
  }

  // ---- unlocking: the first tap or key press makes the audio context and starts drawing
  function unlock() {
    if (log || ctx || !supported) return;
    const Context = window.AudioContext || window.webkitAudioContext;
    ctx = new Context({ latencyHint: 'interactive' }); // playing buffers is cheap, so ask for the least delay: impacts must land with the picture
    player = createPlayer(ctx);
    if (isMuted) player.setMuted(true, ctx.currentTime);
    ctx.resume?.();
    drawEverything();
  }
  if (!log && typeof document !== 'undefined') {
    const once = () => { unlock(); for (const k of ['pointerdown', 'keydown']) document.removeEventListener(k, once, true); };
    for (const k of ['pointerdown', 'keydown']) document.addEventListener(k, once, { capture: true, passive: true });
  }

  const now = () => (ctx ? ctx.currentTime + 0.01 : 0);
  const live = () => player && ready && !isMuted;

  return {
    supported,
    get muted() { return isMuted; },
    get log() { return events; },

    // The step the story is now on. `direction` is 1 for Next, -1 for Back or Restart.
    step(id, direction = 1) {
      wanted = id;
      if (log) { record({ type: 'step', id, direction }); return; }
      if (ctx) { drawBed(id); startBedIfWanted(); }
      if (live() && direction !== 0) perform(player, effects, { type: 'slide', direction }, now(), state);
    },

    // Two cubes, or a cube and the ground, touching at `speed` (cube edges a second), `offset` seconds
    // into the physics update. A pour of cubes makes many at once: only the first few of each physics
    // step sound, each at a random moment in the step, so it patters.
    impact(kind, speed, offset = 0) {
      if (speed < SOUND.impactMinSpeed) return;
      const t = seconds();
      if (offset !== bucket.offset || t - bucket.t > 0.004) bucket = { offset, t, n: 0 };
      if (++bucket.n > SOUND.impactsPerStep) return;
      tokens = Math.min(SOUND.burst, tokens + (t - tokensAt) * SOUND.rate);
      tokensAt = t;
      if (tokens < 1) return;
      tokens -= 1;
      const delay = offset + Math.random() * SOUND.impactSpread;
      const strength = Math.min(1, ((speed - SOUND.impactMinSpeed) / (SOUND.impactFullSpeed - SOUND.impactMinSpeed)) ** SOUND.impactCurve);
      density *= Math.exp(-(t - densityAt) / SOUND.densityTau);
      densityAt = t;
      const gain = (SOUND.impactQuiet + (SOUND.impactLoud - SOUND.impactQuiet) * strength) / Math.sqrt(1 + density / SOUND.densityRef);
      density += 1;
      const rate = jitter();
      const event = { type: 'impact', kind, gain, rate, strength };
      if (log) { record(event, delay); return; }
      if (live()) perform(player, effects, event, now() + delay, state);
    },

    // A tag or label has appeared.
    tag() {
      if (log) { record({ type: 'tag' }); return; }
      if (live()) perform(player, effects, { type: 'tag' }, now(), state);
    },

    // The cube is turning to a face (or back).
    turn() {
      if (log) { record({ type: 'turn' }); return; }
      if (live()) perform(player, effects, { type: 'turn' }, now(), state);
    },

    // The cubes become the logo: the finale notes, and the bed fades away under them.
    finale() {
      if (log) { record({ type: 'finale' }); return; }
      if (!live()) return;
      perform(player, effects, { type: 'finale' }, now(), state);
      playing = null;
      wanted = null;
    },

    // The sound button. Called by a visitor's tap: that also unlocks audio.
    setMuted(value, { byVisitor = false } = {}) {
      if (byVisitor) userChoice = true;
      if (!byVisitor && userChoice) return; // kiosk mode must not undo the visitor's own choice
      if (value === isMuted) return;
      isMuted = value;
      if (ctx) player.setMuted(isMuted, ctx.currentTime);
      onChange(isMuted);
    },
    unlock,
  };
}
