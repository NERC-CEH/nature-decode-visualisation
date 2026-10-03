// Step 3, Sort: the cubes are pulled across the floor into one heap for each species, and the
// heaps build up by physics as the cubes arrive and pile against each other. The heaps are not
// labelled.

import { DURATIONS } from '../config.js';
import { heapSpots } from '../steering.js';

export const sortStep = {
  async enter(ctx) {
    const spots = heapSpots(ctx.arena, ctx.cube.displayOrder);
    const cubes = ctx.cube.cubes;
    await ctx.field.steer((i) => spots[cubes[i].species], DURATIONS.sort, DURATIONS.sortSettle);
  },

  // Back to the scatter of the Categorise step. Physics cannot be rewound, so the cubes ease back
  // to where they were when that step ended.
  async reverse(ctx, { snapshot }) {
    await ctx.field.restore(snapshot, DURATIONS.sortBack);
  },
};
