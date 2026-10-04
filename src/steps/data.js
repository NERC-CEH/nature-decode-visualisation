// Step 1, Data: black cubes fall from above the frame and scatter across the floor.

import { DURATIONS } from '../config.js';
import { reducedMotion } from '../motion.js';

export const dataStep = {
  // From the intro: the page eases to white, then the cubes drop. The step is ready once the
  // last cube has been released, though some are still tumbling.
  async enter(ctx) {
    // The network behind the title fades out as the page fades to white.
    await Promise.all([ctx.setTheme('light'), ctx.network?.fadeTo(0, DURATIONS.theme)]);
    if (reducedMotion()) {
      // no falling to watch: the cubes settle out of sight and fade in where they landed
      ctx.field.setVisible(false);
      const dropped = ctx.field.drop();
      await ctx.field.headless(DURATIONS.drop + 8, () => ctx.field.settled);
      await dropped;
      await ctx.field.reveal(0.4);
      return;
    }
    await ctx.field.drop();
  },

  // Back to the intro: the cubes rise out of view, then the page eases to black and the network
  // fades back in.
  async reverse(ctx, { to }) {
    await ctx.field.liftAway(DURATIONS.lift);
    await Promise.all([ctx.setTheme(to.theme), ctx.network?.fadeTo(1, DURATIONS.theme)]);
  },
};
