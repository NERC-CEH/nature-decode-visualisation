// Step 1, Data: black cubes fall from above the frame and scatter across the floor.

import { DURATIONS } from '../config.js';

export const dataStep = {
  // From the intro: the page eases to white, then the cubes drop. The step is ready once the
  // last cube has been released, though some are still tumbling.
  async enter(ctx) {
    await ctx.setTheme('light');
    await ctx.field.drop();
  },

  // Back to the intro: the cubes rise out of view, then the page eases to black.
  async reverse(ctx, { to }) {
    await ctx.field.liftAway(DURATIONS.lift);
    await ctx.setTheme(to.theme);
  },
};
