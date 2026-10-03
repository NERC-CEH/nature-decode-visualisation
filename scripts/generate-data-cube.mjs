// Generate a simulated biodiversity data cube (species x year x habitat) of 0/1 observations.
// Adapted from create_species_layer.R (Tom August, March 2022), which produced the laser-cut layers.
//
// Usage: node scripts/generate-data-cube.mjs [--size 9] [--habitats 3] [--rare 2] [--seed 42] [--out data/data-cube.json]
//
// The cube is always size x size x size. Output is indexed data[species][year][habitat].

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { parseArgs } from 'node:util';

const { values: args } = parseArgs({
  options: {
    size: { type: 'string', default: '9' }, // length of every axis
    habitats: { type: 'string', default: '3' }, // number of habitat types the habitat axis is grouped into
    rare: { type: 'string', default: '2' }, // number of declining habitat-specialist species
    seed: { type: 'string', default: '42' },
    out: { type: 'string', default: 'data/data-cube.json' },
  },
});

const size = Number(args.size);
const habitatTypes = Number(args.habitats);
const nRareSp = Number(args.rare);
const seed = Number(args.seed);

// Parameters carried over from the R script
const tempRange = [0.2, 0.9]; // variation in observations over time (increased recording effort)
const rarityRange = [0.5, 1]; // variation in rarity of simulated species
const occCutoff = 0.5; // habitat preferences below this become 0 (species does not occur there)
const specialistRarity = 0.9;
const specialistHabPref = 0.8;

if (!Number.isInteger(size) || size < 1) throw new Error('--size must be a positive integer');
if (!Number.isInteger(habitatTypes) || habitatTypes < 1 || habitatTypes > size) {
  throw new Error('--habitats must be an integer between 1 and --size');
}
if (!Number.isInteger(nRareSp) || nRareSp < 0 || nRareSp > size) {
  throw new Error('--rare must be an integer between 0 and --size');
}

// Seeded RNG (mulberry32) so the same seed always gives the same cube
function mulberry32(a) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const random = mulberry32(seed);
const uniform = (min, max) => min + random() * (max - min);

// Equivalent of R's seq(from, to, length.out)
function seq(from, to, length) {
  if (length <= 1) return [from];
  return Array.from({ length }, (_, i) => from + ((to - from) * i) / (length - 1));
}

// Habitat axis positions are grouped into habitat types, as rep(each = sheets/habs) did in R.
// Using floor(i * types / size) also copes with sizes that are not a multiple of the type count.
const habitatTypeOf = Array.from({ length: size }, (_, i) => Math.floor((i * habitatTypes) / size));

const species = [];
const data = [];

for (let s = 0; s < size; s++) {
  let rarity;
  let yearDetection;
  let typePref;
  const isRare = s < nRareSp;

  if (isRare) {
    // Habitat specialist: occurs in one habitat type and declines to zero over time
    rarity = specialistRarity;
    const declining = size - Math.floor(size / 3);
    yearDetection = [...seq(tempRange[1], 0, declining), ...Array(Math.floor(size / 3)).fill(0)];
    typePref = [specialistHabPref, ...Array(habitatTypes - 1).fill(0)];
  } else {
    // Ordinary species: detection rises over time with recording effort; random habitat preferences
    rarity = uniform(rarityRange[0], rarityRange[1]);
    yearDetection = seq(tempRange[0], tempRange[1], size);
    typePref = Array.from({ length: habitatTypes }, () => {
      const p = random();
      return p < occCutoff ? 0 : p;
    });
  }

  const habitatPreference = habitatTypeOf.map((t) => typePref[t]);
  const layer = [];
  for (let year = 0; year < size; year++) {
    const row = [];
    for (let habitat = 0; habitat < size; habitat++) {
      const prob = yearDetection[year] * habitatPreference[habitat] * rarity;
      row.push(prob > random() ? 1 : 0);
    }
    layer.push(row);
  }

  species.push({ id: s, rare: isRare, rarity, yearDetection, habitatPreference });
  data.push(layer);
}

const cube = {
  meta: {
    size,
    habitatTypes,
    habitatTypeOf,
    seed,
    axes: ['species', 'year', 'habitat'],
    note: 'data[species][year][habitat]; 1 = observed, 0 = not observed',
  },
  species,
  data,
};

mkdirSync(dirname(args.out), { recursive: true });
writeFileSync(args.out, JSON.stringify(cube));

const total = data.flat(2).reduce((a, b) => a + b, 0);
console.log(`Wrote ${args.out}: ${size}x${size}x${size} cube, ${total} observations of ${size ** 3} cells`);
