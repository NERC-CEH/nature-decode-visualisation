// Step 2, Categorise: the black cubes take on a colour for each species, at random moments, so
// the change sweeps over the scattered cubes in no order. The cubes stay where they are.

import { DURATIONS, speciesColour } from '../config.js';
import { START_COLOUR } from '../cubes.js';

export const categoriseStep = {
  async enter(ctx) {
    const cubes = ctx.cube.cubes;
    await ctx.field.recolour((i) => speciesColour(cubes[i].species), DURATIONS.categorise, DURATIONS.categoriseEach);
  },

  // Back to the black cubes of the Data step.
  async reverse(ctx) {
    await ctx.field.recolour(() => START_COLOUR, DURATIONS.categoriseBack, DURATIONS.categoriseEach);
  },
};
