// Bundle src/ into dist/app.js, a single classic script, so index.html works when opened
// straight from disk (browsers block ES-module imports and fetch under file://).
//
// Usage: node scripts/build.mjs [--watch | --verify]
//   --watch   rebuild when a file in src/ changes
//   --verify  build to memory and fail if dist/app.js differs (used by `npm run check` and CI)
//
// Uses esbuild-wasm, which needs no native binary.

import { existsSync, mkdirSync, readFileSync, watch, writeFileSync } from 'node:fs';
import * as esbuild from 'esbuild-wasm';

const OUT = 'dist/app.js';
const BANNER = '/* Our planet. Decoded. Built from src/ by scripts/build.mjs. Do not edit. */';

async function bundle() {
  const result = await esbuild.build({
    entryPoints: ['src/main.js'],
    bundle: true,
    format: 'iife',
    target: 'es2020',
    minify: true,
    legalComments: 'none',
    banner: { js: BANNER },
    write: false,
    logLevel: 'warning',
  });
  return result.outputFiles[0].text;
}

async function build() {
  const text = await bundle();
  mkdirSync('dist', { recursive: true });
  writeFileSync(OUT, text);
  console.log(`Wrote ${OUT} (${(text.length / 1024).toFixed(0)} KB)`);
}

const mode = process.argv[2];
try {
  if (mode === '--verify') {
    const text = await bundle();
    if (!existsSync(OUT) || readFileSync(OUT, 'utf8') !== text) {
      console.error(`${OUT} is stale or missing. Run: npm run build`);
      process.exitCode = 1;
    } else {
      console.log(`${OUT} is up to date.`);
    }
  } else if (mode === '--watch') {
    await build();
    let timer;
    watch('src', { recursive: true }, () => {
      clearTimeout(timer);
      timer = setTimeout(() => build().catch((e) => console.error(e.message)), 100);
    });
    console.log('Watching src/ for changes. Press Ctrl+C to stop.');
    await new Promise(() => {});
  } else {
    await build();
  }
} finally {
  if (mode !== '--watch') await esbuild.stop();
}
