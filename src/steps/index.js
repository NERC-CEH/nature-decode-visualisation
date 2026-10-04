// Step modules. Each step gets enter() (play forward from the previous step) and reverse()
// (play back to it). Steps that are not built yet use a placeholder that only moves the page
// theme and pauses briefly, so Next and Back and the busy state can still be exercised.
// Each milestone replaces its placeholder with the real animation.

import { wait } from '../tween.js';
import { dataStep } from './data.js';
import { categoriseStep } from './categorise.js';
import { sortStep } from './sort.js';
import { arrangeStep } from './arrange.js';
import { insight1Step, insight2Step, insight3Step } from './insights.js';
import { conclusionStep } from './conclusion.js';
import { finaleStep } from './finale.js';

const PLACEHOLDER_PAUSE = 0.4; // seconds

const built = {
  data: dataStep,
  categorise: categoriseStep,
  sort: sortStep,
  arrange: arrangeStep,
  insight1: insight1Step,
  insight2: insight2Step,
  insight3: insight3Step,
  conclusion: conclusionStep,
  finale: finaleStep,
};

export function buildSteps(configSteps) {
  return configSteps.map((cfg) => ({
    ...cfg,
    async enter(ctx, info) {
      if (!ctx.scene) { await ctx.setTheme(cfg.theme); return; } // no 3D view: the text still tells the story
      if (built[cfg.id]) return built[cfg.id].enter(ctx, info);
      await Promise.all([ctx.setTheme(cfg.theme), wait(PLACEHOLDER_PAUSE)]);
    },
    async reverse(ctx, info) {
      if (!ctx.scene) { await ctx.setTheme(info.to.theme); return; }
      if (built[cfg.id]) return built[cfg.id].reverse(ctx, info);
      await Promise.all([ctx.setTheme(info.to.theme), wait(PLACEHOLDER_PAUSE)]);
    },
  }));
}
