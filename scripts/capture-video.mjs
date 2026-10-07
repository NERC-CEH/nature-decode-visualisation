// Render the whole animation to a video, one frame at a time, so the result is perfectly smooth
// however slowly this machine renders.
//
// How: the page runs on a virtual clock (Playwright's page.clock). Time only moves when this
// script advances it, in exact 16 ms ticks, so tweens, timeouts, physics and rendering never see
// real time. The fading of the title and caption (which the browser runs on its own clock) is
// stepped by hand on the same virtual time. Screenshots are piped to ffmpeg. Nothing depends on how
// fast this machine renders.
//
// The story is played as a visitor would: Next when each step is ready, then a hold once everything on
// the step has appeared (title, tags, labels and caption).
//
// Usage: node scripts/capture-video.mjs [options]   (or: npm run video -- [options])
//   --size 9           cube size, 5 to 12 (the page's ?size=N, using the data files in data/)
//   --width 1920 --height 1080
//   --fps 62.5         video frame rate. The page ticks every 16 ms (62.5 per second), so the rate is
//                      rounded to 62.5 divided by a whole number: 31.25, 20.8, 15.6, 12.5, 10.4 ...
//                      Lower rates capture fewer images, so a test run is quicker. The animation
//                      still advances in its normal 16 ms ticks (physics and tweens are unchanged),
//                      but only every Nth tick is photographed, and the video plays at real speed.
//   --hold 3           seconds to hold on each step once everything on it has appeared
//   --sweep / --no-sweep   move the cursor through the cubes during Data, Categorise and Sort (on)
//   --data file.json   use this data file instead of the ones in data/ (its .js sits alongside)
//   --max-seconds 0    stop after this many seconds of video (0 = the whole story), for test runs
//   --out video/data-cube.mp4
//   --browser path     a Chromium-based browser to use (default: PLAYWRIGHT_BROWSERS_PATH, then the
//                      installed Edge or Chrome)
//
// Needs: `npm install` (playwright-core), a Chromium-based browser, and ffmpeg on the PATH. If ffmpeg is
// missing the frames are saved as numbered PNGs in a folder beside the output, with the command to turn
// them into a video.
//
// Capturing is slow on purpose: allow roughly 1 to 3 s a frame without a GPU, so a 60 s video at the full
// 62.5 fps (3,750 frames) can take an hour or more. For test runs use a lower --fps, a smaller --width and
// --height, or --max-seconds.

import { spawn, spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { dirname, extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { chromium } from 'playwright-core';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { values: args } = parseArgs({
  options: {
    size: { type: 'string', default: '9' },
    width: { type: 'string', default: '1920' },
    height: { type: 'string', default: '1080' },
    fps: { type: 'string', default: '62.5' },
    hold: { type: 'string', default: '3' },
    sweep: { type: 'boolean', default: true },
    data: { type: 'string' },
    'max-seconds': { type: 'string', default: '0' },
    out: { type: 'string', default: 'video/data-cube.mp4' },
    browser: { type: 'string' },
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

// 1. A tiny static server for the repo. With --data, that file is served for every data file the page asks for.
const customData = args.data ? resolve(args.data).replace(/\.json$/, '.js') : null;
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml' };
const server = createServer((req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const asksForData = /^\/data\/data-cube(-\d+)?\.js$/.test(path);
  const file = customData && asksForData ? customData : join(root, normalize(path === '/' ? '/index.html' : path));
  if (!file.startsWith(root) && file !== customData) { res.writeHead(403).end(); return; }
  if (!existsSync(file)) { res.writeHead(404).end(); return; }
  res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' }).end(readFileSync(file));
});
await new Promise((ok) => server.listen(0, '127.0.0.1', ok));
const url = `http://127.0.0.1:${server.address().port}/?debug&size=${Number(args.size)}`;

// 2. The browser, on a virtual clock.
function findBrowser() {
  if (args.browser) return { executablePath: resolve(args.browser) };
  const dir = process.env.PLAYWRIGHT_BROWSERS_PATH;
  if (dir && existsSync(dir)) {
    const direct = join(dir, 'chromium');
    if (existsSync(direct)) return { executablePath: direct };
    const found = readdirSync(dir).find((d) => d.startsWith('chromium-'));
    if (found) return { executablePath: join(dir, found, process.platform === 'win32' ? 'chrome-win/chrome.exe' : 'chrome-linux/chrome') };
  }
  return { channel: process.platform === 'win32' ? 'msedge' : 'chrome' }; // the browser installed on this machine
}
const browser = await chromium.launch({
  ...findBrowser(),
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox'],
});
const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
page.on('pageerror', (e) => console.error('page error:', e.message));

// The browser runs Web Animations and CSS transitions (the fading of the title and caption) on its own
// clock, which the virtual clock does not reach. So each frame they are paused and set by hand to the
// virtual time since they began, and finished when their time is up.
await page.addInitScript(() => {
  globalThis.__stepAnimations = () => {
    const now = performance.now();
    for (const animation of document.getAnimations()) {
      if (animation.__start === undefined) {
        animation.pause();
        animation.__start = now;
      }
      const end = animation.effect?.getComputedTiming().endTime ?? 0;
      const elapsed = now - animation.__start;
      if (elapsed >= end) animation.finish();
      else animation.currentTime = elapsed;
    }
  };
});
await page.clock.install({ time: 0 });
await page.goto(url);
await page.waitForFunction(() => globalThis.__dataCube);
// install() leaves the clock running with real time. Pause it, so time moves only in frame().
await page.clock.pauseAt((await page.evaluate(() => Date.now())) + 1000);

// 3. ffmpeg reads PNG frames from stdin. Without ffmpeg the frames are saved as PNG files instead.
const out = resolve(root, args.out);
mkdirSync(dirname(out), { recursive: true });
const haveFfmpeg = spawnSync('ffmpeg', ['-version'], { stdio: 'ignore' }).status === 0;
const framesDir = out.replace(/\.[^.]+$/, '') + '-frames';
let ffmpeg = null;
let ffmpegDone = Promise.resolve();
if (haveFfmpeg) {
  ffmpeg = spawn('ffmpeg', [
    '-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', fps.toFixed(4), '-i', '-',
    '-vf', 'format=yuv420p', '-c:v', 'libx264', '-crf', '14', '-preset', 'slow', '-movflags', '+faststart', out,
  ], { stdio: ['pipe', 'inherit', 'inherit'] });
  ffmpegDone = new Promise((ok, fail) => { ffmpeg.on('close', (c) => (c === 0 ? ok() : fail(new Error(`ffmpeg exited ${c}`)))); });
} else {
  mkdirSync(framesDir, { recursive: true });
  console.warn(`ffmpeg was not found, so the frames are saved as PNG files in ${framesDir}`);
}

let frames = 0;
const timing = { advance: 0, shot: 0 };
const started = Date.now();
async function frame() {
  const t0 = Date.now();
  await page.clock.runFor(rafMs);
  await page.evaluate(() => globalThis.__stepAnimations());
  const t1 = Date.now();
  const png = await page.screenshot({ type: 'png', timeout: 0 });
  timing.advance += t1 - t0;
  timing.shot += Date.now() - t1;
  if (ffmpeg) {
    if (!ffmpeg.stdin.write(png)) await new Promise((ok) => ffmpeg.stdin.once('drain', ok));
  } else {
    writeFileSync(join(framesDir, `frame-${String(frames).padStart(6, '0')}.png`), png);
  }
  frames += 1;
  if (frames % 60 === 0) {
    const perFrame = (Date.now() - started) / frames / 1000;
    console.log(`frame ${frames} (${(frames * rafMs / 1000).toFixed(1)} s of video, ${perFrame.toFixed(2)} s/frame: ${(timing.advance / frames).toFixed(0)} ms simulate, ${(timing.shot / frames).toFixed(0)} ms screenshot)`);
  }
  return maxFrames > 0 && frames >= maxFrames;
}

// The cursor sweeps back and forth over the floor, along the same path as kiosk mode's virtual cursor.
async function sweepCursor() {
  const t = (frames * rafMs) / 1000; // seconds of animation so far
  const spot = await page.evaluate((time) => {
    const { arena, ctx } = globalThis.__dataCube;
    return ctx.scene.toStage({
      x: Math.sin(time * 0.55) * 0.38 * arena.width,
      y: 0.5,
      z: Math.sin(time * 0.55 * 1.5 + 1) * 0.3 * arena.depth,
    });
  }, t);
  if (spot) await page.mouse.move(spot.x, spot.y);
}

// 4. Play the story: Next whenever a step is ready, then hold once everything on the step has appeared.
const state = () => page.evaluate(() => {
  const s = globalThis.__dataCube.controller.state;
  const shown = (id) => Number(getComputedStyle(document.getElementById(id)).opacity) > 0.99;
  return {
    id: s.step.id,
    busy: s.busy,
    last: s.canRestart,
    repel: Boolean(s.step.repel),
    // the title and the caption have both faded in, so the tags and labels before the caption are done
    complete: shown('caption-title') && shown('caption-text'),
  };
});
let stop = false;
let s = await state();
for (let i = 0; i < holdFrames && !stop; i++) stop = await frame(); // the opening screen, held
while (!stop && !s.last) {
  await page.evaluate(() => { globalThis.__dataCube.controller.next(); });
  s = await state();
  console.log('step ->', s.id);
  let guard = 0;
  do {
    if (args.sweep && s.repel) await sweepCursor();
    stop = await frame();
    s = await state();
    if (++guard > 240 * fps) throw new Error(`Step ${s.id} never finished appearing`);
  } while ((s.busy || !s.complete) && !stop);
  for (let i = 0; i < holdFrames && !stop; i++) {
    if (args.sweep && s.repel) await sweepCursor();
    stop = await frame();
  }
}

if (ffmpeg) {
  ffmpeg.stdin.end();
  await ffmpegDone;
}
await browser.close();
server.close();
if (ffmpeg) {
  console.log(`Wrote ${out}: ${frames} frames, ${(frames * rafMs / 1000).toFixed(1)} s of animation.`);
} else {
  console.log(`Wrote ${frames} frames to ${framesDir}. Install ffmpeg, then make the video with:\n  ffmpeg -framerate ${fps.toFixed(4)} -i "${join(framesDir, 'frame-%06d.png')}" -vf format=yuv420p -c:v libx264 -crf 14 "${out}"`);
}
