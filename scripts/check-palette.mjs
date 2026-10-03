// Check the species palette for colour-blind safety and contrast on white.
// Perceptual difference is CIELAB dE76 between every pair of colours, under normal vision and
// simulated protanopia, deuteranopia and tritanopia (Machado et al. 2009, severity 1.0).
// Usage: node scripts/check-palette.mjs

import { PALETTE, CORE_PALETTE_SIZE } from '../src/config.js';

const MIN_DELTA_E = 10; // above about 10, colours read as different side by side
const MIN_CONTRAST = 1.3; // against white, for the core palette (cubes also have dark edges)

const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const toLinear = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const clamp = (x) => Math.min(1, Math.max(0, x));
const MATRICES = {
  normal: [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
  protanopia: [[0.152286, 1.052583, -0.204868], [0.114503, 0.786281, 0.099216], [-0.003882, -0.048116, 1.051998]],
  deuteranopia: [[0.367322, 0.860646, -0.227968], [0.280085, 0.672501, 0.047413], [-0.01182, 0.04294, 0.968881]],
  tritanopia: [[1.255528, -0.076749, -0.178779], [-0.078411, 0.930809, 0.147602], [0.004733, 0.691367, 0.3039]],
};

function lab(rgb) {
  const [r, g, b] = rgb;
  const x = (0.4124 * r + 0.3576 * g + 0.1805 * b) / 0.95047;
  const y = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  const z = (0.0193 * r + 0.1192 * g + 0.9505 * b) / 1.08883;
  const f = (t) => (t > 216 / 24389 ? Math.cbrt(t) : ((24389 / 27) * t + 16) / 116);
  return [116 * f(y) - 16, 500 * (f(x) - f(y)), 200 * (f(y) - f(z))];
}
const simulate = (colour, matrix) => {
  const l = hex(colour).map(toLinear);
  return lab(matrix.map((row) => clamp(row[0] * l[0] + row[1] * l[1] + row[2] * l[2])));
};
const distance = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
const luminance = (colour) => {
  const l = hex(colour).map(toLinear);
  return 0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2];
};
const contrastOnWhite = (colour) => 1.05 / (luminance(colour) + 0.05);

function worstPair(colours) {
  let worst = { delta: Infinity };
  for (const [vision, matrix] of Object.entries(MATRICES)) {
    const labs = colours.map((c) => simulate(c, matrix));
    for (let i = 0; i < colours.length; i++) {
      for (let j = i + 1; j < colours.length; j++) {
        const delta = distance(labs[i], labs[j]);
        if (delta < worst.delta) worst = { delta, vision, a: colours[i], b: colours[j] };
      }
    }
  }
  return worst;
}

let failed = 0;
const core = PALETTE.slice(0, CORE_PALETTE_SIZE);
const worstCore = worstPair(core);
const coreOk = worstCore.delta >= MIN_DELTA_E;
console.log(`${coreOk ? 'ok  ' : 'FAIL'} first ${CORE_PALETTE_SIZE} colours: smallest difference ${worstCore.delta.toFixed(1)} ` +
  `(${worstCore.a} and ${worstCore.b}, ${worstCore.vision}; want >= ${MIN_DELTA_E})`);
if (!coreOk) failed++;

for (const colour of core) {
  const contrast = contrastOnWhite(colour);
  const ok = contrast >= MIN_CONTRAST;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${colour} contrast on white ${contrast.toFixed(2)} (want >= ${MIN_CONTRAST})`);
  if (!ok) failed++;
}

const worstAll = worstPair(PALETTE);
console.log(`info all ${PALETTE.length} colours: smallest difference ${worstAll.delta.toFixed(1)} ` +
  `(${worstAll.a} and ${worstAll.b}, ${worstAll.vision}). Colours 10 to ${PALETTE.length} are for larger cubes only.`);

if (new Set(PALETTE).size !== PALETTE.length) {
  console.log('FAIL palette contains duplicate colours');
  failed++;
}
if (failed) {
  console.error(`${failed} palette check${failed === 1 ? '' : 's'} failed.`);
  process.exit(1);
}
