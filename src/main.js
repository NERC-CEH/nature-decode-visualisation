// Boot: load the data, build the scene and controller, wire up the UI.

import { STEPS, DURATIONS, speciesColour } from './config.js';
import { readGlobalCube } from './data.js';
import { arenaSize, streamRadius } from './arena.js';
import { createTheme } from './theme.js';
import { createScene } from './scene.js';
import { createPhysics } from './physics.js';
import { createCubeField } from './cubes.js';
import { createNetwork } from './network.js';
import { createRotation } from './rotate.js';
import { createFrame } from './frame.js';
import { arrangement, cubeFrame } from './layout.js';
import { repel } from './repulsion.js';
import { heapSpots } from './steering.js';
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
const cubeBox = cubeFrame(cube.size);
scene?.setCubeFrame(cubeBox);
const field = scene
  ? createCubeField({ scene: scene.cubeGroup, physics, cubes: cube.cubes, arena, getSpawnY: () => scene.spawnY })
  : null;

// The box, the arrow for time and the axis titles round the arranged cube, and the drag that turns it.
const frame = scene
  ? createFrame({
    parent: scene.cubeGroup,
    staticParent: scene.faceGroup,
    edge: cubeBox.edge,
    centreY: cubeBox.centreY,
    makeLabel: (text) => {
      const element = document.createElement('div');
      element.className = 'axis-label';
      element.textContent = text;
      return element;
    },
  })
  : null;
const rotation = scene
  ? createRotation({ element: document.getElementById('canvas-wrap'), pivot: scene.pivot })
  : null;
scene?.pivot.position.set(0, cubeBox.centreY, 0);
scene?.cubeGroup.position.set(0, -cubeBox.centreY, 0);

const network = scene ? createNetwork({ scene: scene.scene, camera: scene.camera }) : null;

const ctx = {
  cube,
  arena,
  scene,
  physics,
  field,
  network,
  frame,
  rotation,
  repel: false, // set from the current step
  setTheme: (name) => theme.animateTo(name, DURATIONS.theme),
  capture: () => field?.capture() ?? [],
  reset: () => Promise.all([
    field?.liftAway(DURATIONS.lift),
    frame?.fadeTo(0, DURATIONS.frameFade / 2),
    frame?.hideFaceTitles(0.2),
    scene?.setView('floor', DURATIONS.lift),
    scene?.fadeShadow(1, DURATIONS.lift),
    rotation?.setTarget({ yaw: 0, pitch: 0 }),
    theme.animateTo(steps[0].theme, DURATIONS.theme),
    network?.fadeTo(1, DURATIONS.theme),
  ]),
};

const controller = createController({
  steps,
  ctx,
  onChange: (state) => {
    ctx.repel = Boolean(state.step.repel);
    if (rotation) rotation.enabled = Boolean(state.step.rotate);
    ui.render(state);
  },
});
ui.render(controller.state);

// Everything that changes from one frame to the next.
function update(dt) {
  field?.tick(dt);
  rotation?.update(dt);
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
    speciesColour,
    spots: heapSpots(arena, cube.displayOrder),
    cells: arrangement(cube.cubes, cube.displayOrder, cube.size),
    pause: () => { paused = true; },
    advance: (seconds) => {
      for (let t = 0; t < seconds - 1e-9; t += 1 / 60) update(1 / 60);
      scene?.render();
    },
  };
}

let last = performance.now();
function loop(now) {
  const dt = Math.min((now - last) / 1000, 0.1);
  last = now;
  if (!paused) update(dt);
  scene?.render();
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
