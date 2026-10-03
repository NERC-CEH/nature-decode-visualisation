// Boot: load the data, build the scene and controller, wire up the UI.

import { STEPS, DURATIONS } from './config.js';
import { readGlobalCube } from './data.js';
import { createTheme } from './theme.js';
import { createScene } from './scene.js';
import { createPhysics } from './physics.js';
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

const scene = createScene(document.getElementById('canvas-wrap'), { size: cube.size });
if (!scene) ui.showNoWebGL();

// One theme value drives the CSS variables and the 3D clear colour together.
const theme = createTheme((colours) => {
  const root = document.documentElement.style;
  for (const [key, value] of Object.entries(colours)) root.setProperty(`--${key}`, value);
  scene?.setClearColour(colours.bg);
}, steps[0].theme);

const physics = createPhysics(); // no bodies until the Data step (M1)

const ctx = {
  cube,
  scene,
  physics,
  setTheme: (name) => theme.animateTo(name, DURATIONS.theme),
  capture: () => [], // per-cube positions, rotations and colours, once cubes exist
  reset: () => theme.animateTo(steps[0].theme, DURATIONS.theme),
};

const controller = createController({ steps, ctx, onChange: (state) => ui.render(state) });
ui.render(controller.state);

let last = performance.now();
function frame(now) {
  const dt = Math.min((now - last) / 1000, 0.1);
  last = now;
  physics.step(dt);
  scene?.render(dt);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
