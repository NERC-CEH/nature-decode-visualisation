import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { generateCube } from '../scripts/lib/cube-model.mjs';
import { checkStory, spearman } from '../scripts/lib/story-checks.mjs';

test('the same seed gives the same cube', () => {
  assert.deepEqual(generateCube({}, 7), generateCube({}, 7));
  assert.notDeepEqual(generateCube({}, 7).data, generateCube({}, 8).data);
});

test('the cube is size x size x size and binary, for every supported size', () => {
  for (let size = 5; size <= 12; size++) {
    const cube = generateCube({ size }, 1);
    assert.equal(cube.data.length, size);
    assert.equal(cube.species.length, size);
    for (const layer of cube.data) {
      assert.equal(layer.length, size);
      for (const row of layer) {
        assert.equal(row.length, size);
        assert.ok(row.every((v) => v === 0 || v === 1));
      }
    }
    assert.deepEqual([...cube.meta.displayOrder].sort((a, b) => a - b), [...Array(size).keys()]);
  }
});

test('specialists are last in the display order, so they sit at the top', () => {
  const cube = generateCube({ specialists: 2 }, 1);
  const order = cube.meta.displayOrder;
  assert.deepEqual(order.slice(-2).sort(), [0, 1]);
});

test('specialists never occur in the last third of time', () => {
  for (let seed = 1; seed <= 20; seed++) {
    const cube = generateCube({}, seed);
    for (const sp of cube.species.filter((s) => s.specialist)) {
      for (let t = 6; t < 9; t++) assert.equal(cube.data[sp.id][t].reduce((a, b) => a + b, 0), 0);
    }
  }
});

test('invalid options are rejected', () => {
  assert.throws(() => generateCube({ size: 0 }, 1));
  assert.throws(() => generateCube({ habitatTypes: 20 }, 1));
  assert.throws(() => generateCube({ specialists: 20 }, 1));
});

test('spearman handles ties and direction', () => {
  assert.equal(spearman([1, 2, 3, 4], [10, 20, 30, 40]), 1);
  assert.equal(spearman([1, 2, 3, 4], [40, 30, 20, 10]), -1);
  assert.equal(spearman([1, 2, 3], [5, 5, 5]), 0);
});

test('the story checks fail on data that does not tell the story', () => {
  const cube = generateCube({}, 1);
  const flat = structuredClone(cube);
  flat.data = flat.data.map((layer) => layer.map((row) => row.map(() => 0)));
  assert.ok(checkStory(flat).some((r) => !r.pass));

  // Records fall over time instead of rising
  const falling = structuredClone(cube);
  falling.data = falling.data.map((layer) => [...layer].reverse());
  assert.ok(checkStory(falling).find((r) => r.name === 'records rise over time').pass === false);
});

test('the committed data cube passes the story checks and its script file matches', () => {
  const text = readFileSync('data/data-cube.json', 'utf8');
  const results = checkStory(JSON.parse(text));
  assert.deepEqual(results.filter((r) => !r.pass), []);
  assert.equal(readFileSync('data/data-cube.js', 'utf8'), `window.DATA_CUBE = ${text.trim()};\n`);
});
