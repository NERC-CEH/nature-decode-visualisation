import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import * as THREE from 'three';
import { arenaSize } from '../src/arena.js';
import { createPhysics } from '../src/physics.js';
import { createCubeField } from '../src/cubes.js';
import { createFrame } from '../src/frame.js';
import { createRotation } from '../src/rotate.js';
import { arrangement, cubeFrame } from '../src/layout.js';
import { interpolateView, visibleHeight } from '../src/views.js';
import { FACES, insight1Step, insight2Step, insight3Step } from '../src/steps/insights.js';
import { CUBE, FACE, STEPS, speciesColour } from '../src/config.js';
import { loadCube } from '../src/data.js';

const cube = loadCube(JSON.parse(readFileSync('data/data-cube.json', 'utf8')));
const arena = arenaSize(cube.cubes.length);

// ---- which axes each face shows ---------------------------------------------------------------
// Turn a point the way the cube is turned and read off where it lands across and up the screen.
function onScreen(face, point) {
  const pivot = new THREE.Object3D();
  pivot.rotation.set(face.pitch, face.yaw, 0, 'YXZ');
  pivot.updateMatrixWorld();
  const p = new THREE.Vector3(point.x, point.y, point.z).applyMatrix4(pivot.matrixWorld);
  return { across: p.x, up: p.y, depth: p.z };
}
const unit = (axis, amount) => ({ x: 0, y: 0, z: 0, [axis]: amount });

test('Insights 1 shows location across and species up; time is along the line of sight', () => {
  const f = FACES.insight1;
  const time = onScreen(f, unit('x', 5));
  assert.ok(Math.abs(time.across) < 1e-9 && Math.abs(time.up) < 1e-9, 'moving along time does not move the cell on screen');
  assert.ok(Math.abs(onScreen(f, unit('z', 5)).across) > 4, 'location moves it across');
  assert.ok(Math.abs(onScreen(f, unit('y', 5)).up) > 4, 'species moves it up');
  assert.ok(onScreen(f, unit('z', 5)).across > onScreen(f, unit('z', -5)).across, 'higher locations are further right');
});

test('Insights 2 shows time across and location up and down; species is along the line of sight', () => {
  const f = FACES.insight2;
  const species = onScreen(f, unit('y', 5));
  assert.ok(Math.abs(species.across) < 1e-9 && Math.abs(species.up) < 1e-9, 'moving up the species does not move the cell on screen');
  assert.ok(onScreen(f, unit('x', 5)).across > onScreen(f, unit('x', -5)).across, 'time runs left to right');
  assert.ok(Math.abs(onScreen(f, unit('z', 5)).up) > 4, 'location moves it up or down');
});

test('Insights 3 shows time across and species up; location is along the line of sight', () => {
  const f = FACES.insight3;
  const location = onScreen(f, unit('z', 5));
  assert.ok(Math.abs(location.across) < 1e-9 && Math.abs(location.up) < 1e-9);
  assert.ok(onScreen(f, unit('x', 5)).across > onScreen(f, unit('x', -5)).across, 'time runs left to right');
  assert.ok(onScreen(f, unit('y', 5)).up > onScreen(f, unit('y', -5)).up, 'species run upwards');
});

test('only the face that puts species together is grey', () => {
  assert.deepEqual([FACES.insight1, FACES.insight2, FACES.insight3].map((f) => f.neutral), [false, true, false]);
});

test('the Insight steps are the ones where the cube can be dragged, and they carry the key', () => {
  for (const id of ['insight1', 'insight2', 'insight3']) {
    const step = STEPS.find((s) => s.id === id);
    assert.equal(step.rotate, true);
    assert.match(step.note, /Darker means more records/);
  }
});

// ---- the dolly zoom -----------------------------------------------------------------------------
const cubeView = { target: { x: 0, y: 5, z: 0 }, distance: 32, elevation: 14, fov: 35 };
const faceView = { target: { x: 0, y: 7, z: 0 }, distance: 300, elevation: 0, fov: FACE.fov };

test('the view moves from one to the other and arrives exactly', () => {
  assert.deepEqual(interpolateView(cubeView, faceView, 0), { ...cubeView, target: { ...cubeView.target } });
  const end = interpolateView(cubeView, faceView, 1);
  assert.ok(Math.abs(end.distance - faceView.distance) < 1e-6 && Math.abs(end.fov - faceView.fov) < 1e-9);
  assert.equal(end.elevation, 0);
});

test('while the field of view narrows, the cube stays the same size on screen', () => {
  // two views that differ only in field of view, at distances that show the same size
  const wide = { target: { x: 0, y: 0, z: 0 }, distance: 30, elevation: 0, fov: 35 };
  const narrowDistance = (30 * Math.tan((35 * Math.PI) / 360)) / Math.tan((3 * Math.PI) / 360);
  const narrow = { ...wide, distance: narrowDistance, fov: 3 };
  for (const t of [0.2, 0.5, 0.8]) {
    const v = interpolateView(wide, narrow, t);
    assert.ok(Math.abs(visibleHeight(v) - visibleHeight(wide)) < 1e-6, `size at t = ${t}`);
    assert.ok(v.fov < 35 && v.fov > 3);
  }
  assert.ok(narrowDistance > 300, 'so the camera ends up a long way back');
});

test('the face view puts the whole face and room for its titles in the picture', () => {
  const { edge } = cubeFrame(cube.size);
  const tan = Math.tan((FACE.fov * Math.PI) / 360);
  const distance = (edge / 2 * FACE.margin) / tan;
  const seen = visibleHeight({ distance, fov: FACE.fov });
  assert.ok(seen >= edge * 1.2, `sees ${seen.toFixed(1)} units for a face ${edge} across`);
  assert.ok(distance > 100, 'a long way back, so perspective all but disappears');
  // across the depth of the cube, scale differs by only a few per cent
  assert.ok(edge / distance < 0.05);
});

// ---- see-through cubes -----------------------------------------------------------------------------
function makeField() {
  const physics = createPhysics();
  physics.setBounds(arena.width, arena.depth);
  const field = createCubeField({ scene: new THREE.Group(), physics, cubes: cube.cubes, arena });
  return { field, physics };
}
const colourOf = (field, i) => {
  const c = new THREE.Color();
  field.mesh.getColorAt(i, c);
  return `#${c.getHexString()}`;
};

test('cubes start solid; blending makes them see-through and changes their colour, and back', async () => {
  const { field } = makeField();
  assert.equal(field.material.opacity, 1);
  assert.equal(field.material.transparent, false);
  await field.blendTo(() => '#336699', 0.4, 0.05);
  assert.ok(Math.abs(field.material.opacity - 0.4) < 1e-9);
  assert.equal(field.material.transparent, true);
  assert.equal(field.material.depthWrite, false, 'see-through cubes do not hide those behind them');
  assert.equal(colourOf(field, 0), '#336699');
  await field.blendTo((i) => speciesColour(cube.cubes[i].species), 1, 0.05);
  assert.equal(field.material.opacity, 1);
  assert.equal(field.material.transparent, false);
  assert.equal(field.material.depthWrite, true);
});

test('blending passes through the colours in between', async () => {
  const { field } = makeField();
  field.setColour(0, '#000000');
  const done = field.blendTo(() => '#ffffff', 1, 0.2);
  await new Promise((r) => setTimeout(r, 90));
  const middle = parseInt(colourOf(field, 0).slice(1, 3), 16);
  assert.ok(middle > 20 && middle < 250, `partway between black and white (${middle})`);
  await done;
});

test('clearing the cubes makes them solid again', async () => {
  const { field } = makeField();
  await field.blendTo(() => '#336699', 0.3, 0.02);
  field.clear();
  assert.equal(field.material.opacity, 1);
  assert.equal(field.material.transparent, false);
});

// ---- the upright titles ---------------------------------------------------------------------------------
function makeFrame() {
  const made = [];
  const frame = createFrame({
    parent: new THREE.Group(),
    staticParent: new THREE.Group(),
    edge: 11.25,
    centreY: 7.1,
    makeLabel: (text) => {
      const element = { textContent: text, style: {}, className: '', setAttribute() {} };
      made.push(element);
      return element;
    },
  });
  return { frame, made };
}

test('the two upright titles show, change text and hide', async () => {
  const { frame } = makeFrame();
  const [horizontal, vertical] = frame.faceTitles;
  assert.equal(horizontal.element.style.opacity, '0');
  await frame.showFaceTitles('Location', 'Species', 0.05);
  assert.equal(horizontal.element.textContent, 'Location');
  assert.equal(vertical.element.textContent, 'Species');
  assert.equal(Number(horizontal.element.style.opacity), 1);
  await frame.showFaceTitles('Time →', 'Location', 0.05);
  assert.equal(horizontal.element.textContent, 'Time →');
  assert.equal(vertical.element.textContent, 'Location');
  await frame.hideFaceTitles(0.05);
  assert.equal(horizontal.element.style.opacity, '0');
  assert.equal(vertical.element.style.opacity, '0');
});

test('the arrow and three titles can fade without the box, and the whole frame can fade together', async () => {
  const { frame } = makeFrame();
  await frame.fadeTo(1, 0.03);
  assert.equal(frame.amount, 1);
  assert.equal(frame.titles, 1);
  await frame.fadeTitlesTo(0, 0.03);
  assert.equal(frame.titles, 0);
  assert.equal(frame.amount, 1, 'the box stays');
  assert.equal(frame.group.visible, true);
  await frame.fadeTo(0, 0.03);
  assert.equal(frame.group.visible, false);
});

// ---- waiting for the cube to arrive ---------------------------------------------------------------------
test('arrive() resolves once the cube has come to rest at its target', async () => {
  const rotation = createRotation({ element: null, pivot: new THREE.Group() });
  rotation.setTarget({ yaw: FACES.insight1.yaw, pitch: 0 });
  const arrived = rotation.arrive(5);
  let done = false;
  arrived.then(() => { done = true; });
  for (let f = 0; f < 20; f++) rotation.update(1 / 60);
  await new Promise((r) => setTimeout(r, 0));
  assert.equal(done, false, 'still turning');
  for (let f = 0; f < 60 * 4; f++) rotation.update(1 / 60);
  await new Promise((r) => setTimeout(r, 0));
  assert.equal(done, true);
});

// ---- the steps -------------------------------------------------------------------------------------------
function fakeContext() {
  const log = [];
  const ctx = {
    cube,
    field: { blendTo: (fn, alpha) => { log.push(['blend', alpha, fn(0)]); return Promise.resolve(); } },
    scene: { setView: (name) => { log.push(['view', name]); return Promise.resolve(); } },
    frame: {
      fadeTitlesTo: (a) => { log.push(['titles', a]); return Promise.resolve(); },
      showFaceTitles: (h, v) => { log.push(['faceTitles', h, v]); return Promise.resolve(); },
      hideFaceTitles: () => { log.push(['hideFaceTitles']); return Promise.resolve(); },
    },
    rotation: { setTarget: (t) => log.push(['target', t.yaw, t.pitch]), arrive: () => Promise.resolve() },
  };
  return { ctx, log };
}

test('each Insight step turns to its face, narrows the view, and names its axes', async () => {
  for (const [step, face] of [[insight1Step, FACES.insight1], [insight2Step, FACES.insight2], [insight3Step, FACES.insight3]]) {
    const { ctx, log } = fakeContext();
    await step.enter(ctx);
    assert.deepEqual(log.find((l) => l[0] === 'target'), ['target', face.yaw, face.pitch]);
    assert.deepEqual(log.find((l) => l[0] === 'view'), ['view', 'face']);
    assert.deepEqual(log.find((l) => l[0] === 'faceTitles'), ['faceTitles', face.horizontal, face.vertical]);
    const blend = log.find((l) => l[0] === 'blend');
    assert.equal(blend[1], face.neutral ? FACE.neutralAlpha : FACE.alpha);
    if (face.neutral) assert.equal(blend[2], FACE.neutral);
    else assert.equal(blend[2], speciesColour(cube.cubes[0].species));
  }
});

test('Back from each face goes to the one before, and from the first to the arranged cube', async () => {
  let { ctx, log } = fakeContext();
  await insight3Step.reverse(ctx);
  assert.deepEqual(log.find((l) => l[0] === 'target'), ['target', FACES.insight2.yaw, FACES.insight2.pitch]);
  ({ ctx, log } = fakeContext());
  await insight2Step.reverse(ctx);
  assert.deepEqual(log.find((l) => l[0] === 'target'), ['target', FACES.insight1.yaw, FACES.insight1.pitch]);
  ({ ctx, log } = fakeContext());
  await insight1Step.reverse(ctx);
  assert.deepEqual(log.find((l) => l[0] === 'target'), ['target', CUBE.yaw, CUBE.tilt]);
  assert.deepEqual(log.find((l) => l[0] === 'view'), ['view', 'cube']);
  assert.equal(log.find((l) => l[0] === 'blend')[1], 1, 'solid again');
  assert.ok(log.some((l) => l[0] === 'hideFaceTitles'));
  assert.deepEqual(log.find((l) => l[0] === 'titles'), ['titles', 1]);
});

test('the layout puts the arranged cube where the face views expect it', () => {
  const { centreY } = cubeFrame(cube.size);
  const cells = arrangement(cube.cubes, cube.displayOrder, cube.size);
  const mid = (values) => (Math.min(...values) + Math.max(...values)) / 2;
  assert.ok(Math.abs(mid(cells.map((c) => c.x))) < cube.size);
  assert.ok(centreY > 0);
});
