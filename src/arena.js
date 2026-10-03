// The floor the cubes fall onto, and the plan for how they drop. Pure functions, no DOM.

import { ARENA } from './config.js';
import { mulberry32 } from './random.js';

// Floor size for a given number of cubes: the same loose spread of cubes at any data size.
export function arenaSize(count, settings = ARENA) {
  const depth = Math.sqrt((count * settings.areaPerCube) / settings.aspect);
  return { width: depth * settings.aspect, depth };
}

// A random unit quaternion (uniform over all orientations).
function randomQuaternion(random) {
  const u1 = random();
  const u2 = random() * 2 * Math.PI;
  const u3 = random() * 2 * Math.PI;
  const a = Math.sqrt(1 - u1);
  const b = Math.sqrt(u1);
  return { x: a * Math.sin(u2), y: a * Math.cos(u2), z: b * Math.sin(u3), w: b * Math.cos(u3) };
}

// Where and when each cube appears. `delay` is in seconds from the start of the drop, spread
// evenly at random across `duration`. The same seed always gives the same plan.
export function spawnPlan(count, arena, { duration, seed = ARENA.spawnSeed, margin = ARENA.margin }) {
  const random = mulberry32(seed);
  const halfWidth = arena.width / 2 - margin;
  const halfDepth = arena.depth / 2 - margin;
  return Array.from({ length: count }, () => ({
    x: (random() * 2 - 1) * halfWidth,
    z: (random() * 2 - 1) * halfDepth,
    lift: random() * 3, // extra height, so cubes released together do not start overlapping
    delay: random() * duration,
    quaternion: randomQuaternion(random),
    spin: { x: (random() - 0.5) * 6, y: (random() - 0.5) * 6, z: (random() - 0.5) * 6 },
  }));
}
