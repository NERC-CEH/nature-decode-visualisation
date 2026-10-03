// Step modules. Each step gets enter() (play forward from the previous step) and reverse()
// (play back to it). M0 uses placeholders that only move the page theme and pause briefly,
// so Next and Back and the busy state can be exercised. Each step milestone replaces its
// placeholder with the real animation.

import { wait } from '../tween.js';

const PLACEHOLDER_PAUSE = 0.4; // seconds

export function buildSteps(configSteps) {
  return configSteps.map((cfg) => ({
    ...cfg,
    async enter(ctx) {
      await Promise.all([ctx.setTheme(cfg.theme), wait(PLACEHOLDER_PAUSE)]);
    },
    async reverse(ctx, { to }) {
      await Promise.all([ctx.setTheme(to.theme), wait(PLACEHOLDER_PAUSE)]);
    },
  }));
}
