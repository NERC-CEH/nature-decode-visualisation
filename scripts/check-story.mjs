// Check that the data files support the narration, and that each data-cube.js matches its .json.
// Usage: node scripts/check-story.mjs [path/to/data-cube.json]   (no path: every size from 5 to 12)

import { existsSync, readFileSync } from 'node:fs';
import { checkStory } from './lib/story-checks.mjs';
import { SIZES, dataPath } from './lib/data-files.mjs';

const paths = process.argv[2] ? [process.argv[2]] : SIZES.map((size) => dataPath(size));
let failed = 0;

for (const jsonPath of paths) {
  if (!existsSync(jsonPath)) {
    console.log(`  FAIL ${jsonPath} is missing. Run: npm run data:all`);
    failed++;
    continue;
  }
  const jsPath = jsonPath.replace(/\.json$/, '.js');
  const text = readFileSync(jsonPath, 'utf8');
  const cube = JSON.parse(text);

  const results = checkStory(cube);
  const bad = results.filter((r) => !r.pass);
  const quiet = paths.length > 1 && bad.length === 0;
  console.log(`Story checks for ${jsonPath} (size ${cube.meta.size}, seed ${cube.meta.seed}): ${bad.length ? 'FAILED' : 'all pass'}`);
  for (const r of quiet ? [] : results) console.log(`  ${r.pass ? 'ok  ' : 'FAIL'} ${r.name}: ${r.detail}`);
  failed += bad.length;

  const expected = `window.DATA_CUBE = ${text.trim()};\n`;
  if (!existsSync(jsPath) || readFileSync(jsPath, 'utf8') !== expected) {
    console.log(`  FAIL ${jsPath} does not match ${jsonPath}. Run: npm run data:all`);
    failed++;
  } else if (!quiet) {
    console.log(`  ok   ${jsPath} matches ${jsonPath}`);
  }
}

if (failed) {
  console.error(`${failed} check${failed === 1 ? '' : 's'} failed.`);
  process.exit(1);
}
