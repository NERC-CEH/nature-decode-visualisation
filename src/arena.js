// The floor the cubes fall onto, and the plan for how they drop. Pure functions, no DOM.

import { ARENA, STREAM } from './config.js';
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

// Positions of the lanes the stream is released down: a sunflower spiral, so any number of lanes
// packs evenly around the centre of the floor.
export function streamLanes(count, spacing = STREAM.spacing) {
  const golden = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: count }, (_, i) => {
    const radius = spacing * Math.sqrt(i + 0.5);
    return { x: radius * Math.cos(i * golden), z: radius * Math.sin(i * golden) };
  });
}

// The release rate ramps up over the first `ramp` seconds, holds steady, and ramps down over the
// last `ramp` seconds, so the stream starts and tails off like a pour. `rampTime(q, ...)` returns
// the time by which a share `q` (0..1) of the cubes has been released. With no ramp the cubes
// are released evenly.
export function rampTime(q, duration, ramp = 0) {
  const r = Math.min(Math.max(ramp, 0), duration / 2);
  const area = duration - r; // total of the rate profile: it rises 0..1, holds at 1, falls 1..0
  const y = q * area;
  if (y <= r / 2 && r > 0) return Math.sqrt(2 * r * y); // rising
  if (y <= r / 2 + (duration - 2 * r)) return r + (y - r / 2); // steady
  return duration - Math.sqrt(2 * r * Math.max(0, area - y)); // falling
}

// Lanes needed so that cubes in one lane are never closer than `gap` at the busiest moment,
// which is `count / (duration - ramp)` cubes a second.
function laneCount(count, { duration, ramp = 0 }, stream) {
  const r = Math.min(Math.max(ramp, 0), duration / 2);
  return Math.max(1, Math.ceil((stream.gap * count) / (stream.speed * (duration - r))));
}

// How far from the middle of the floor the outermost lane is.
export function streamRadius(count, timing, stream = STREAM) {
  const lanes = laneCount(count, timing, stream);
  return streamLanes(lanes, stream.spacing).reduce((far, p) => Math.max(far, Math.hypot(p.x, p.z)), 0);
}

// Where and when each cube is released: a stream down the lanes into the middle of the floor,
// over `duration` seconds with a ramp at each end, in random order. The same seed always gives
// the same plan.
export function spawnPlan(count, { duration, ramp = 0, seed = ARENA.spawnSeed, stream = STREAM }) {
  const random = mulberry32(seed);
  const lanes = laneCount(count, { duration, ramp }, stream);
  const positions = streamLanes(lanes, stream.spacing);
  // A cube in release slot n goes down lane (n mod lanes) at the time slot n is due. The slot is a
  // random permutation, so cubes of any species arrive in any order.
  const order = Array.from({ length: count }, (_, i) => i);
  for (let i = count - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order.map((slot) => ({
    x: positions[slot % lanes].x,
    z: positions[slot % lanes].z,
    delay: rampTime((slot + 0.5) / count, duration, ramp),
    velocity: { x: (random() - 0.5) * 2 * stream.drift, y: -stream.speed, z: (random() - 0.5) * 2 * stream.drift },
    quaternion: randomQuaternion(random),
    spin: { x: (random() - 0.5) * 6, y: (random() - 0.5) * 6, z: (random() - 0.5) * 6 },
  }));
}
