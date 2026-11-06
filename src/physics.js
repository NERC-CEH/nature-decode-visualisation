// Physics world (cannon-es). All physics goes through this module, so the engine can be
// swapped without touching the steps. One world unit is one cube edge.

import * as CANNON from 'cannon-es';
import { PHYSICS } from './config.js';

export function createPhysics(settings = PHYSICS) {
  const world = new CANNON.World({ gravity: new CANNON.Vec3(0, settings.gravity, 0) });
  world.allowSleep = true;

  const cubeMaterial = new CANNON.Material('cube');
  world.addContactMaterial(new CANNON.ContactMaterial(cubeMaterial, cubeMaterial, {
    friction: settings.friction,
    restitution: settings.restitution,
  }));

  // Invisible floor at y = 0.
  const floor = new CANNON.Body({ type: CANNON.Body.STATIC, material: cubeMaterial, shape: new CANNON.Plane() });
  floor.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
  world.addBody(floor);

  const bodies = [];
  const walls = [];
  const hooks = [];
  const impactListeners = [];
  let intoStep = 0; // seconds into the current step() call that the fixed step being run starts
  let accumulator = 0;
  const reported = new Set(); // contacts already reported in this fixed step
  const MOVE_SMOOTHING = 0.3; // share of each step's movement that goes into a cube's movement speed

  // One fixed step. Afterwards each cube's `moveSpeed` is updated: how fast it has really been travelling
  // (smoothed over a few steps), from how far it moved. Its `velocity` is not that: the Sort pull adds
  // to the velocity before every step and the solver takes it away again, so a cube pinned against a heap
  // has a velocity of several units a second while hardly moving at all.
  function fixedStep() {
    reported.clear();
    world.step(settings.step);
    for (const b of bodies) {
      const p = b.position;
      const moved = Math.hypot(p.x - b.lastX, p.y - b.lastY, p.z - b.lastZ) / settings.step;
      b.moveSpeed += (moved - b.moveSpeed) * MOVE_SMOOTHING;
      b.lastX = p.x; b.lastY = p.y; b.lastZ = p.z;
    }
  }

  return {
    world,
    bodies,

    // Four invisible walls around a floor of the given size, centred on the origin, so cubes
    // stay in view. Each wall is a plane whose normal points into the arena.
    setBounds(width, depth) {
      for (const wall of walls) world.removeBody(wall);
      walls.length = 0;
      const planes = [
        [-width / 2, 0, [0, Math.PI / 2, 0]],
        [width / 2, 0, [0, -Math.PI / 2, 0]],
        [0, -depth / 2, [0, 0, 0]],
        [0, depth / 2, [0, Math.PI, 0]],
      ];
      for (const [x, z, euler] of planes) {
        const wall = new CANNON.Body({ type: CANNON.Body.STATIC, material: cubeMaterial, shape: new CANNON.Plane() });
        wall.position.set(x, 0, z);
        wall.quaternion.setFromEuler(...euler);
        world.addBody(wall);
        walls.push(wall);
      }
    },

    addCube(position, quaternion) {
      const body = new CANNON.Body({
        mass: 1,
        material: cubeMaterial,
        shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)),
        sleepSpeedLimit: 0.15,
        sleepTimeLimit: 0.5,
      });
      // Report each contact's speed: 'ground' for a cube on the floor or a wall, 'cube' for two cubes
      // (reported once, by the cube with the lower id).
      body.addEventListener('collide', (event) => {
        if (!impactListeners.length) return;
        const other = event.body;
        const ground = other.type === CANNON.Body.STATIC;
        if (!ground && other.id < body.id) return;
        // A box touching a box has several contact points, which would report the same hit several times:
        // once for each pair of bodies in each step.
        const key = body.id < other.id ? body.id * 1e6 + other.id : other.id * 1e6 + body.id;
        if (reported.has(key)) return;
        reported.add(key);
        // The speed of the hit is the speed the bodies approach each other, but no more than how fast the
        // faster of them has really been moving: a cube held against others by a strong pull has a large
        // approach speed in the solver and is not going anywhere (see fixedStep).
        const approach = Math.abs(event.contact.getImpactVelocityAlongNormal());
        const speed = Math.min(approach, ground ? body.moveSpeed : Math.max(body.moveSpeed, other.moveSpeed));
        for (const fn of impactListeners) fn(ground ? 'ground' : 'cube', speed, intoStep);
      });
      body.position.set(position.x, position.y, position.z);
      body.moveSpeed = 0;
      body.lastX = position.x; body.lastY = position.y; body.lastZ = position.z;
      if (quaternion) body.quaternion.set(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
      world.addBody(body);
      bodies.push(body);
      return body;
    },

    removeCube(body) {
      world.removeBody(body);
      const i = bodies.indexOf(body);
      if (i >= 0) bodies.splice(i, 1);
    },

    // Call `fn(kind, speed, offset)` whenever cubes touch ('cube' or 'ground'): speed in cube edges a second,
    // offset the seconds into the current step() call that the contact happened (a slow frame is several
    // fixed steps, and the contacts in it did not all happen at once).
    onImpact(fn) {
      impactListeners.push(fn);
    },

    // Run `fn(stepSeconds)` before every fixed step of step(), so forces that act on the cubes
    // are the same at any frame rate (a slow frame is several fixed steps).
    onStep(fn) {
      hooks.push(fn);
    },

    // Advance by real elapsed seconds, in fixed steps.
    step(dt) {
      accumulator = Math.min(accumulator + dt, 0.1);
      intoStep = 0;
      while (accumulator >= settings.step) {
        for (const hook of hooks) hook(settings.step);
        fixedStep();
        accumulator -= settings.step;
        intoStep += settings.step;
      }
    },

    // Step without rendering until every body is asleep. Returns the number of steps taken.
    settle(maxSteps = 600) {
      let steps = 0;
      while (steps < maxSteps && bodies.some((b) => b.sleepState !== CANNON.Body.SLEEPING)) {
        fixedStep();
        steps++;
      }
      return steps;
    },
  };
}
