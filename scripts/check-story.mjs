// Check that data/data-cube.json supports the narration, and that data/data-cube.js matches it.
// Usage: node scripts/check-story.mjs [path/to/data-cube.json]

import { readFileSync } from 'node:fs';
import { checkStory } from './lib/story-checks.mjs';

const jsonPath = process.argv[2] ?? 'data/data-cube.json';
const jsPath = jsonPath.replace(/\.json$/, '.js');
const text = readFileSync(jsonPath, 'utf8');
const cube = JSON.parse(text);

let failed = 0;
const results = checkStory(cube);
console.log(`Story checks for ${jsonPath} (seed ${cube.meta.seed}):`);
for (const r of results) {
  console.log(`  ${r.pass ? 'ok  ' : 'FAIL'} ${r.name}: ${r.detail}`);
  if (!r.pass) failed++;
}

const expected = `window.DATA_CUBE = ${text.trim()};\n`;
if (readFileSync(jsPath, 'utf8') !== expected) {
  console.log(`  FAIL ${jsPath} does not match ${jsonPath}. Run: npm run data`);
  failed++;
} else {
  console.log(`  ok   ${jsPath} matches ${jsonPath}`);
}

if (failed) {
  console.error(`${failed} check${failed === 1 ? '' : 's'} failed.`);
  process.exit(1);
}
