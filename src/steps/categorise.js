// Step 2, Categorise: the black cubes take on a colour for each species, at random moments, so
// the change sweeps over the scattered cubes in no order. As each cube changes it gets a brief
// push, like popcorn going off, so the cubes stir a little.

import { DURATIONS, POP, speciesColour } from '../config.js';
import { START_COLOUR } from '../cubes.js';

export const categoriseStep = {
  async enter(ctx) {
    const cubes = ctx.cube.cubes;
    await ctx.field.recolour((i) => speciesColour(cubes[i].species), DURATIONS.categorise, DURATIONS.categoriseEach, POP.power);
  },

  // Back to the black cubes of the Data step.
  async reverse(ctx) {
    await ctx.field.recolour(() => START_COLOUR, DURATIONS.categoriseBack, DURATIONS.categoriseEach);
  },
};
