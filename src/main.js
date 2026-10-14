// Boot: load the data, build the scene and controller, wire up the UI.

import { STEPS, DURATIONS, CALLOUT, KIOSK, speciesColour } from './config.js';
import { readGlobalCube } from './data.js';
import { arenaSize, streamRadius } from './arena.js';
import { createTheme } from './theme.js';
import { createScene } from './scene.js';
import { createPhysics } from './physics.js';
import { createCubeField } from './cubes.js';
import { createNetwork } from './network.js';
import { createRotation } from './rotate.js';
import { createFrame } from './frame.js';
import { createLogo, logoLayout } from './finale.js';
import logoDots from './logoDots.js';
import { arrangement, cubeFrame } from './layout.js';
import { repel } from './repulsion.js';
import { heapSpots } from './steering.js';
import { createController } from './controller.js';
import { buildSteps } from './steps/index.js';
import { createUi } from './ui.js';
import { createCallout, pickTopRight } from './callout.js';
import { reducedMotion } from './motion.js';
import { createKiosk, listenForInput } from './kiosk.js';
import { isPhone, watchTurn, lockLandscape } from './device.js';
import { createQuality } from './quality.js';

const steps = buildSteps(STEPS);
const ui = createUi({
  steps,
  onNext: () => controller.next(),
  onBack: () => controller.back(),
  onRestart: () => controller.restart(),
  onCaptionComplete: (index) => kiosk?.captionComplete(index),
  onKioskStart: () => kiosk?.start(),
  onCaptionShown: (step) => {
    if (step.calloutWhenReady && controller.state.busy) pendingCallouts = step;
    else startCallouts(step);
  },
});

let cube;
try {
  cube = readGlobalCube();
} catch (error) {
  console.error(error);
  ui.showFatal(`${error.message} The animation cannot start.`);
  throw error;
}

const phone = isPhone();
document.documentElement.classList.toggle('is-phone', phone); // styles.css hides "Play automatically" on a phone
// The renderer starts at a tier that suits the device and drops a tier if frames run slow (see quality.js).
const quality = createQuality({ phone, onChange: (tier) => scene?.setQuality(tier) });
const scene = createScene(document.getElementById('canvas-wrap'), document.querySelector('.stage'), { tier: quality.tier, antialias: !phone });
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
const logo = createLogo(document.getElementById('logo'));
const rotation = scene
  ? createRotation({ element: document.getElementById('canvas-wrap'), pivot: scene.pivot })
  : null;
scene?.pivot.position.set(0, cubeBox.centreY, 0);
scene?.onResize(() => {
  if (ctx.finaleLayout && logo.amount > 0) {
    const stage = scene.stage();
    ctx.finaleLayout = logoLayout({ stage, image: logoDots.image, dots: logoDots.dots, unitsPerPixel: stage.unitsPerPixel });
    logo.place(ctx.finaleLayout.rect);
  }
});
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
  logo,
  cubeCentre: cubeBox.centreY,
  repel: false, // set from the current step
  setTheme: (name, seconds = DURATIONS.theme) => theme.animateTo(name, seconds),
  capture: () => field?.capture() ?? [],
  reset: async () => {
    await logo.fadeTo(0, 0.6);
    field?.clear();
    rotation?.setTarget({ yaw: 0, pitch: 0 });
    await Promise.all([
      frame?.fadeTo(0, 0.2),
      frame?.hideFaceTitles(0.2),
      scene?.setView('floor', DURATIONS.theme),
      scene?.fadeShadow(1, DURATIONS.theme),
      theme.animateTo(steps[0].theme, DURATIONS.theme),
      network?.fadeTo(1, DURATIONS.theme),
    ]);
  },
};

// Where something a callout can point at is on the stage. Numbers below the cube count are cubes;
// the numbers after them are the eight corners of the frame round the data cube.
const corners = [-1, 1].flatMap((x) => [-1, 1].flatMap((y) => [-1, 1].map((z) => ({
  x: (x * cubeBox.edge) / 2,
  y: cubeBox.centreY + (y * cubeBox.edge) / 2,
  z: (z * cubeBox.edge) / 2,
}))));
const locate = (i) => {
  if (i >= cube.cubes.length) return scene.toStage(corners[i - cube.cubes.length]);
  const p = field?.positionOf(i);
  return p ? scene.toStage(p) : null;
};
// Where the axis titles are on the stage, so a label can keep clear of them.
function axisTitleBoxes() {
  const layer = document.getElementById('callouts').getBoundingClientRect();
  return [...document.querySelectorAll('.axis-label')].map((e) => e.getBoundingClientRect())
    .filter((r) => r.width > 0)
    .map((r) => ({ left: r.left - layer.left - 6, right: r.right - layer.left + 6, top: r.top - layer.top - 6, bottom: r.bottom - layer.top + 6 }));
}
// Each tag line and label is its own callout; a step's list plays one after another.
const callouts = scene && field
  ? [0, 1, 2, 3].map((n) => createCallout({
    layer: document.getElementById('callouts'),
    locate,
    pick: () => -1,
    obstacles: () => cube.cubes.map((_, i) => locate(i)),
    others: () => [...callouts.filter((_, k) => k !== n).map((c) => c.occupied()), ...axisTitleBoxes()],
    lines: () => callouts.filter((_, k) => k !== n).map((c) => c.segment()),
  }))
  : [];
let pendingCallouts = null;

// The cubes of one species' heap (the back left or back right one).
function heapCubes(target) {
  const spots = heapSpots(arena, cube.displayOrder);
  const species = spots.map((spot, id) => ({ ...spot, id })).filter((spot) => spot.x !== undefined);
  const zs = species.map((spot) => spot.z).sort((p, q) => p - q);
  const back = species.filter((spot) => spot.z <= zs[Math.floor((zs.length - 1) / 2)]);
  const chosen = back.reduce((best, spot) => ((target === 'backLeftHeap' ? spot.x < best.x : spot.x > best.x) ? spot : best));
  return new Set(cube.cubes.map((c, i) => (c.species === chosen.id ? i : -1)).filter((i) => i >= 0));
}

// The index of the cube (or frame corner) a callout should point at, not one already used.
function chooseTarget(target, used) {
  const all = cube.cubes.map((_, i) => (used.has(i) ? null : locate(i)));
  const best = (points, score) => points.reduce((top, p, i) => (p && (top < 0 || score(p) > score(points[top])) ? i : top), -1);
  if (target === 'cubeTopRight') {
    return cube.cubes.length + best(corners.map((_, k) => locate(cube.cubes.length + k)), (p) => p.x - p.y);
  }
  if (target === 'backLeftHeap' || target === 'backRightHeap') {
    const members = heapCubes(target);
    return pickTopRight(all.map((p, i) => (members.has(i) ? p : null)));
  }
  if (target === 'rightmost') return best(all, (p) => p.x);
  if (target === 'leftmost') return best(all, (p) => -p.x);
  if (target === 'lowest') return best(all, (p) => p.y);
  if (target === 'rightmostBack') {
    // of the quarter of the cubes furthest from the camera, the one furthest right
    const depths = all.filter(Boolean).map((p) => p.depth).sort((p, q) => p - q);
    const limit = depths[Math.floor(depths.length * 0.75)];
    return best(all.map((p) => (p && p.depth >= limit ? p : null)), (p) => p.x);
  }
  return pickTopRight(all);
}

// The rectangle round the cells of the specialist species (the top two rows) or the generalists
// (the bottom two), in stage pixels, or null if they cannot be placed.
function rowsRegion(target, anchor) {
  if (target === 'cubeBox') {
    const points = corners.map((_, k) => locate(cube.cubes.length + k)).filter(Boolean);
    if (!points.length) return null;
    return {
      left: Math.min(...points.map((p) => p.x)),
      right: Math.max(...points.map((p) => p.x)),
      top: Math.min(...points.map((p) => p.y)),
      bottom: Math.max(...points.map((p) => p.y)),
      anchor,
    };
  }
  const order = cube.displayOrder;
  const wanted = new Set(target === 'specialists' ? order.slice(-2) : order.slice(0, 2));
  const members = cube.cubes.map((c, i) => (wanted.has(c.species) ? i : -1)).filter((i) => i >= 0);
  const points = members.map((i) => locate(i)).filter(Boolean);
  if (!points.length) return null;
  const first = field.positionOf(members[0]);
  const a = scene.toStage(first);
  const b = scene.toStage({ x: first.x, y: first.y + 1, z: first.z });
  const pad = 0.5 * Math.hypot(b.x - a.x, b.y - a.y) + 6;
  return {
    left: Math.min(...points.map((p) => p.x)) - pad,
    right: Math.max(...points.map((p) => p.x)) + pad,
    top: Math.min(...points.map((p) => p.y)) - pad,
    bottom: Math.max(...points.map((p) => p.y)) + pad,
  };
}

function startCallouts(step) {
  const entries = step.callout;
  const used = new Set();
  const play = (n) => {
    if (n >= entries.length || !callouts[n]) { ui.revealText(); return; } // the caption comes last
    const { target, text, reveal, delay, side, outline, anchor } = entries[n];
    callouts[n].schedule(text, {
      ...(side ? { region: () => rowsRegion(target, anchor), side, outline } : {}),
      delay: n === 0 ? undefined : (delay ?? 0),
      onLabel: () => {
        for (const axis of [reveal ?? []].flat()) frame?.showAxis(axis, CALLOUT.labelFade);
        ui.announce(text); // for screen readers: each label is read as it comes in
      },
      pick: () => {
        const index = chooseTarget(target, used);
        used.add(index);
        return index;
      },
      onShown: () => play(n + 1),
    });
  };
  play(0);
}

const controller = createController({
  steps,
  ctx,
  onChange: (state) => {
    ctx.repel = Boolean(state.step.repel) && !reducedMotion(); // under reduced motion the cursor does not push cubes
    if (rotation) rotation.enabled = Boolean(state.step.rotate);
    if (state.index !== lastIndex) {
      callouts.forEach((c) => c.hide());
      pendingCallouts = null;
      lastIndex = state.index;
    }
    if (!state.busy && pendingCallouts) {
      const step = pendingCallouts;
      pendingCallouts = null;
      startCallouts(step);
    }
    ui.render(state);
    kiosk?.stateChanged(state);
  },
});
let lastIndex = controller.state.index;
ui.render(controller.state);

// Kiosk mode: the story plays itself. Started by the link on the opening screen or by ?kiosk in the address.
const eventMode = /[?&]kiosk(?:&|$)/.test(location.search);
const kiosk = createKiosk({
  controller,
  steps,
  eventMode,
  reduced: reducedMotion,
  onChange: (mode) => {
    ui.setKioskMode(mode);
    if (mode !== 'auto' && virtualCursor) virtualCursor.hidden = true;
  },
});
listenForInput(kiosk);
const virtualCursor = document.getElementById('virtual-cursor');
if (eventMode) kiosk.start();

// The ring that marks the kiosk's virtual cursor on the screen
function showVirtualCursor(point) {
  if (!point || !scene) { virtualCursor.hidden = true; return; }
  const spot = scene.toStage({ x: point.x, y: 0.5, z: point.z });
  if (!spot) { virtualCursor.hidden = true; return; }
  virtualCursor.hidden = false;
  virtualCursor.style.transform = `translate(${spot.x}px, ${spot.y}px)`;
}

// Everything that changes from one frame to the next.
function update(dt) {
  field?.tick(dt);
  rotation?.update(dt);
  callouts.forEach((c) => c.update(dt));
  if (!reducedMotion()) network?.update(dt, scene?.pointerNdc()); // the intro network holds still
  kiosk.update(dt);
  const virtual = ctx.repel ? kiosk.virtualPoint(arena) : null;
  const point = ctx.repel && (virtual ?? scene?.floorPoint());
  showVirtualCursor(virtual);
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
    kiosk,
    KIOSK,
    arena,
    speciesColour,
    DURATIONS,
    spots: heapSpots(arena, cube.displayOrder),
    cells: arrangement(cube.cubes, cube.displayOrder, cube.size),
    pause: () => { paused = true; },
    advance: (seconds) => {
      for (let t = 0; t < seconds - 1e-9; t += 1 / 60) update(1 / 60);
      scene?.render();
    },
  };
}

// A phone held upright is asked to turn; the animation waits behind the prompt.
let waitingForTurn = false;
const turnPrompt = document.getElementById('turn-prompt');
watchTurn((needed) => {
  waitingForTurn = needed;
  if (turnPrompt) turnPrompt.hidden = !needed;
  document.getElementById('app')?.toggleAttribute('inert', needed);
});
// Browsers only allow a landscape lock after a tap (and often only in full screen); try on the first one.
document.addEventListener('pointerdown', () => lockLandscape(), { once: true });

let last = performance.now();
function loop(now) {
  const dt = Math.min((now - last) / 1000, 0.1);
  last = now;
  if (!paused && !waitingForTurn) {
    update(dt);
    quality.frame(dt);
  }
  scene?.render();
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
