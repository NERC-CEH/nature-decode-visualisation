// Generate the simulated data cube (species x time x location) and write it to data/.
// Adapted from create_species_layer.R (Tom August, March 2022).
//
// Usage: node scripts/generate-data-cube.mjs [options]
//   --size 9          length of every axis (the cube is always size x size x size; 5 to 12 supported)
//   --habitats 3      habitat types the location axis is grouped into
//   --specialists 2   declining habitat-specialist species
//   --seed auto       a number, or "auto" to try seeds 1, 2, 3... until the story checks pass
//   --max-tries 10000 limit for --seed auto
//   --out data/data-cube.json   data/data-cube.js is written alongside
//
// Data that fails the story checks (scripts/lib/story-checks.mjs) is never written.

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { parseArgs } from 'node:util';
import { generateCube } from './lib/cube-model.mjs';
import { checkStory } from './lib/story-checks.mjs';

const { values: args } = parseArgs({
  options: {
    size: { type: 'string', default: '9' },
    habitats: { type: 'string', default: '3' },
    specialists: { type: 'string', default: '2' },
    seed: { type: 'string', default: 'auto' },
    'max-tries': { type: 'string', default: '10000' },
    out: { type: 'string', default: 'data/data-cube.json' },
  },
});

const options = {
  size: Number(args.size),
  habitatTypes: Number(args.habitats),
  specialists: Number(args.specialists),
};
if (options.size < 5 || options.size > 12) {
  console.warn(`Warning: size ${options.size} is outside the supported range of 5 to 12.`);
}

let cube;
let results;
if (args.seed === 'auto') {
  const maxTries = Number(args['max-tries']);
  for (let seed = 1; seed <= maxTries; seed++) {
    const candidate = generateCube(options, seed);
    const r = checkStory(candidate);
    if (r.every((x) => x.pass)) {
      cube = candidate;
      results = r;
      console.log(`Seed ${seed} passed the story checks (${seed} iteration${seed === 1 ? '' : 's'}).`);
      break;
    }
  }
  if (!cube) {
    console.error(`No seed from 1 to ${maxTries} passed the story checks. Nothing written.`);
    process.exit(1);
  }
} else {
  cube = generateCube(options, Number(args.seed));
  results = checkStory(cube);
  const failed = results.filter((r) => !r.pass);
  if (failed.length) {
    console.error(`Seed ${args.seed} fails the story checks. Nothing written.`);
    for (const r of failed) console.error(`  FAIL ${r.name}: ${r.detail}`);
    process.exit(1);
  }
}

const json = JSON.stringify(cube);
const jsPath = args.out.replace(/\.json$/, '.js');
mkdirSync(dirname(args.out), { recursive: true });
writeFileSync(args.out, json);
writeFileSync(jsPath, `window.DATA_CUBE = ${json};\n`);

const total = cube.data.flat(2).reduce((a, b) => a + b, 0);
console.log(`Wrote ${args.out} and ${jsPath}: ${options.size}x${options.size}x${options.size} cube, ${total} records.`);
for (const r of results) console.log(`  ok   ${r.name}: ${r.detail}`);
