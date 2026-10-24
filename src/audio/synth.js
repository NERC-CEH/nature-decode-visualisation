// The synthesis behind the sound. Every sound effect and every step's background bed is drawn
// once, offline, with Tone.js synthesisers, into an audio buffer; playing a buffer costs almost
// nothing, so sound cannot make the animation (or the sound itself) stutter. There are no audio
// files. See player.js for playing the buffers.

import * as Tone from 'tone/build/esm/index.js';
import { BED } from '../config.js';

const SAMPLE_RATE = 44100;

// A synthetic room: exponentially fading noise, slightly darkened, used as a convolution reverb.
function impulse(seconds, sampleRate) {
  const n = Math.floor(seconds * sampleRate);
  const left = new Float32Array(n);
  const right = new Float32Array(n);
  let a = 0;
  let b = 0;
  for (let i = 0; i < n; i++) {
    const decay = Math.exp((-6.9 * i) / n);
    a += 0.55 * ((Math.random() * 2 - 1) - a);
    b += 0.55 * ((Math.random() * 2 - 1) - b);
    left[i] = a * decay;
    right[i] = b * decay;
  }
  return Tone.ToneAudioBuffer.fromArray([left, right]);
}

// A small seeded generator, so a step's bed is the same every time it is drawn.
function seeded(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------------------------------------------------------------- sound effects

// Cube on cube: a tuned membrane "tok", a click of noise and a tiny metallic ring, which read as hard plastic.
function clack(out, t) {
  const body = new Tone.MembraneSynth({
    pitchDecay: 0.012, octaves: 2.2, oscillator: { type: 'sine' },
    envelope: { attack: 0.0005, decay: 0.07, sustain: 0, release: 0.02 },
  }).connect(out);
  const band = new Tone.Filter(2600, 'bandpass', -12).connect(out);
  const click = new Tone.NoiseSynth({
    noise: { type: 'white' }, envelope: { attack: 0.0003, decay: 0.012, sustain: 0, release: 0.005 },
  }).connect(band);
  const ring = new Tone.MetalSynth({
    harmonicity: 5.1, modulationIndex: 14, resonance: 2800, octaves: 1,
    envelope: { attack: 0.0005, decay: 0.05, release: 0.02 }, volume: -22,
  }).connect(out);
  ring.frequency.value = 330;
  body.triggerAttackRelease(380, 0.03, t, 0.8);
  click.triggerAttackRelease(0.012, t, 0.8);
  ring.triggerAttackRelease(0.03, t, 0.4);
}

// Cube on the ground: a deep thud with a dull knock on top.
function thud(out, t, velocity) {
  const low = new Tone.Filter(520, 'lowpass').connect(out);
  const body = new Tone.MembraneSynth({
    pitchDecay: 0.05, octaves: 4, oscillator: { type: 'sine' },
    envelope: { attack: 0.001, decay: 0.22, sustain: 0, release: 0.05 },
  }).connect(out);
  const knock = new Tone.MembraneSynth({
    pitchDecay: 0.015, octaves: 2, oscillator: { type: 'triangle' },
    envelope: { attack: 0.0005, decay: 0.07, sustain: 0, release: 0.02 },
  }).connect(low);
  const puff = new Tone.NoiseSynth({
    noise: { type: 'brown' }, envelope: { attack: 0.0005, decay: 0.04, sustain: 0, release: 0.01 },
  }).connect(low);
  body.triggerAttackRelease(62, 0.08, t, velocity);
  knock.triggerAttackRelease(190, 0.03, t, velocity * 0.7);
  puff.triggerAttackRelease(0.04, t, velocity * 0.6);
}

// A small, soft sine glide with the faintest breath of air. Forward rises, back falls.
function slide(out, back) {
  const lo = Tone.Frequency('D4').toFrequency();
  const hi = Tone.Frequency('A4').toFrequency();
  const glide = new Tone.Synth({
    oscillator: { type: 'sine' }, envelope: { attack: 0.01, decay: 0.12, sustain: 0, release: 0.08 },
  }).connect(out);
  glide.triggerAttackRelease(back ? hi : lo, 0.1, 0.005);
  glide.frequency.setValueAtTime(back ? hi : lo, 0.005);
  glide.frequency.exponentialRampToValueAtTime(back ? lo : hi, 0.105);
  const band = new Tone.Filter(1800, 'bandpass', -12).connect(out);
  const air = new Tone.NoiseSynth({
    noise: { type: 'pink' }, envelope: { attack: 0.02, decay: 0.1, sustain: 0, release: 0.04 }, volume: -12,
  }).connect(band);
  air.triggerAttackRelease(0.08, 0.005);
}

// `dur` is the length drawn, `peak` the level (dBFS) the loudest point is scaled to, so every sound
// sits at a chosen level. `build(out, room)` draws it; room(seconds) makes a reverb to send to.
const EFFECTS = {
  clack: { dur: 0.3, peak: -7, build: (out) => clack(out, 0.005) },
  thud: { dur: 0.5, peak: -7, build: (out) => thud(out, 0.005, 0.9) },
  tag: {
    dur: 1.0,
    peak: -13,
    build: (out, room) => {
      const chime = new Tone.FMSynth({
        harmonicity: 3, modulationIndex: 4, oscillator: { type: 'sine' }, modulation: { type: 'sine' },
        envelope: { attack: 0.002, decay: 0.12, sustain: 0, release: 0.1 },
        modulationEnvelope: { attack: 0.002, decay: 0.08, sustain: 0, release: 0.05 },
      }).connect(out);
      chime.connect(room(0.25));
      chime.triggerAttackRelease('E6', 0.05, 0.005);
      chime.triggerAttackRelease('B6', 0.08, 0.075);
    },
  },
  slideNext: { dur: 0.4, peak: -12, build: (out) => slide(out, false) },
  slideBack: { dur: 0.4, peak: -12, build: (out) => slide(out, true) },
  turn: {
    dur: 1.3,
    peak: -14,
    build: (out) => {
      const filter = new Tone.Filter(200, 'lowpass', -24).connect(out);
      const sweep = new Tone.Synth({
        oscillator: { type: 'triangle' }, envelope: { attack: 0.15, decay: 0.2, sustain: 0.4, release: 0.3 },
      }).connect(filter);
      const from = Tone.Frequency('A2').toFrequency();
      filter.frequency.setValueAtTime(200, 0.005);
      filter.frequency.exponentialRampToValueAtTime(600, 0.405);
      sweep.triggerAttack(from, 0.005);
      sweep.frequency.setValueAtTime(from, 0.005);
      sweep.frequency.exponentialRampToValueAtTime(Tone.Frequency('D3').toFrequency(), 0.405);
      sweep.triggerRelease(0.45);
      thud(new Tone.Gain(0.5).connect(out), 0.5, 0.4); // a faint settling knock
    },
  },
  // Soft mallet notes climb in an arpeggio over a quiet low note, with a little room.
  finale: {
    dur: 5.5,
    peak: -13,
    build: (out, room) => {
      const send = new Tone.Gain(0.5).connect(out);
      send.connect(room(2.2));
      const mallet = new Tone.PolySynth(Tone.FMSynth, {
        harmonicity: 3.01, modulationIndex: 1.6, oscillator: { type: 'sine' }, modulation: { type: 'sine' },
        envelope: { attack: 0.004, decay: 1.4, sustain: 0, release: 1.2 },
        modulationEnvelope: { attack: 0.002, decay: 0.25, sustain: 0, release: 0.2 }, volume: -4,
      }).connect(send);
      const drone = new Tone.Synth({
        oscillator: { type: 'sine' }, envelope: { attack: 1.0, decay: 0.2, sustain: 1, release: 1.8 }, volume: -18,
      }).connect(send);
      drone.triggerAttack(Tone.Frequency('A2').toFrequency(), 0.05);
      drone.triggerRelease(1.95);
      ['A3', 'E4', 'A4', 'C5', 'E5', 'G5', 'A5'].forEach((note, i) => mallet.triggerAttackRelease(note, 1.2, 0.15 + i * 0.16));
    },
  },
};

export const EFFECT_NAMES = Object.keys(EFFECTS);

// ---------------------------------------------------------------- the background bed

// One step's bed: a quiet pad in A minor, a faint breath of air and a few sparse glassy notes.
// The loop is seamless: every pad voice and every slow movement completes a whole number of cycles
// in BED.loop seconds, and the reverb tail past the end is folded back onto the start.
function buildBed(step, out) {
  const { loop } = BED;
  const snap = (f) => Math.round(f * loop) / loop;
  const rand = seeded(step.seed);
  const room = new Tone.Convolver(impulse(3, BED.sampleRate)).connect(out);
  const roomIn = new Tone.Gain(0.7).connect(room);

  // pad: each note is two sines a hair apart (they beat once per loop); the upper notes are triangles
  const padFilter = new Tone.Filter(900, 'lowpass', -24);
  const padOut = new Tone.Gain(0.5).connect(out);
  padOut.connect(roomIn);
  padFilter.connect(padOut);
  new Tone.LFO({ frequency: 1 / loop, min: 650, max: 1300, phase: 0 }).connect(padFilter.frequency).start(0);
  step.notes.forEach((note, i) => {
    const f = snap(Tone.Frequency(note).toFrequency());
    const voice = new Tone.Gain(0.5 / (1 + i * 0.35)).connect(padFilter);
    new Tone.LFO({ frequency: (1 + (i % 3)) / loop, min: 0.35, max: 1, phase: (i * 90) % 360 }).connect(voice.gain).start(0);
    for (const d of [-1, 1]) {
      new Tone.Oscillator({ type: i < 3 ? 'sine' : 'triangle', frequency: f + d / loop, phase: 0 }).connect(voice).start(0).stop(loop);
    }
  });

  // air: a faint band of pink noise that slowly breathes
  if (step.air > 0) {
    const band = new Tone.Filter(1400, 'bandpass', -12);
    const air = new Tone.Gain(0).connect(out);
    air.connect(roomIn);
    new Tone.LFO({ frequency: 2 / loop, min: 0.02 * step.air, max: 0.07 * step.air, phase: 0 }).connect(air.gain).start(0);
    new Tone.Noise('pink').connect(band).start(0).stop(loop);
    band.connect(air);
  }

  // texture: a few soft glassy notes at fixed random moments
  const bell = new Tone.PolySynth(Tone.FMSynth, {
    harmonicity: 2, modulationIndex: 1.1, oscillator: { type: 'sine' }, modulation: { type: 'sine' },
    envelope: { attack: 0.01, decay: 2.4, sustain: 0, release: 1.6 },
    modulationEnvelope: { attack: 0.005, decay: 0.4, sustain: 0, release: 0.3 }, volume: -12,
  });
  const pan = new Tone.Panner(0).connect(out);
  pan.connect(roomIn);
  bell.connect(pan);
  for (let k = 0; k < step.tex; k++) {
    const at = rand() * (loop - 0.5);
    const note = BED.bells[Math.floor(rand() * BED.bells.length)];
    bell.triggerAttackRelease(note, 0.2, at + 0.05, 0.35 + rand() * 0.4);
  }
}

// Offline renders must not overlap: Tone.Offline swaps the global audio context while it runs.
let queue = Promise.resolve();
const inTurn = (job) => {
  const run = queue.then(job);
  queue = run.catch(() => {});
  return run;
};

function peakScale(buffer, peakDb) {
  let peak = 0;
  for (let c = 0; c < buffer.numberOfChannels; c++) {
    const data = buffer.getChannelData(c);
    for (let i = 0; i < data.length; i++) peak = Math.max(peak, Math.abs(data[i]));
  }
  return peak > 0 ? 10 ** (peakDb / 20) / peak : 1;
}

// A sound effect as an AudioBuffer.
export function renderEffect(name) {
  const recipe = EFFECTS[name];
  return inTurn(async () => {
    const full = await Tone.Offline(() => {
      const limiter = new Tone.Limiter(-1).toDestination();
      const room = (seconds) => {
        const convolver = new Tone.Convolver(impulse(seconds || 1, SAMPLE_RATE)).connect(limiter);
        return new Tone.Gain(typeof seconds === 'number' && seconds < 1 ? seconds : 1).connect(convolver);
      };
      recipe.build(limiter, room);
    }, recipe.dur, 2, SAMPLE_RATE);
    const buffer = full.get();
    const k = peakScale(buffer, recipe.peak);
    for (let c = 0; c < buffer.numberOfChannels; c++) buffer.getChannelData(c).forEach((v, i, d) => { d[i] = v * k; });
    return buffer;
  });
}

// A step's bed as a seamless looping AudioBuffer.
export function renderBed(stepId) {
  const step = BED.steps[stepId];
  const { loop, tail } = BED;
  return inTurn(async () => {
    const full = (await Tone.Offline(() => {
      const limiter = new Tone.Limiter(-6).toDestination();
      buildBed(step, limiter);
    }, loop + tail, 2, BED.sampleRate)).get();
    const n = Math.floor(loop * BED.sampleRate);
    const tailN = Math.floor(tail * BED.sampleRate);
    const buffer = new AudioBuffer({ length: n, numberOfChannels: 2, sampleRate: BED.sampleRate });
    let squares = 0;
    for (let c = 0; c < 2; c++) {
      const from = full.getChannelData(c);
      const to = buffer.getChannelData(c);
      for (let i = 0; i < n; i++) to[i] = from[i] + (i < tailN ? from[n + i] : 0); // fold the tail onto the start
      for (let i = 0; i < n; i++) squares += to[i] * to[i];
    }
    const rms = Math.sqrt(squares / (2 * n)) || 1e-6;
    const k = 10 ** ((BED.rms + step.level) / 20) / rms;
    for (let c = 0; c < 2; c++) buffer.getChannelData(c).forEach((v, i, d) => { d[i] = v * k; });
    return buffer;
  });
}
