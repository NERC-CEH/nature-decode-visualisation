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

export const FACES = {
  insight1: { yaw: Math.PI / 2, pitch: 0, neutral: false, horizontal: 'Location', vertical: 'Species' },
  insight2: { yaw: 0, pitch: Math.PI / 2, neutral: true, horizontal: 'Time \u2192', vertical: 'Location' },
  insight3: { yaw: 0, pitch: 0, neutral: false, horizontal: 'Time \u2192', vertical: 'Species' },
};

// Turn to show `face`, from the arranged cube or from another face.
async function showFace(ctx, face) {
  const { cube, field, scene, frame, rotation } = ctx;
  rotation.setTarget({ yaw: face.yaw, pitch: face.pitch });
  const colourOf = face.neutral ? () => FACE.neutral : (i) => speciesColour(cube.cubes[i].species);
  await Promise.all([
    scene?.setView('face', FACE.turn),
    rotation.arrive(FACE.turn + 2),
    field.blendTo(colourOf, face.neutral ? FACE.neutralAlpha : FACE.alpha, DURATIONS.look),
    frame?.fadeTitlesTo(0, 0.4),
    wait(0.5).then(() => frame?.showFaceTitles(face.horizontal, face.vertical, 0.5)),
  ]);
}

// Back to the arranged cube.
async function backToCube(ctx) {
  const { cube, field, scene, frame, rotation } = ctx;
  rotation.setTarget({ yaw: CUBE.yaw, pitch: CUBE.tilt });
  await Promise.all([
    scene?.setView('cube', FACE.turn),
    rotation.arrive(FACE.turn + 2),
    field.blendTo((i) => speciesColour(cube.cubes[i].species), 1, DURATIONS.look),
    frame?.hideFaceTitles(0.3),
    wait(0.8).then(() => frame?.fadeTitlesTo(1, 0.6)),
  ]);
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
