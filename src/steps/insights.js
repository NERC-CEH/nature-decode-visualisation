// Steps 5 to 7, Insights: the cube turns to show one face flat on, with the camera drawing back and
// narrowing its view (a dolly zoom) so the cells line up in a flat grid. The cubes become
// see-through, so the more cubes lie behind each other along the line of sight the darker the cell.
// Each face shows two of the three axes:
//   1  location (across) and species (up)   the side face      species keep their colours
//   2  time (across) and location (down)     the top face       colours mean nothing, so grey
//   3  time (across) and species (up)        the front face     species keep their colours
// The cube can be dragged round and springs back to its face.

import { CUBE, DURATIONS, FACE, speciesColour } from '../config.js';
import { wait } from '../tween.js';
import { arrangement } from '../layout.js';

// The most cubes in any one line of sight when the cube is seen from above (along the species axis):
// the most records in one cell of time and location.
export function deepestStack(cube) {
  const counts = new Map();
  for (const cell of arrangement(cube.cubes, cube.displayOrder, cube.size)) {
    const key = `${cell.x.toFixed(3)},${cell.z.toFixed(3)}`;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return Math.max(1, ...counts.values());
}

// How opaque each black cube is in the top view. Each cube in a line of sight lets through the same share
// of the light, so n cubes let through (1 - alpha)^n. It is chosen so the deepest stack lets through only
// FACE.densityFloor, which spreads the tones from a single cube (light grey) to the deepest stack (black)
// instead of squeezing the busiest cells together.
export function densityAlpha(cube) {
  return 1 - FACE.densityFloor ** (1 / deepestStack(cube));
}

export const FACES = {
  insight1: { yaw: Math.PI / 2, pitch: 0, neutral: false, horizontal: 'Location', vertical: 'Species' },
  insight2: { yaw: 0, pitch: Math.PI / 2, neutral: true, horizontal: 'Time \u2192', vertical: 'Location' },
  insight3: { yaw: 0, pitch: 0, neutral: false, horizontal: 'Time \u2192', vertical: 'Species' },
};

// Turn to show `face`, from the arranged cube or from another face.
export async function showFace(ctx, face) {
  const { cube, field, scene, frame, rotation } = ctx;
  const colourOf = face.neutral ? () => FACE.neutral : (i) => speciesColour(cube.cubes[i].species);
  // Phase 1: pull back slightly to make the rotation visible
  await Promise.all([
    scene?.setView('cube', FACE.pullBack, FACE.pullBackShare),
    frame?.fadeTitlesTo(0, 0.2),
  ]);
  // Phase 2: rotate the cube while zooming in and blending colours
  rotation.setTarget({ yaw: face.yaw, pitch: face.pitch });
  await Promise.all([
    scene?.setView('face', FACE.turn - FACE.pullBack),
    rotation.arrive(FACE.turn),
    field.blendTo(colourOf, face.neutral ? densityAlpha(cube) : FACE.alpha, DURATIONS.look),
  ]);
  // Phase 3: show the titles
  await frame?.showFaceTitles(face.horizontal, face.vertical, 0.5);
}

// Back to the arranged cube.
// With `restoreTitles` false the axis titles and arrow stay hidden (the conclusion).
export async function backToCube(ctx, { restoreTitles = true } = {}) {
  const { cube, field, scene, frame, rotation } = ctx;
  // Phase 1: hide titles and pull back
  await Promise.all([
    frame?.hideFaceTitles(0.2),
    scene?.setView('cube', FACE.pullBack, FACE.pullBackShare),
  ]);
  // Phase 2: rotate back while zooming in and restoring colours
  rotation.setTarget({ yaw: CUBE.yaw, pitch: CUBE.tilt });
  await Promise.all([
    scene?.setView('cube', FACE.turn - FACE.pullBack),
    rotation.arrive(FACE.turn),
    field.blendTo((i) => speciesColour(cube.cubes[i].species), 1, DURATIONS.look),
  ]);
  // Phase 3: restore the frame titles
  if (restoreTitles) await frame?.fadeTitlesTo(1, 0.4);
}

export const insight1Step = {
  enter: (ctx) => showFace(ctx, FACES.insight1),
  reverse: (ctx) => backToCube(ctx),
};
export const insight2Step = {
  enter: (ctx) => showFace(ctx, FACES.insight2),
  reverse: (ctx) => showFace(ctx, FACES.insight1),
};
export const insight3Step = {
  enter: (ctx) => showFace(ctx, FACES.insight3),
  reverse: (ctx) => showFace(ctx, FACES.insight2),
};
