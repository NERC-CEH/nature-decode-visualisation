// Simulated biodiversity data cube (species x time x location) of 0/1 observations.
// Adapted from create_species_layer.R (Tom August, March 2022), which produced the laser-cut layers.
//
// Cube layout: data[species][time][location] = 1 (observed) or 0.
// Locations are grouped into habitat types. Specialist species occur in one habitat type
// and decline to zero over the final third of the time axis; all other species are detected
// more often as recording effort rises.

import { mulberry32 } from '../../src/random.js';

export { mulberry32 };

export const DEFAULTS = {
  size: 9, // length of every axis
  habitatTypes: 3, // habitat types the location axis is grouped into
  specialists: 2, // declining habitat-specialist species
  detectionRange: [0.15, 1.0], // detection over time (rising recording effort)
  rarityRange: [0.6, 1], // variation in how readily a species is recorded
  occupancyCutoff: 0.3, // habitat preferences below this become 0 (species absent there)
  specialistRarity: 0.9,
  specialistPreference: 0.8,
};

// Equivalent of R's seq(from, to, length.out)
function seq(from, to, length) {
  if (length <= 1) return [from];
  return Array.from({ length }, (_, i) => from + ((to - from) * i) / (length - 1));
}

export function generateCube(options, seed) {
  const p = { ...DEFAULTS, ...options };
  const { size, habitatTypes, specialists } = p;
  if (!Number.isInteger(size) || size < 1) throw new Error('size must be a positive integer');
  if (!Number.isInteger(habitatTypes) || habitatTypes < 1 || habitatTypes > size) {
    throw new Error('habitatTypes must be an integer between 1 and size');
  }
  if (!Number.isInteger(specialists) || specialists < 0 || specialists > size) {
    throw new Error('specialists must be an integer between 0 and size');
  }

  const random = mulberry32(seed);
  const uniform = (min, max) => min + random() * (max - min);

  // Habitat bands: contiguous groups of locations. floor(i * types / size) copes with
  // sizes that are not a multiple of the habitat count.
  const habitatOf = Array.from({ length: size }, (_, i) => Math.floor((i * habitatTypes) / size));
  const declineLength = size - Math.floor(size / 3);

  const species = [];
  const data = [];
  for (let s = 0; s < size; s++) {
    const specialist = s < specialists;
    let rarity;
    let timeDetection;
    let typePreference;

    if (specialist) {
      rarity = p.specialistRarity;
      timeDetection = [
        ...seq(p.detectionRange[1], 0, declineLength),
        ...Array(size - declineLength).fill(0),
      ];
      typePreference = [p.specialistPreference, ...Array(habitatTypes - 1).fill(0)];
    } else {
      rarity = uniform(p.rarityRange[0], p.rarityRange[1]);
      timeDetection = seq(p.detectionRange[0], p.detectionRange[1], size);
      typePreference = Array.from({ length: habitatTypes }, () => {
        const pref = random();
        return pref < p.occupancyCutoff ? 0 : pref;
      });
    }

    const locationPreference = habitatOf.map((t) => typePreference[t]);
    const layer = [];
    for (let t = 0; t < size; t++) {
      const row = [];
      for (let l = 0; l < size; l++) {
        const probability = timeDetection[t] * locationPreference[l] * rarity;
        row.push(probability > random() ? 1 : 0);
      }
      layer.push(row);
    }
    species.push({ id: s, specialist, rarity, timeDetection, locationPreference });
    data.push(layer);
  }

  return {
    meta: {
      version: 1,
      size,
      seed,
      axes: ['species', 'time', 'location'],
      habitatTypes,
      habitatOf,
      displayOrder: displayOrder(data, species),
      params: p,
      note: 'data[species][time][location]; 1 = observed, 0 = not observed',
    },
    species,
    data,
  };
}

// Display order of species along the vertical axis, bottom to top: widest-ranging species
// first, specialists last (at the top). Ties break on total records, then id.
export function displayOrder(data, species) {
  const stats = data.map((layer, s) => {
    const locations = new Set();
    let records = 0;
    for (const row of layer) {
      row.forEach((v, l) => {
        if (v) {
          locations.add(l);
          records += v;
        }
      });
    }
    return { s, locations: locations.size, records, specialist: species[s].specialist };
  });
  stats.sort((a, b) =>
    (a.specialist - b.specialist) || (b.locations - a.locations) || (b.records - a.records) || (a.s - b.s));
  return stats.map((x) => x.s);
}
