// Where each cube sits in the arranged data cube. Pure functions, no DOM.
//
// The axes: time runs left to right (x), species runs up (y, in display order, so the most
// widespread species is the bottom sheet and the specialists are the top ones), and location
// runs front to back (z). Each cell is `pitch` units across and holds one cube.

import { CUBE } from './config.js';

// The size of the whole cube and where it floats: its middle is half its height plus a gap above
// the floor. `radius` is that of the sphere that holds it. The frame also has an arrow and a title
// for time below the cube (see frame.js), so the camera looks a little lower than the middle of the
// cube, at `lookY`, and `lookRadius` is the radius of the sphere round the cube from that point.
export function cubeFrame(size, settings = CUBE) {
  const edge = size * settings.pitch;
  const half = edge / 2;
  const centreY = half + settings.floorGap;
  const below = settings.titleDrop;
  const lookY = centreY - below / 2;
  const lookRadius = Math.hypot(half, half + below / 2, half);
  return { edge, centreY, radius: (edge * Math.sqrt(3)) / 2, lookY, lookRadius };
}

// The position of the cell for each cube, in the same order as `cubes`.
export function arrangement(cubes, displayOrder, size, settings = CUBE) {
  const { centreY } = cubeFrame(size, settings);
  const rank = [];
  displayOrder.forEach((species, bottomToTop) => { rank[species] = bottomToTop; });
  const middle = (size - 1) / 2;
  return cubes.map((c) => ({
    x: (c.time - middle) * settings.pitch,
    y: centreY + (rank[c.species] - middle) * settings.pitch,
    z: (c.location - middle) * settings.pitch,
  }));
}

// Which sheet each cube belongs to (0 = bottom), in the same order as `cubes`.
export function sheetOf(cubes, displayOrder) {
  const rank = [];
  displayOrder.forEach((species, bottomToTop) => { rank[species] = bottomToTop; });
  return cubes.map((c) => rank[c.species]);
}
