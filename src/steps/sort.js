// Step 3, Sort: the cubes are thrown up and out, held for a moment in mid air, and then pulled across the floor into one heap for each species, and the
// heaps build up by physics as the cubes arrive and pile against each other. The heaps are not
// labelled.

import { DURATIONS } from '../config.js';
import { heapSpots } from '../steering.js';
import { wait } from '../tween.js';

export const sortStep = {
  async enter(ctx) {
    const spots = heapSpots(ctx.arena, ctx.cube.displayOrder);
    const cubes = ctx.cube.cubes;
    // First throw the cubes up and out and freeze them in mid air, so none are stuck in the pile
    // or on the floor, then pull them into their heaps.
    await ctx.field.explode();
    const pull = ctx.field.steer((i) => spots[cubes[i].species], DURATIONS.sort, DURATIONS.sortSettle);
    // The step is ready after a few seconds even if some cubes are still on their way: the pull
    // carries on, and the next step takes over from wherever the cubes are.
    await Promise.race([pull, wait(DURATIONS.sortReady)]);
  },

  // Back to the scatter of the Categorise step. Physics cannot be rewound, so the cubes ease back
  // to where they were when that step ended.
  async reverse(ctx, { snapshot }) {
    await ctx.field.restore(snapshot, DURATIONS.sortBack);
  },
};
