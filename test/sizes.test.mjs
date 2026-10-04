import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { checkStory } from '../scripts/lib/story-checks.mjs';
import { SIZES, DEFAULT_SIZE, dataPath } from '../scripts/lib/data-files.mjs';
import { loadCube } from '../src/data.js';
import { arenaSize } from '../src/arena.js';
import { arrangement } from '../src/layout.js';
import { columnCounts } from '../src/steps/insights.js';

// data/load-data.js is a plain browser script (no module syntax), so run it as the browser would, with no
// document, and take the function it offers to the tests
const sandbox = { module: { exports: {} } };
vm.runInNewContext(readFileSync('data/load-data.js', 'utf8'), sandbox);
const { fileFor } = sandbox.module.exports;

// ---- the page picks the file from the address ---------------------------------------------------
test('with no size, or the default, the page loads the default data file', () => {
  assert.equal(fileFor(''), 'data/data-cube.js');
  assert.equal(fileFor('?'), 'data/data-cube.js');
  assert.equal(fileFor('?size=9'), 'data/data-cube.js');
  assert.equal(fileFor('?debug'), 'data/data-cube.js');
});

test('?size picks the file for that size, wherever it is in the address', () => {
  assert.equal(fileFor('?size=5'), 'data/data-cube-5.js');
  assert.equal(fileFor('?size=12'), 'data/data-cube-12.js');
  assert.equal(fileFor('?debug&size=7'), 'data/data-cube-7.js');
  assert.equal(fileFor('?size=10&debug'), 'data/data-cube-10.js');
});

test('a size that does not exist falls back to the default', () => {
  for (const search of ['?size=4', '?size=13', '?size=0', '?size=abc', '?size=', '?size=7x', '?resize=7', '?size=-8', '?size=9.5']) {
    assert.equal(fileFor(search), 'data/data-cube.js', search);
  }
});

test('every size the loader accepts has a data file, and the files are named as the loader expects', () => {
  for (const size of SIZES) {
    const expected = size === DEFAULT_SIZE ? 'data/data-cube.js' : `data/data-cube-${size}.js`;
    assert.equal(fileFor(`?size=${size}`), expected);
    assert.equal(dataPath(size).replace(/\.json$/, '.js'), expected);
  }
});

// ---- every size is a good cube --------------------------------------------------------------------
for (const size of SIZES) {
  test(`the ${size} x ${size} x ${size} cube tells the story, matches its script file and lays out`, () => {
    const text = readFileSync(dataPath(size), 'utf8');
    const raw = JSON.parse(text);
    assert.equal(raw.meta.size, size);
    assert.deepEqual(checkStory(raw).filter((r) => !r.pass), []);
    assert.equal(readFileSync(dataPath(size).replace(/\.json$/, '.js'), 'utf8'), `window.DATA_CUBE = ${text.trim()};\n`);

    const cube = loadCube(raw);
    assert.equal(cube.size, size);
    assert.ok(cube.cubes.length >= size * 4, `${cube.cubes.length} cubes`);
    assert.ok(arenaSize(cube.cubes.length).width > 0);

    // every cube has its own cell
    const cells = arrangement(cube.cubes, cube.displayOrder, cube.size);
    const keys = new Set(cells.map((c) => `${c.x.toFixed(3)},${c.y.toFixed(3)},${c.z.toFixed(3)}`));
    assert.equal(keys.size, cube.cubes.length);

    // the top view has a spread of counts to colour
    const { counts, max } = columnCounts(cube);
    assert.equal(counts.length, cube.cubes.length);
    assert.ok(max >= 2, `columns of up to ${max} cubes`);
  });
}
