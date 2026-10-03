// Reads and validates the data cube (data/data-cube.js sets window.DATA_CUBE).
// data[species][time][location] = 0 | 1. See technical-spec 5.

const fail = (message) => { throw new Error(`Data cube: ${message}`); };

export function loadCube(raw) {
  if (!raw || typeof raw !== 'object') fail('no data found. Run "npm run data" and reload the page.');
  const { meta, species, data } = raw;
  if (!meta || !Array.isArray(species) || !Array.isArray(data)) fail('missing meta, species or data.');
  const n = meta.size;
  if (!Number.isInteger(n) || n < 1) fail('meta.size must be a positive integer.');
  if (species.length !== n) fail(`expected ${n} species, found ${species.length}.`);
  if (data.length !== n) fail(`expected ${n} species layers, found ${data.length}.`);

  const cubes = [];
  data.forEach((layer, s) => {
    if (layer.length !== n) fail(`species ${s} has ${layer.length} time steps, expected ${n}.`);
    layer.forEach((row, t) => {
      if (row.length !== n) fail(`species ${s}, time ${t} has ${row.length} locations, expected ${n}.`);
      row.forEach((v, l) => {
        if (v !== 0 && v !== 1) fail(`value at species ${s}, time ${t}, location ${l} is ${v}, expected 0 or 1.`);
        if (v === 1) cubes.push({ id: cubes.length, species: s, time: t, location: l });
      });
    });
  });

  const order = meta.displayOrder;
  if (!Array.isArray(order) || order.length !== n || new Set(order).size !== n ||
      order.some((s) => !Number.isInteger(s) || s < 0 || s >= n)) {
    fail('meta.displayOrder must list every species once.');
  }
  if (cubes.length === 0) fail('the cube has no records.');

  return {
    size: n,
    seed: meta.seed,
    species,
    displayOrder: order,
    habitatOf: meta.habitatOf,
    cubes,
  };
}

export function readGlobalCube() {
  return loadCube(globalThis.DATA_CUBE);
}
