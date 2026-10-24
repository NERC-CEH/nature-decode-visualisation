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
  let accumulator = 0;

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
        const speed = Math.abs(event.contact.getImpactVelocityAlongNormal());
        for (const fn of impactListeners) fn(ground ? 'ground' : 'cube', speed);
      });
      body.position.set(position.x, position.y, position.z);
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

    // Call `fn(kind, speed)` whenever cubes touch ('cube' or 'ground'), speed in cube edges a second.
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
      while (accumulator >= settings.step) {
        for (const hook of hooks) hook(settings.step);
        world.step(settings.step);
        accumulator -= settings.step;
      }
    },

    // Step without rendering until every body is asleep. Returns the number of steps taken.
    settle(maxSteps = 600) {
      let steps = 0;
      while (steps < maxSteps && bodies.some((b) => b.sleepState !== CANNON.Body.SLEEPING)) {
        world.step(settings.step);
        steps++;
      }
      return steps;
    },
  };
}
