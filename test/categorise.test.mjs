import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { arenaSize } from '../src/arena.js';
import { createPhysics } from '../src/physics.js';
import { createCubeField, START_COLOUR } from '../src/cubes.js';
import { categoriseStep } from '../src/steps/categorise.js';
import { PALETTE, speciesColour } from '../src/config.js';
import { loadCube } from '../src/data.js';
import { readFileSync } from 'node:fs';

const cube = loadCube(JSON.parse(readFileSync('data/data-cube.json', 'utf8')));

function makeField() {
  const arena = arenaSize(cube.cubes.length);
  const physics = createPhysics();
  physics.setBounds(arena.width, arena.depth);
  const field = createCubeField({ scene: new THREE.Scene(), physics, cubes: cube.cubes, arena });
  return { field, ctx: { cube, field } };
}
const colourOf = (field, i) => {
  const c = new THREE.Color();
  field.mesh.getColorAt(i, c);
  return `#${c.getHexString()}`;
};
const hex = (value) => value.toLowerCase();

test('the cubes start near-black, so they have not yet been categorised', () => {
  const { field } = makeField();
  for (let i = 0; i < cube.cubes.length; i++) assert.equal(colourOf(field, i), START_COLOUR);
});

test('every cube ends up the colour of its species', async () => {
  const { field, ctx } = makeField();
  await field.recolour((i) => speciesColour(cube.cubes[i].species), 0.1);
  cube.cubes.forEach((c, i) => assert.equal(colourOf(field, i), hex(PALETTE[c.species])));
});

test('cubes change at different moments, not all at once', async () => {
  const { field } = makeField();
  const target = (i) => speciesColour(cube.cubes[i].species);
  const done = field.recolour(target, 0.3);
  await new Promise((r) => setTimeout(r, 140)); // about halfway
  const changed = cube.cubes.filter((_, i) => colourOf(field, i) !== START_COLOUR).length;
  assert.ok(changed > cube.cubes.length * 0.15 && changed < cube.cubes.length * 0.95, `${changed} of ${cube.cubes.length} had started changing`);
  const finished = cube.cubes.filter((c, i) => colourOf(field, i) === hex(PALETTE[c.species])).length;
  assert.ok(finished < cube.cubes.length, 'and not all had finished');
  await done;
});

test('the order of the change is random but the same every time', async () => {
  const order = async () => {
    const { field } = makeField();
    const done = field.recolour((i) => speciesColour(cube.cubes[i].species), 0.2);
    await new Promise((r) => setTimeout(r, 70));
    const snapshot = cube.cubes.map((_, i) => colourOf(field, i) !== START_COLOUR);
    await done;
    return snapshot;
  };
  const a = await order();
  assert.ok(a.some(Boolean) && !a.every(Boolean));
  // the same cubes are changing at the same point in both runs, apart from timing jitter (two unrelated random orders would agree about half the time)
  const b = await order();
  const agree = a.filter((v, i) => v === b[i]).length / a.length;
  assert.ok(agree > 0.7, `agreement ${agree.toFixed(2)}`);
});

test('the categorise step colours the cubes, and Back drains the colour away', async () => {
  const { field, ctx } = makeField();
  const original = { ...categoriseStep };
  // run the real step with short times by calling the field the same way it does
  await categoriseStep.enter({ ...ctx, field: { recolour: (fn) => field.recolour(fn, 0.05) } });
  assert.notEqual(colourOf(field, 0), START_COLOUR);
  assert.ok(new Set(cube.cubes.map((_, i) => colourOf(field, i))).size >= 6, 'many different species colours');
  await categoriseStep.reverse({ ...ctx, field: { recolour: (fn) => field.recolour(fn, 0.05) } });
  for (let i = 0; i < cube.cubes.length; i++) assert.equal(colourOf(field, i), START_COLOUR);
  assert.ok(original.enter && original.reverse);
});

test('a new recolour replaces one in progress', async () => {
  const { field } = makeField();
  field.recolour(() => '#ff0000', 5, 0.5);
  await new Promise((r) => setTimeout(r, 30));
  await field.recolour(() => '#0000ff', 0.05);
  for (let i = 0; i < cube.cubes.length; i++) assert.equal(colourOf(field, i), '#0000ff');
});

test('capture records the colours so a step can be returned to', async () => {
  const { field } = makeField();
  const drop = field.drop(0.1, 0, 0);
  field.tick(0.5);
  await drop;
  await field.recolour((i) => speciesColour(cube.cubes[i].species), 0.05);
  const snapshot = field.capture();
  assert.equal(snapshot[0].colour, hex(PALETTE[cube.cubes[0].species]));
});

