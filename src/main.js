// Boot: load the data, build the scene and controller, wire up the UI.

import { STEPS, DURATIONS } from './config.js';
import { readGlobalCube } from './data.js';
import { arenaSize, streamRadius } from './arena.js';
import { createTheme } from './theme.js';
import { createScene } from './scene.js';
import { createPhysics } from './physics.js';
import { createCubeField } from './cubes.js';
import { createNetwork } from './network.js';
import { repel } from './repulsion.js';
import { createController } from './controller.js';
import { buildSteps } from './steps/index.js';
import { createUi } from './ui.js';

const steps = buildSteps(STEPS);
const ui = createUi({
  steps,
  onNext: () => controller.next(),
  onBack: () => controller.back(),
  onRestart: () => controller.restart(),
});

let cube;
try {
  cube = readGlobalCube();
} catch (error) {
  console.error(error);
  ui.showFatal(`${error.message} The animation cannot start.`);
  throw error;
}

const scene = createScene(document.getElementById('canvas-wrap'));
if (!scene) ui.showNoWebGL();

// One theme value drives the CSS variables and the 3D clear colour together.
const theme = createTheme((colours) => {
  const root = document.documentElement.style;
  for (const [key, value] of Object.entries(colours)) root.setProperty(`--${key}`, value);
  scene?.setClearColour(colours.bg);
}, steps[0].theme);

const arena = arenaSize(cube.cubes.length);
const physics = createPhysics();
physics.setBounds(arena.width, arena.depth);
scene?.setArena({ ...arena, streamRadius: streamRadius(cube.cubes.length, { duration: DURATIONS.drop, ramp: DURATIONS.dropRamp }) });
const field = scene
  ? createCubeField({ scene: scene.scene, physics, cubes: cube.cubes, arena, getSpawnY: () => scene.spawnY })
  : null;

const network = scene ? createNetwork({ scene: scene.scene, camera: scene.camera }) : null;

const ctx = {
  cube,
  scene,
  physics,
  field,
  network,
  repel: false, // set from the current step
  setTheme: (name) => theme.animateTo(name, DURATIONS.theme),
  capture: () => field?.capture() ?? [],
  reset: () => Promise.all([
    field?.liftAway(DURATIONS.lift),
    theme.animateTo(steps[0].theme, DURATIONS.theme),
    network?.fadeTo(1, DURATIONS.theme),
  ]),
};

const controller = createController({
  steps,
  ctx,
  onChange: (state) => {
    ctx.repel = Boolean(state.step.repel);
    ui.render(state);
  },
});
ui.render(controller.state);

// Everything that changes from one frame to the next.
function update(dt) {
  field?.tick(dt);
  network?.update(dt, scene?.pointerNdc());
  const point = ctx.repel && scene?.floorPoint();
  if (point) repel(physics.bodies, point, dt);
  physics.step(dt);
  field?.sync();
}

// ?debug exposes the app to the browser console, for testing. pause() stops the animation
// loop and advance(seconds) then steps it by hand, so a screenshot can be taken at an exact time.
let paused = false;
if (location.search.includes('debug')) {
  globalThis.__dataCube = {
    ctx,
    controller,
    arena,
    pause: () => { paused = true; },
    advance: (seconds) => {
      for (let t = 0; t < seconds - 1e-9; t += 1 / 60) update(1 / 60);
      scene?.render();
    },
  };
}

let last = performance.now();
function frame(now) {
  const dt = Math.min((now - last) / 1000, 0.1);
  last = now;
  if (!paused) update(dt);
  scene?.render();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
