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
import * as THREE from 'three';
import { arrangement } from '../layout.js';

// For the top view: how many cubes lie in each cube's column (the same time and location, along the
// species axis). Returns { counts, max } with counts[i] for cube i.
export function columnCounts(cube) {
  const keys = arrangement(cube.cubes, cube.displayOrder, cube.size).map((cell) => `${cell.x.toFixed(3)},${cell.z.toFixed(3)}`);
  const per = new Map();
  for (const key of keys) per.set(key, (per.get(key) ?? 0) + 1);
  const counts = keys.map((key) => per.get(key));
  return { counts, max: Math.max(1, ...counts) };
}

// The colour for a column of `n` cubes out of a most of `max`: blue for 1 to red for max.
export function countColour(n, max, stops = FACE.countColours) {
  const t = max <= 1 ? 0 : Math.min(1, Math.max(0, (n - 1) / (max - 1)));
  const at = t * (stops.length - 1);
  const k = Math.min(stops.length - 2, Math.floor(at));
  return `#${new THREE.Color(stops[k]).lerp(new THREE.Color(stops[k + 1]), at - k).getHexString()}`;
}

export const FACES = {
  insight1: { yaw: Math.PI / 2, pitch: 0, byCount: false, horizontal: 'Location', vertical: 'Species' },
  insight2: { yaw: 0, pitch: Math.PI / 2, byCount: true, horizontal: 'Time \u2192', vertical: 'Location' },
  insight3: { yaw: 0, pitch: 0, byCount: false, horizontal: 'Time \u2192', vertical: 'Species' },
};

// Turn to show `face`, from the arranged cube or from another face.
export async function showFace(ctx, face) {
  const { cube, field, scene, frame, rotation } = ctx;
  const { counts, max } = columnCounts(cube);
  const colourOf = face.byCount ? (i) => countColour(counts[i], max) : (i) => speciesColour(cube.cubes[i].species);
  // Phase 1: pull back slightly to make the rotation visible
  await Promise.all([
    scene?.setView('cube', FACE.pullBack, FACE.pullBackShare),
    frame?.fadeTitlesTo(0, 0.2),
  ]);
  // Phase 2: rotate the cube while zooming in and blending colours
  ctx.audio?.turn();
  rotation.setTarget({ yaw: face.yaw, pitch: face.pitch });
  await Promise.all([
    scene?.setView('face', FACE.turn - FACE.pullBack),
    rotation.arrive(FACE.turn),
    field.blendTo(colourOf, face.byCount ? 1 : FACE.alpha, DURATIONS.look),
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
  ctx.audio?.turn();
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
