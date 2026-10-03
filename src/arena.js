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

// ---- The pour ------------------------------------------------------------------------------
//
// Cubes are released down side-by-side lanes. Three things shape the stream:
//  - a ramp up over the first `ramp` seconds and down over the last `ramp` seconds;
//  - random changes in the release rate, by up to `variation` (50%) either way, on slow cycles;
//  - random changes in the width of the stream, so its area also varies by up to `variation`,
//    by using more or fewer of the lanes, which are packed round the middle of the floor.
// Cubes in one lane are always released far enough apart to keep clear of each other: if the
// stream is narrow when a cube is due, the cube waits for a lane to be free.

// A slow random wobble between -1 and 1, made from a few sine waves of different lengths.
function slowNoise(random) {
  const waves = Array.from({ length: 3 }, () => ({ cycles: 0.5 + random() * 1.7, phase: random() * 2 * Math.PI }));
  return (t) => {
    const sum = waves.reduce((total, w) => total + Math.sin(2 * Math.PI * w.cycles * t + w.phase), 0);
    return Math.max(-1, Math.min(1, (sum / 3) * 1.6));
  };
}

// The share of full flow at time t because of the ramps alone.
function rampLevel(t, duration, ramp) {
  const r = Math.min(Math.max(ramp, 0), duration / 2);
  if (r === 0) return 1;
  return Math.max(0, Math.min(t / r, 1, (duration - t) / r));
}

// Lanes needed for a steady flow: cubes in one lane are never closer than `gap` at the busiest
// moment, which is `count / (duration - ramp)` cubes a second without any random changes.
function nominalLanes(count, { duration, ramp = 0 }, stream) {
  const r = Math.min(Math.max(ramp, 0), duration / 2);
  return Math.max(1, Math.ceil((stream.gap * count) / (stream.speed * (duration - r))));
}

// Lanes available altogether: the stream can widen to this many.
function totalLanes(count, timing, stream) {
  return Math.ceil(nominalLanes(count, timing, stream) * (1 + (stream.variation ?? 0)));
}

// How far from the middle of the floor the outermost lane is.
export function streamRadius(count, timing, stream = STREAM) {
  const lanes = totalLanes(count, timing, stream);
  return streamLanes(lanes, stream.spacing).reduce((far, p) => Math.max(far, Math.hypot(p.x, p.z)), 0);
}

// Where and when each cube is released. The same seed always gives the same plan.
export function spawnPlan(count, { duration, ramp = 0, seed = ARENA.spawnSeed, stream = STREAM }) {
  const random = mulberry32(seed);
  const variation = stream.variation ?? 0;
  const rateNoise = slowNoise(random);
  const areaNoise = slowNoise(random);

  // When each cube is due: a share q of the cubes is out by the time the total flow so far
  // reaches q of the whole. The flow is tabulated, then read back.
  const steps = 2000;
  const flow = new Float64Array(steps + 1);
  for (let i = 0; i < steps; i++) {
    const t = ((i + 0.5) / steps) * duration;
    flow[i + 1] = flow[i] + rampLevel(t, duration, ramp) * (1 + variation * rateNoise(t));
  }
  const dueTime = (q) => {
    const target = q * flow[steps];
    let low = 0;
    let high = steps;
    while (high - low > 1) {
      const mid = (low + high) >> 1;
      if (flow[mid] <= target) low = mid; else high = mid;
    }
    const share = flow[high] > flow[low] ? (target - flow[low]) / (flow[high] - flow[low]) : 0;
    return ((low + share) / steps) * duration;
  };

  // Lanes: the inner ones are used first, so the stream is a disc that grows and shrinks.
  const nominal = nominalLanes(count, { duration, ramp }, stream);
  const lanes = totalLanes(count, { duration, ramp }, stream);
  const positions = streamLanes(lanes, stream.spacing);
  const activeAt = (t) => Math.max(1, Math.min(lanes, Math.round(nominal * (1 + variation * areaNoise(t)))));
  const clearAfter = stream.gap / stream.speed; // how long a lane is busy after a release
  const freeAt = new Float64Array(lanes);

  // Release the cubes in order of due time. Each takes the lane that has been free longest; if
  // every lane in use is still busy it waits for the first to clear.
  const releases = [];
  for (let k = 0; k < count; k++) {
    const due = dueTime((k + 0.5) / count);
    const active = activeAt(due);
    let lane = 0;
    for (let l = 1; l < active; l++) if (freeAt[l] < freeAt[lane]) lane = l;
    const time = Math.max(due, freeAt[lane]);
    freeAt[lane] = time + clearAfter;
    releases.push({ lane, time });
  }

  // Which cube is released in which slot is random, so cubes of any species arrive in any order.
  const order = Array.from({ length: count }, (_, i) => i);
  for (let i = count - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order.map((slot) => ({
    x: positions[releases[slot].lane].x,
    z: positions[releases[slot].lane].z,
    delay: releases[slot].time,
    velocity: { x: (random() - 0.5) * 2 * stream.drift, y: -stream.speed, z: (random() - 0.5) * 2 * stream.drift },
    quaternion: randomQuaternion(random),
    spin: { x: (random() - 0.5) * 6, y: (random() - 0.5) * 6, z: (random() - 0.5) * 6 },
  }));
}
