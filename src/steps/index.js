// Step modules. Each step gets enter() (play forward from the previous step) and reverse()
// (play back to it). Steps that are not built yet use a placeholder that only moves the page
// theme and pauses briefly, so Next and Back and the busy state can still be exercised.
// Each milestone replaces its placeholder with the real animation.

import { wait } from '../tween.js';
import { dataStep } from './data.js';

const PLACEHOLDER_PAUSE = 0.4; // seconds

const built = {
  data: dataStep,
};

export function buildSteps(configSteps) {
  return configSteps.map((cfg) => ({
    ...cfg,
    async enter(ctx, info) {
      if (built[cfg.id]) return built[cfg.id].enter(ctx, info);
      await Promise.all([ctx.setTheme(cfg.theme), wait(PLACEHOLDER_PAUSE)]);
    },
    async reverse(ctx, info) {
      if (built[cfg.id]) return built[cfg.id].reverse(ctx, info);
      await Promise.all([ctx.setTheme(info.to.theme), wait(PLACEHOLDER_PAUSE)]);
    },
  }));
}
