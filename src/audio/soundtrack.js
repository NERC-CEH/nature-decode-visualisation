// Builds the soundtrack of a recorded video from the events the page logged with ?audiolog (see
// index.js). Runs in a browser, because it needs Web Audio. Returns 16-bit stereo WAV bytes.

import { BED } from '../config.js';
import { createPlayer, perform } from './player.js';
import { EFFECT_NAMES, renderBed, renderEffect } from './synth.js';

const SAMPLE_RATE = 44100;
const VIDEO_LEVEL = 0.8; // louder than the page's own level: a video is heard on the viewer's volume setting

function wav(buffer) {
  const channels = buffer.numberOfChannels;
  const length = buffer.length;
  const bytes = new Uint8Array(44 + length * channels * 2);
  const view = new DataView(bytes.buffer);
  const text = (at, s) => { for (let i = 0; i < s.length; i++) view.setUint8(at + i, s.charCodeAt(i)); };
  text(0, 'RIFF'); view.setUint32(4, bytes.length - 8, true); text(8, 'WAVE'); text(12, 'fmt ');
  view.setUint32(16, 16, true); view.setUint16(20, 1, true); view.setUint16(22, channels, true);
  view.setUint32(24, SAMPLE_RATE, true); view.setUint32(28, SAMPLE_RATE * channels * 2, true);
  view.setUint16(32, channels * 2, true); view.setUint16(34, 16, true); text(36, 'data'); view.setUint32(40, length * channels * 2, true);
  const data = [...Array(channels).keys()].map((c) => buffer.getChannelData(c));
  let at = 44;
  for (let i = 0; i < length; i++) {
    for (let c = 0; c < channels; c++) {
      view.setInt16(at, Math.round(Math.max(-1, Math.min(1, data[c][i])) * 32767), true);
      at += 2;
    }
  }
  return bytes;
}

// events: [{ t, type, ... }] with t in seconds on the page's clock; `start` is the time of the video's
// first frame and `duration` the length of the video, both in seconds.
export async function renderSoundtrack(events, { start, duration }) {
  const effects = {};
  for (const name of EFFECT_NAMES) effects[name] = await renderEffect(name);
  const beds = {};
  for (const id of new Set(events.filter((e) => e.type === 'step').map((e) => e.id))) beds[id] = await renderBed(id);

  const ctx = new OfflineAudioContext(2, Math.ceil(duration * SAMPLE_RATE), SAMPLE_RATE);
  const player = createPlayer(ctx, { level: VIDEO_LEVEL });
  const state = {};
  let first = true;
  for (const event of events) {
    const at = Math.max(0, event.t - start);
    if (at >= duration) continue;
    if (event.type === 'step') {
      player.bed(beds[event.id], at, first ? 1.5 : BED.crossfade);
      first = false;
      if (event.direction !== 0) perform(player, effects, { type: 'slide', direction: event.direction }, at, state);
    } else {
      perform(player, effects, event, at, state);
    }
  }
  const rendered = await ctx.startRendering();
  return wav(rendered);
}
