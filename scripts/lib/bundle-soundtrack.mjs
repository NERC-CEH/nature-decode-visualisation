// Bundles src/audio/soundtrack.js into one browser script (a global called `soundtrack`), for the video
// capture script to run in a page. Uses esbuild-wasm, as scripts/build.mjs does.

import { fileURLToPath } from 'node:url';
import * as esbuild from 'esbuild-wasm';

// esbuild-wasm's child process needs the same small fix as the main build (see entropy-fix.cjs).
const fix = fileURLToPath(new URL('./entropy-fix.cjs', import.meta.url));
process.env.NODE_OPTIONS = [process.env.NODE_OPTIONS, '--require', JSON.stringify(fix)].filter(Boolean).join(' ');

export async function bundleSoundtrack() {
  const entry = fileURLToPath(new URL('../../src/audio/soundtrack.js', import.meta.url));
  const result = await esbuild.build({
    entryPoints: [entry],
    bundle: true,
    format: 'iife',
    globalName: 'soundtrack',
    target: 'es2020',
    write: false,
    logLevel: 'warning',
  });
  await esbuild.stop();
  return result.outputFiles[0].text;
}
