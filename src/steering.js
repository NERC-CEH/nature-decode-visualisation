// Steering for the Sort step: a cube is pulled across the floor towards its heap, and the heap
// builds up by physics as the cubes arrive and pile against each other.

import { Body } from 'cannon-es';
import { SORT } from './config.js';

// Where each species' heap forms: one spot per species, in a row across the floor in the order
// the species stack in the cube (`order` lists species, bottom of the cube first). Neighbouring
// heaps sit a little in front of and behind the line, which gives each more room.
export function heapSpots(arena, order, settings = SORT) {
  const n = order.length;
  const usable = arena.width * settings.spread;
  const spots = [];
  order.forEach((species, k) => {
    spots[species] = {
      x: -usable / 2 + ((k + 0.5) * usable) / n,
      z: (settings.rowZ ?? 0) + (k % 2 === 0 ? -1 : 1) * settings.zigzag,
    };
  });
  return spots;
}

// How hard the pull is, 0..1, `seconds` into a steering that lasts `total` seconds: it builds
// up at the start and eases off at the end, so the cubes are not thrown into their heaps.
export function steerStrength(seconds, total, settings = SORT) {
  if (seconds <= 0 || seconds >= total) return 0;
  const rampIn = Math.min(1, seconds / settings.rampIn);
  const rampOut = Math.min(1, (total - seconds) / settings.rampOut);
  return Math.min(rampIn, rampOut);
}

// Pull one cube towards `target` ({ x, z }) for a frame of `dt` seconds. The pull never drops
// below `base`, which is more than the floor's friction, so cubes keep sliding in until they are
// stopped by the cubes ahead of them; that is what builds a heap rather than a flat patch. A
// little drag on the sideways speed stops cubes swinging past the heap.
export function steer(body, target, dt, strength = 1, settings = SORT) {
  if (body.type !== Body.DYNAMIC || strength <= 0) return;
  const dx = target.x - body.position.x;
  const dz = target.z - body.position.z;
  const distance = Math.hypot(dx, dz);
  if (distance < 1e-6) return;
  // Close to the heap the pull fades out, so cubes stop short of the exact middle and the heap
  // spreads into a mound instead of a tall column.
  const near = settings.heapRadius > 0 ? Math.min(1, distance / settings.heapRadius) : 1;
  const pull = Math.min(settings.max, settings.base + settings.k * distance) * strength * near;
  body.wakeUp();
  body.velocity.x += (dx / distance) * pull * dt - body.velocity.x * settings.drag * dt;
  body.velocity.z += (dz / distance) * pull * dt - body.velocity.z * settings.drag * dt;
}
