// Plays the rendered buffers with plain Web Audio, on a live AudioContext or on an OfflineAudioContext
// (which is how the soundtrack for the recorded video is made). Every call takes an absolute time on
// the context's clock, so the same events sound the same either way.

import { BED, SOUND } from '../config.js';

// `level` is the overall level, 0 to 1.
export function createPlayer(ctx, { level: overall = SOUND.master } = {}) {
  // everything goes through one gain (the mute) and a limiter that stops pile-ups clipping
  const master = ctx.createGain();
  master.gain.value = overall;
  const limiter = ctx.createDynamicsCompressor();
  limiter.threshold.value = -3;
  limiter.knee.value = 0;
  limiter.ratio.value = 20;
  limiter.attack.value = 0.003;
  limiter.release.value = 0.1;
  master.connect(limiter);
  limiter.connect(ctx.destination);

  // the bed has its own gain, so it can dip under impacts
  const duckGain = ctx.createGain();
  duckGain.connect(master);

  // when each sound that is playing or booked will end, on the context's clock; counting these (not
  // waiting for 'ended' events) also works when the whole soundtrack is booked ahead on an offline context
  let ends = [];
  let bed = null; // { gain, source }

  return {
    // A sound effect. Returns false if too many are already playing.
    effect(buffer, at, { gain = 1, rate = 1, length = 0 } = {}) {
      ends = ends.filter((end) => end > at);
      if (ends.length >= SOUND.voices) return false;
      ends.push(at + (length > 0 ? Math.min(length, buffer.duration) : buffer.duration) / rate);
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.playbackRate.value = rate;
      const level = ctx.createGain();
      level.gain.value = gain;
      source.connect(level);
      level.connect(master);
      source.onended = () => { source.disconnect(); level.disconnect(); };
      source.start(at);
      if (length > 0) source.stop(at + length / rate);
      return true;
    },

    // Crossfade the bed to a step's loop.
    bed(buffer, at, fade = BED.crossfade) {
      if (bed) this.fadeBedOut(at, fade);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, at);
      gain.gain.linearRampToValueAtTime(1, at + fade);
      gain.connect(duckGain);
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;
      source.connect(gain);
      source.start(at);
      bed = { gain, source, from: at, fade };
    },

    // Fade the current bed to nothing, starting at `at`.
    fadeBedOut(at, seconds) {
      if (!bed) return;
      const { gain, source, from, fade } = bed;
      bed = null;
      // where its fade-in has got to by `at`, so the fade out starts from there with no jump
      const level = Math.max(0, Math.min(1, (at - from) / fade));
      gain.gain.cancelScheduledValues(at);
      gain.gain.setValueAtTime(level, at);
      gain.gain.linearRampToValueAtTime(0, at + seconds);
      source.stop(at + seconds + 0.1);
      source.onended = () => { source.disconnect(); gain.disconnect(); };
    },

    // Dip the bed a little so an impact comes through, then ease back.
    duck(at) {
      const g = duckGain.gain;
      g.setTargetAtTime(10 ** (SOUND.duckDb / 20), at, 0.02);
      g.setTargetAtTime(1, at + 0.5, 0.5);
    },

    // Mute or unmute (a short ramp, so there is no click).
    setMuted(muted, at) {
      master.gain.setTargetAtTime(muted ? 0 : overall, at, 0.03);
    },
  };
}

// One logged event, played at time `at`. Used by the live page and by the soundtrack render, so both
// treat events the same way. `buffers` holds the sound effects; `state.lastDuck` rate-limits the dip.
export function perform(player, buffers, event, at, state = {}) {
  switch (event.type) {
    case 'impact':
      player.effect(buffers[event.kind === 'ground' ? 'thud' : 'clack'], at, {
        gain: event.gain, rate: event.rate, length: event.kind === 'ground' ? SOUND.thudLength : SOUND.clackLength,
      });
      if (event.strength >= SOUND.duckAbove && at - (state.lastDuck ?? -1) > 0.3) {
        state.lastDuck = at;
        player.duck(at);
      }
      break;
    case 'slide': player.effect(buffers[event.direction < 0 ? 'slideBack' : 'slideNext'], at); break;
    case 'tag': player.effect(buffers.tag, at); break;
    case 'turn': player.effect(buffers.turn, at); break;
    case 'finale':
      player.effect(buffers.finale, at);
      player.fadeBedOut(at + BED.finaleFadeAt, BED.finaleFade);
      break;
    default: break;
  }
}
