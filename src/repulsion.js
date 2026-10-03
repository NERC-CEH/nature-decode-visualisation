// Cursor repulsion: cubes near the cursor are pushed away along the floor, hop slightly and
// tumble. Applied once per frame while the cursor is over the floor (technical-spec 7.1).

import { Body } from 'cannon-es';
import { REPEL } from './config.js';

// `point` is where the cursor meets the floor ({ x, z }). `dt` is the frame time in seconds, so
// the push is the same at any frame rate. `random` returns 0..1.
export function repel(bodies, point, dt, settings = REPEL, random = Math.random) {
  let pushed = 0;
  for (const body of bodies) {
    if (body.type !== Body.DYNAMIC) continue;
    const dx = body.position.x - point.x;
    const dz = body.position.z - point.z;
    const distance = Math.hypot(dx, dz);
    if (distance >= settings.radius) continue;

    const falloff = (1 - distance / settings.radius) ** 2;
    // Straight away from the cursor, or in a random direction if exactly underneath it.
    const angle = random() * 2 * Math.PI;
    const nx = distance > 1e-4 ? dx / distance : Math.cos(angle);
    const nz = distance > 1e-4 ? dz / distance : Math.sin(angle);

    body.wakeUp();
    const k = falloff * dt;
    body.applyImpulse({ x: nx * settings.push * k, y: settings.lift * k, z: nz * settings.push * k });
    body.angularVelocity.x += (random() - 0.5) * settings.spin * k;
    body.angularVelocity.y += (random() - 0.5) * settings.spin * k;
    body.angularVelocity.z += (random() - 0.5) * settings.spin * k;
    pushed++;
  }
  return pushed;
}

// A brief push on one cube, as the cursor gives when it is right on top of the cube: along
// `direction` (an angle, in radians, round the vertical), at `power` of the cursor's strength.
export function pop(body, angle, power, dt, settings = REPEL, random = Math.random) {
  if (body.type !== Body.DYNAMIC) return;
  const k = power * dt;
  body.wakeUp();
  body.applyImpulse({ x: Math.cos(angle) * settings.push * k, y: settings.lift * k, z: Math.sin(angle) * settings.push * k });
  body.angularVelocity.x += (random() - 0.5) * settings.spin * k;
  body.angularVelocity.y += (random() - 0.5) * settings.spin * k;
  body.angularVelocity.z += (random() - 0.5) * settings.spin * k;
}
