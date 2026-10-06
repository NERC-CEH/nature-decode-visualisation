// Render the whole animation to a video, one frame at a time, so the result is perfectly smooth
// however slowly this machine renders.
//
// How: the page runs on a virtual clock (Playwright's page.clock). Time only moves when this
// script advances it, in exact 16 ms ticks, so tweens, timeouts, physics and rendering never see
// real time. Screenshots are piped to ffmpeg. Nothing depends on how fast this machine renders.
//
// Usage: node scripts/capture-video.mjs [options]
//   --size 20          cube size to generate (5 to 12 is the supported range; larger runs, with a
//                      colour-palette warning). The data is generated in a temp folder and
//                      served in place of data/data-cube.js, so the repo's data is untouched.
//   --width 1920 --height 1080
//   --fps 62.5         video frame rate. The page ticks every 16 ms (62.5 per second), so the rate is
//                      rounded to 62.5 divided by a whole number: 31.25, 20.8, 15.6, 12.5, 10.4 ...
//                      Lower rates capture fewer images, so a test run is quicker. The animation
//                      still advances in its normal 16 ms ticks (physics and tweens are unchanged),
//                      but only every Nth tick is photographed, and the video plays at real speed.
//   --hold 3           seconds to dwell on each step once it is ready
//   --sweep            move a virtual cursor through the cubes during Data, Categorise and Sort
//   --data file.json   use this data file instead of generating one (its .js sits alongside)
//   --max-seconds 0    stop after this many seconds of video (0 = the whole story), for test runs
//   --out video/data-cube.mp4
//
// Needs: ffmpeg on the PATH, Chromium (PLAYWRIGHT_BROWSERS_PATH or a system install), and
// `npm install` (playwright-core). Capturing is slow on purpose: allow roughly 1 to 3 s a frame
// without a GPU, so a 60 s video at the full 62.5 fps (3,750 frames) can take an hour or more. For
// test runs use a lower --fps, a smaller --width and --height, or --max-seconds.

import { spawn, spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync } from 'node:fs';
import { createServer } from 'node:http';
import { tmpdir } from 'node:os';
import { dirname, extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { chromium } from 'playwright-core';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { values: args } = parseArgs({
  options: {
    size: { type: 'string', default: '20' },
    width: { type: 'string', default: '1920' },
    height: { type: 'string', default: '1080' },
    fps: { type: 'string', default: '62.5' },
    hold: { type: 'string', default: '3' },
    sweep: { type: 'boolean', default: true },
    data: { type: 'string' },
    'max-seconds': { type: 'string', default: '0' },
    out: { type: 'string', default: 'video/data-cube.mp4' },
  },
  allowNegative: true,
});

const width = Number(args.width);
const height = Number(args.height);
// Playwright's fake requestAnimationFrame fires every 16 ms (62.5 ticks a second). A captured
// frame covers `step` whole ticks, so the video frame rate is 62.5 / step. For 60 fps playback
// of a full-rate capture, re-encode with `-r 60`.
const tickMs = 16;
const step = Math.max(1, Math.round(1000 / tickMs / Number(args.fps)));
const rafMs = tickMs * step; // animation time covered by one captured frame
const fps = 1000 / rafMs;
const holdFrames = Math.round(Number(args.hold) * fps);
const maxFrames = Math.round(Number(args['max-seconds']) * fps);
console.log(`Capturing every ${step === 1 ? 'tick' : `${step}th tick`}: ${fps.toFixed(2)} fps video.`);

// 1. The data: generate a (big) cube into a temp folder, or use the one supplied.
let dataJs;
if (args.data) {
  dataJs = resolve(args.data).replace(/\.json$/, '.js');
} else {
  const dir = mkdtempSync(join(tmpdir(), 'data-cube-'));
  const json = join(dir, 'data-cube.json');
  const gen = spawnSync('node', [join(root, 'scripts/generate-data-cube.mjs'), '--size', args.size, '--out', json], { stdio: 'inherit' });
  if (gen.status !== 0) throw new Error('Data generation failed');
  dataJs = join(dir, 'data-cube.js');
}

// 2. A tiny static server: the repo, with data/data-cube.js swapped for ours.
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png' };
const server = createServer((req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const file = path === '/data/data-cube.js' ? dataJs : join(root, normalize(path === '/' ? '/index.html' : path));
  if (!file.startsWith(root) && file !== dataJs) { res.writeHead(403).end(); return; }
  if (!existsSync(file)) { res.writeHead(404).end(); return; }
  res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' }).end(readFileSync(file));
});
await new Promise((ok) => server.listen(0, '127.0.0.1', ok));
const url = `http://127.0.0.1:${server.address().port}/?debug`;

// 3. The browser, on a virtual clock.
const browsersDir = process.env.PLAYWRIGHT_BROWSERS_PATH;
const executablePath = browsersDir && existsSync(join(browsersDir, 'chromium'))
  ? join(browsersDir, 'chromium')
  : browsersDir && readdirSync(browsersDir).find((d) => d.startsWith('chromium-'))
    ? join(browsersDir, readdirSync(browsersDir).find((d) => d.startsWith('chromium-')), 'chrome-linux', 'chrome')
    : undefined;
const browser = await chromium.launch({
  executablePath,
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox'],
});
const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
page.on('pageerror', (e) => console.error('page error:', e.message));
await page.clock.install({ time: 0 });
await page.goto(url);
await page.waitForFunction(() => globalThis.__dataCube);
// install() leaves the clock running with real time. Pause it, so time moves only in frame().
await page.clock.pauseAt((await page.evaluate(() => Date.now())) + 1000);

// 4. ffmpeg reads PNG frames from stdin.
const out = resolve(root, args.out);
mkdirSync(dirname(out), { recursive: true });
const ffmpeg = spawn('ffmpeg', [
  '-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', fps.toFixed(4), '-i', '-',
  '-vf', 'format=yuv420p', '-c:v', 'libx264', '-crf', '14', '-preset', 'slow', '-movflags', '+faststart', out,
], { stdio: ['pipe', 'inherit', 'inherit'] });
const ffmpegDone = new Promise((ok, fail) => { ffmpeg.on('close', (c) => (c === 0 ? ok() : fail(new Error(`ffmpeg exited ${c}`)))); });

let frames = 0;
const timing = { advance: 0, shot: 0 };
const started = Date.now();
async function frame() {
  const t0 = Date.now();
  await page.clock.runFor(rafMs);
  const t1 = Date.now();
  const png = await page.screenshot({ type: 'png', timeout: 0 });
  timing.advance += t1 - t0;
  timing.shot += Date.now() - t1;
  if (!ffmpeg.stdin.write(png)) await new Promise((ok) => ffmpeg.stdin.once('drain', ok));
  frames += 1;
  if (frames % 60 === 0) {
    const perFrame = (Date.now() - started) / frames / 1000;
    console.log(`frame ${frames} (${(frames * rafMs / 1000).toFixed(1)} s of video, ${perFrame.toFixed(2)} s/frame: ${(timing.advance / frames).toFixed(0)} ms simulate, ${(timing.shot / frames).toFixed(0)} ms screenshot)`);
  }
  return maxFrames > 0 && frames >= maxFrames;
}

// A virtual cursor that sweeps back and forth through the cubes on the floor.
async function sweepCursor() {
  const t = (frames * rafMs) / 1000; // seconds of animation so far
  const x = width * (0.5 + 0.38 * Math.sin(t * 0.69));
  const y = height * (0.52 + 0.12 * Math.sin(t * 1.33));
  await page.mouse.move(x, y);
}

// 5. Play the story: Next whenever a step is ready, dwell on each step.
const state = () => page.evaluate(() => {
  const s = globalThis.__dataCube.controller.state;
  return { index: s.index, busy: s.busy, id: s.step.id, last: s.canRestart, repel: Boolean(s.step.repel) };
});
let stop = false;
let s = await state();
for (let i = 0; i < holdFrames && !stop; i++) stop = await frame(); // the intro, held
while (!stop && !s.last) {
  await page.evaluate(() => { globalThis.__dataCube.controller.next(); });
  s = await state();
  console.log('step ->', s.id);
  let guard = 0;
  do {
    if (args.sweep && s.repel) await sweepCursor();
    stop = await frame();
    s = await state();
    if (++guard > 120 * fps) throw new Error(`Step ${s.id} never became ready`);
  } while (s.busy && !stop);
  for (let i = 0; i < holdFrames && !stop; i++) {
    if (args.sweep && s.repel) await sweepCursor();
    stop = await frame();
  }
}

ffmpeg.stdin.end();
await ffmpegDone;
await browser.close();
server.close();
console.log(`Wrote ${out}: ${frames} frames, ${(frames * rafMs / 1000).toFixed(1)} s of animation.`);
