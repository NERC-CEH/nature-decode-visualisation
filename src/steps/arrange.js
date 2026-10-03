// Step 4, Arrange: the heaps lift off one after another and every cube flies to its cell in the
// data cube. The camera rises to look at the cube, the shadows on the floor fade, and the
// frame (box, arrow for time and axis titles) fades in. The cube can then be dragged round and
// springs back.

import { CUBE, DURATIONS } from '../config.js';
import { arrangement, sheetOf } from '../layout.js';
import { wait } from '../tween.js';

export const arrangeStep = {
  async enter(ctx) {
    const { cube, field, scene, frame, rotation } = ctx;
    const cells = arrangement(cube.cubes, cube.displayOrder, cube.size);
    const sheets = sheetOf(cube.cubes, cube.displayOrder);
    rotation.setTarget({ yaw: CUBE.yaw, pitch: CUBE.tilt });
    await Promise.all([
      field.arrange(cells, (i) => sheets[i], cube.size, DURATIONS.arrange, DURATIONS.arrangeFlight),
      scene?.setView('cube', DURATIONS.arrange),
      scene?.fadeShadow(0, DURATIONS.arrangeFlight),
      wait(DURATIONS.arrangeFrame).then(() => frame?.fadeTo(1, DURATIONS.frameFade)),
    ]);
  },

  // Back to the heaps: the frame fades out, the cube turns square, the camera returns to the
  // floor and the cubes ease back to the places they had when the Sort step ended.
  async reverse(ctx, { snapshot }) {
    const { field, scene, frame, rotation } = ctx;
    rotation.setTarget({ yaw: 0, pitch: 0 });
    await Promise.all([
      frame?.fadeTo(0, DURATIONS.frameFade / 2),
      scene?.setView('floor', DURATIONS.arrangeBack),
      scene?.fadeShadow(1, DURATIONS.arrangeBack),
      field.restore(snapshot, DURATIONS.arrangeBack),
    ]);
  },
};
