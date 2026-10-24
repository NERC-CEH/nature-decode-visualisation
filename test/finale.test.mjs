import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import * as THREE from 'three';
import { arenaSize } from '../src/arena.js';
import { createPhysics } from '../src/physics.js';
import { createCubeField } from '../src/cubes.js';
import { arrangement } from '../src/layout.js';
import { assign, createLogo, finaleTargets, logoLayout } from '../src/finale.js';
import { finaleStep } from '../src/steps/finale.js';
import { CUBE } from '../src/config.js';
import logoDots from '../src/logoDots.js';
import { LOGO } from '../src/config.js';
import { loadCube } from '../src/data.js';
import { mulberry32 } from '../src/random.js';

const cube = loadCube(JSON.parse(readFileSync('data/data-cube.json', 'utf8')));
const arena = arenaSize(cube.cubes.length);

// ---- the logo's dots ------------------------------------------------------------------------
test('the measured symbol has 26 dots in three rings of 6, 8 and 12', () => {
  const { dots, image } = logoDots;
  assert.equal(dots.length, 26);
  const bySize = new Map();
  for (const d of dots) {
    const size = d.r < 16 ? 'small' : d.r < 24 ? 'medium' : 'large';
    bySize.set(size, (bySize.get(size) ?? 0) + 1);
  }
  assert.deepEqual([...bySize.values()].sort((a, b) => a - b), [6, 8, 12]);
  for (const d of dots) {
    assert.ok(d.x - d.r >= -1 && d.y - d.r >= -1 && d.x + d.r <= image.width + 1 && d.y + d.r <= image.height + 1, 'inside the image');
  }
  assert.deepEqual([image.width, image.height], [1536, 666]);
});

test('the dots are laid out round one centre, in rings', () => {
  const { dots } = logoDots;
  const cx = dots.reduce((s, d) => s + d.x, 0) / dots.length;
  const cy = dots.reduce((s, d) => s + d.y, 0) / dots.length;
  const rings = new Map();
  for (const d of dots) {
    const key = Math.round(Math.hypot(d.x - cx, d.y - cy) / 20);
    rings.set(key, (rings.get(key) ?? 0) + 1);
  }
  assert.ok(rings.size <= 5, `${rings.size} distinct distances from the middle`);
});

// ---- where the logo goes ----------------------------------------------------------------------
const stage = { width: 1280, height: 663 };

test('the lock-up is centred on the stage and no larger than its share of it', () => {
  const layout = logoLayout({ stage, image: logoDots.image, dots: logoDots.dots, unitsPerPixel: 0.02 });
  const { rect } = layout;
  assert.ok(Math.abs(rect.left + rect.width / 2 - stage.width / 2) < 1e-9);
  assert.ok(Math.abs(rect.top + rect.height / 2 - stage.height / 2) < 1e-9);
  assert.ok(rect.width <= stage.width * LOGO.fraction + 1e-9 && rect.height <= stage.height * LOGO.fraction + 1e-9);
  assert.ok(Math.abs(rect.width / rect.height - 1536 / 666) < 1e-9, 'keeps its shape');
});

test('on a tall narrow stage the lock-up is limited by the width', () => {
  const layout = logoLayout({ stage: { width: 390, height: 780 }, image: logoDots.image, dots: logoDots.dots, unitsPerPixel: 0.05 });
  assert.ok(layout.rect.width <= 390 * LOGO.fraction + 1e-9);
});

test('each dot lands where it is in the image, scaled, in world units up from the stage middle', () => {
  const upp = 0.02;
  const layout = logoLayout({ stage, image: logoDots.image, dots: logoDots.dots, unitsPerPixel: upp });
  const scale = layout.rect.width / logoDots.image.width;
  logoDots.dots.forEach((d, i) => {
    const screenX = layout.rect.left + d.x * scale;
    const screenY = layout.rect.top + d.y * scale;
    assert.ok(Math.abs(layout.dots[i].x - (screenX - stage.width / 2) * upp) < 1e-9);
    assert.ok(Math.abs(layout.dots[i].y + (screenY - stage.height / 2) * upp) < 1e-9, 'y is up, screen y is down');
    assert.ok(Math.abs(layout.dots[i].diameter - 2 * d.r * scale * upp) < 1e-9);
  });
});

// ---- choosing which cube becomes which dot -------------------------------------------------------
function bruteForce(cost) {
  let best = Infinity;
  const rows = cost.length;
  const cols = cost[0].length;
  const walk = (row, used, total) => {
    if (total >= best) return;
    if (row === rows) { best = total; return; }
    for (let c = 0; c < cols; c++) if (!used.has(c)) walk(row + 1, new Set([...used, c]), total + cost[row][c]);
  };
  walk(0, new Set(), 0);
  return best;
}

test('assign finds the cheapest pairing, as brute force does', () => {
  let seed = 7;
  const random = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
  for (let trial = 0; trial < 25; trial++) {
    const rows = 1 + Math.floor(random() * 4);
    const cols = rows + Math.floor(random() * 3);
    const cost = Array.from({ length: rows }, () => Array.from({ length: cols }, () => Math.floor(random() * 50)));
    const pairs = assign(cost);
    assert.equal(new Set(pairs).size, rows, 'each row gets its own column');
    const total = pairs.reduce((s, c, r) => s + cost[r][c], 0);
    assert.equal(total, bruteForce(cost), `trial ${trial}`);
  }
});

test('26 cubes are chosen to become the dots and every other cube is removed', () => {
  const layout = logoLayout({ stage, image: logoDots.image, dots: logoDots.dots, unitsPerPixel: 0.02 });
  const cells = arrangement(cube.cubes, cube.displayOrder, cube.size);
  const targets = finaleTargets(cells.map((c) => ({ x: c.x, y: c.y })), layout, mulberry32(1));
  assert.equal(targets.length, cube.cubes.length);
  const becoming = targets.filter((t) => !t.removed);
  assert.equal(becoming.length, 26);
  assert.equal(new Set(becoming.map((t) => t.dot)).size, 26, 'one cube for each dot');
  assert.equal(targets.filter((t) => t.removed).length, cube.cubes.length - 26);
  becoming.forEach((t) => assert.ok(Math.abs(t.scale - layout.dots[t.dot].diameter) < 1e-9, 'the size of its dot'));
  targets.forEach((t, i) => { if (t.removed) assert.deepEqual([t.x, t.y, t.scale], [cells[i].x, cells[i].y, 0], 'a removed cube stays where it is'); });
});

test('the cubes are chosen at random: different draws pick different cubes, and the same draw the same', () => {
  const layout = logoLayout({ stage, image: logoDots.image, dots: logoDots.dots, unitsPerPixel: 0.02 });
  const positions = arrangement(cube.cubes, cube.displayOrder, cube.size).map((c) => ({ x: c.x, y: c.y }));
  const pick = (seed) => finaleTargets(positions, layout, mulberry32(seed)).map((t) => (t.removed ? 0 : 1)).join('');
  assert.equal(pick(1), pick(1));
  assert.notEqual(pick(1), pick(2));
});

test('the cubes chosen are paired with the dots so the flights are as short as can be', () => {
  const layout = logoLayout({ stage, image: logoDots.image, dots: logoDots.dots, unitsPerPixel: 0.02 });
  const positions = arrangement(cube.cubes, cube.displayOrder, cube.size).map((c) => ({ x: c.x, y: c.y }));
  const targets = finaleTargets(positions, layout, mulberry32(3));
  const chosen = targets.map((t, i) => (t.removed ? -1 : i)).filter((i) => i >= 0);
  const squared = (i, dot) => (positions[i].x - layout.dots[dot].x) ** 2 + (positions[i].y - layout.dots[dot].y) ** 2;
  for (const a of chosen) {
    for (const b of chosen) {
      const now = squared(a, targets[a].dot) + squared(b, targets[b].dot);
      const swapped = squared(a, targets[b].dot) + squared(b, targets[a].dot);
      assert.ok(swapped >= now - 1e-9, 'swapping two cubes does not shorten the flights');
    }
  }
});

test('with fewer cubes than dots each cube takes its own dot', () => {
  const layout = logoLayout({ stage, image: logoDots.image, dots: logoDots.dots, unitsPerPixel: 0.02 });
  const positions = Array.from({ length: 10 }, (_, i) => ({ x: i - 5, y: 0 }));
  const targets = finaleTargets(positions, layout);
  assert.equal(new Set(targets.map((t) => t.dot)).size, 10);
  assert.ok(targets.every((t) => t.scale > 0));
});

// ---- the cubes' flight ------------------------------------------------------------------------------
function makeField() {
  const physics = createPhysics();
  physics.setBounds(arena.width, arena.depth);
  const field = createCubeField({ scene: new THREE.Group(), physics, cubes: cube.cubes, arena });
  return { field, physics };
}
async function arranged() {
  const { field, physics } = makeField();
  const dropped = field.drop(1, 0, 0.3);
  for (let f = 0; f < 4 * 60; f++) { field.tick(1 / 60); physics.step(1 / 60); }
  await dropped;
  const cells = arrangement(cube.cubes, cube.displayOrder, cube.size);
  await field.arrange(cells, () => 0, 1, 0.1, 0.1);
  return { field, physics, cells };
}

test('flying to targets puts each cube on its target at its size, as a flat white sphere', async () => {
  const { field } = await arranged();
  const targets = cube.cubes.map((_, i) => ({ x: i * 0.1, y: 3, z: 0, scale: i % 2 ? 0 : 0.8 }));
  await field.flyTo(targets, { seconds: 0.1, morph: 1, glow: 1 });
  field.capture().forEach((c, i) => {
    assert.ok(Math.abs(c.p.x - targets[i].x) < 1e-9 && Math.abs(c.p.y - 3) < 1e-9);
    assert.ok(Math.abs(c.s - targets[i].scale) < 1e-9);
  });
  assert.equal(field.morph.value, 1);
  assert.equal(field.material.emissive.r, 1);
  assert.equal(field.material.color.r, 0, 'the colour is gone: only the glow is left, so they are flat white');
});

test('flying back restores the cubes: square, shaded, full size, and in their cells', async () => {
  const { field, cells } = await arranged();
  await field.flyTo(cube.cubes.map(() => ({ x: 0, y: 5, z: 0, scale: 0.5 })), { seconds: 0.05, morph: 1, glow: 1 });
  await field.flyTo(cells.map((c) => ({ ...c, scale: 1 })), { seconds: 0.05, morph: 0, glow: 0 });
  assert.equal(field.morph.value, 0);
  assert.equal(field.material.emissive.r, 0);
  assert.equal(field.material.color.r, 1);
  field.capture().forEach((c, i) => {
    assert.ok(Math.hypot(c.p.x - cells[i].x, c.p.y - cells[i].y, c.p.z - cells[i].z) < 1e-9);
    assert.equal(c.s, 1);
  });
});

test('clearing the cubes after the finale brings back the cubes, shown and shaded', async () => {
  const { field } = await arranged();
  await field.flyTo(cube.cubes.map(() => ({ x: 0, y: 5, z: 0, scale: 0.5 })), { seconds: 0.05, morph: 1, glow: 1 });
  field.setVisible(false);
  field.clear();
  assert.equal(field.mesh.visible, true);
  assert.equal(field.morph.value, 0);
  assert.equal(field.material.emissive.r, 0);
  assert.equal(field.material.color.r, 1);
});

test('the geometry has enough points to bend into a sphere', () => {
  const { field } = makeField();
  assert.ok(field.mesh.geometry.attributes.position.count > 400);
});

// ---- the lock-up image ---------------------------------------------------------------------------------
test('the lock-up image is hidden until it fades in, and goes back to hidden', async () => {
  const element = { style: {}, hidden: false };
  const logo = createLogo(element);
  assert.equal(element.hidden, true);
  logo.place({ left: 10, top: 20, width: 300, height: 100 });
  assert.deepEqual([element.style.left, element.style.top, element.style.width, element.style.height], ['10px', '20px', '300px', '100px']);
  await logo.fadeTo(1, 0.05);
  assert.equal(element.hidden, false);
  assert.equal(element.style.opacity, '1');
  await logo.fadeTo(0, 0.05);
  assert.equal(element.hidden, true);
});

// ---- the step ------------------------------------------------------------------------------------------
function fakeContext() {
  const log = [];
  const cells = arrangement(cube.cubes, cube.displayOrder, cube.size);
  const ctx = {
    cube,
    cubeCentre: 7.1,
    field: {
      capture: () => cells.map((c) => ({ p: { ...c }, q: { x: 0, y: 0, z: 0, w: 1 }, s: 1, colour: '#ffffff', spawned: true })),
      blendTo: (fn, alpha) => { log.push(['blend', alpha]); return Promise.resolve(); },
      fadeOut: (indices, seconds) => { log.push(['fade', indices.length, seconds]); return Promise.resolve(); },
      flyTo: (targets, options) => { log.push(['fly', targets.length, options]); ctx.targets = targets; return Promise.resolve(); },
      setVisible: (v) => log.push(['visible', v]),
    },
    scene: {
      stage: () => ({ width: 1280, height: 663, unitsPerPixel: 0.025 }),
      setView: (name) => { log.push(['view', name]); return Promise.resolve(); },
    },
    frame: {
      fadeTo: (a) => { log.push(['frame', a]); return Promise.resolve(); },
      fadeBoxTo: (a) => { log.push(['box', a]); return Promise.resolve(); },
      hideFaceTitles: () => { log.push(['hideTitles']); return Promise.resolve(); },
      showFaceTitles: (h, v) => { log.push(['titles', h, v]); return Promise.resolve(); },
    },
    rotation: { setTarget: (t) => log.push(['target', t.yaw, t.pitch]) },
    logo: {
      place: (r) => log.push(['place', r.width]),
      fadeTo: (a) => { log.push(['logo', a]); return Promise.resolve(); },
    },
    setTheme: (name, seconds) => { log.push(['theme', name, seconds]); return Promise.resolve(); },
  };
  return { ctx, log };
}

test('the finale flies the cubes to the dots as the page goes black, then fades in the lock-up and hides the cubes', async () => {
  const { ctx, log } = fakeContext();
  await finaleStep.enter(ctx);
  const names = log.map((l) => l[0]);
  assert.ok(names.includes('place'), 'the lock-up is placed to match the dots');
  assert.deepEqual(log.find((l) => l[0] === 'theme').slice(1, 2), ['dark']);
  const fly = log.find((l) => l[0] === 'fly');
  assert.equal(fly[1], cube.cubes.length);
  assert.equal(fly[2].morph, 1);
  assert.equal(fly[2].glow, 1);
  assert.equal(ctx.targets.filter((t) => t && t.scale > 0).length, 26);
  assert.ok(ctx.targets.filter(Boolean).every((t) => Math.abs(t.z) < 1e-9), 'in the plane of the middle of the cube');
  const fade = log.find((l) => l[0] === 'fade');
  assert.equal(fade[1], cube.cubes.length - 26, 'the cubes not needed fade away');
  assert.ok(names.indexOf('fade') < names.indexOf('fly'), 'before the others fly');
  assert.deepEqual(log.find((l) => l[0] === 'view'), ['view', 'face'], 'the camera squares up as the cubes fly');
  assert.deepEqual(log.find((l) => l[0] === 'logo'), ['logo', 1]);
  assert.ok(names.indexOf('logo') > names.indexOf('fly'), 'the lock-up comes after the flight');
  assert.deepEqual(log.at(-1), ['visible', false], 'the cubes are hidden once the lock-up has taken over');
});

test('Back from the finale shows the cubes again, hides the lock-up and returns to the conclusion view', async () => {
  const { ctx, log } = fakeContext();
  await finaleStep.reverse(ctx);
  assert.deepEqual(log[0], ['visible', true]);
  assert.deepEqual(log.find((l) => l[0] === 'logo'), ['logo', 0]);
  assert.deepEqual(log.find((l) => l[0] === 'theme').slice(1, 2), ['light']);
  const fly = log.find((l) => l[0] === 'fly');
  assert.equal(fly[2].morph, 0);
  assert.equal(fly[2].glow, 0);
  assert.deepEqual(log.find((l) => l[0] === 'target'), ['target', CUBE.yaw, CUBE.tilt]);
  assert.deepEqual(log.find((l) => l[0] === 'view'), ['view', 'cube']);
  assert.equal(log.some((l) => l[0] === 'titles'), false, 'no axis titles in the conclusion');
  assert.ok(ctx.targets.every((t) => t.scale === 1), 'every cube returns at full size');
});
