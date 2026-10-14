// A tag line and label that point at one cube, to help tell the story. Two seconds after the
// caption has finished fading in, a line grows out from the cube; when it is complete the label
// fades in. Both follow the cube if it moves, and fade out quickly when the step changes.

import { CALLOUT } from './config.js';
import { scaled } from './motion.js';

// Sizes in pixels are for the usual 16px root font; on a big screen the root font grows and they grow with it.
const scale = () => (typeof getComputedStyle === 'function' && typeof document !== 'undefined' ? parseFloat(getComputedStyle(document.documentElement).fontSize) / 16 : 1) || 1;
const MIN_LABEL = 110; // the narrowest a label is made to stay on the stage, in pixels
// Does the segment { x1, y1, x2, y2 } pass through the box { left, right, top, bottom }?
export function crosses(seg, box) {
  let t0 = 0;
  let t1 = 1;
  const dx = seg.x2 - seg.x1;
  const dy = seg.y2 - seg.y1;
  for (const [p, q] of [[-dx, seg.x1 - box.left], [dx, box.right - seg.x1], [-dy, seg.y1 - box.top], [dy, box.bottom - seg.y1]]) {
    if (p === 0) { if (q < 0) return false; continue; }
    const r = q / p;
    if (p < 0) { if (r > t1) return false; if (r > t0) t0 = r; } else { if (r < t0) return false; if (r < t1) t1 = r; }
  }
  return true;
}

const clamp01 = (x) => Math.max(0, Math.min(1, x));

// Pick the cube to point at: of the cubes in the main body of the pile (the nearest 70% to its
// middle on screen, so cubes that have scattered far away are ignored), the one furthest up and to
// the right. `points` are screen positions ({ x, y } or null), y down.
export function pickTopRight(points) {
  const live = points.map((p, index) => (p ? { ...p, index } : null)).filter(Boolean);
  if (!live.length) return -1;
  const median = (values) => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];
  const cx = median(live.map((p) => p.x));
  const cy = median(live.map((p) => p.y));
  const distance = (p) => Math.hypot(p.x - cx, p.y - cy);
  const ordered = [...live].sort((a, b) => distance(a) - distance(b));
  const limit = distance(ordered[Math.min(ordered.length - 1, Math.floor(live.length * 0.7))]);
  const core = live.filter((p) => distance(p) <= limit);
  return core.reduce((best, p) => (p.x - p.y > best.x - best.y ? p : best)).index;
}

// `layer` is a positioned element over the stage; `locate(index)` gives the screen position of cube
// `index` on the stage, or null; `pick()` chooses the cube index when the line starts; `obstacles()`
// gives the screen positions of all the cubes, so the label can be put where it covers none; `others()`
// gives the boxes of the labels already showing (and any other boxes to keep clear, such as axis titles),
// which a new label must not overlap, and `lines()` the segments of the lines already showing, which a new
// label or line must not cross.
export function createCallout({ layer, locate, pick, obstacles = () => [], others = () => [], lines = () => [], settings = CALLOUT }) {
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('class', 'callout-line');
  svg.setAttribute('aria-hidden', 'true');
  const line = document.createElementNS(NS, 'line');
  const dot = document.createElementNS(NS, 'circle');
  dot.setAttribute('r', '3');
  // A rectangle round a region (instead of a cube) is drawn as an outline that traces itself.
  const outline = document.createElementNS(NS, 'rect');
  outline.setAttribute('pathLength', '1');
  outline.setAttribute('class', 'callout-box');
  svg.append(outline, line, dot);
  const label = document.createElement('p');
  label.className = 'callout-label';
  layer.append(svg, label);

  let phase = 'idle'; // idle, waiting, boxing, growing, labelling, shown, leaving
  let region = null; // () => { left, top, right, bottom } on the stage, for a rectangle round a region
  let regionSide = 1;
  let boxProgress = 0;
  let showOutline = true;
  let clock = 0;
  let cube = -1;
  let growth = 0;
  let labelAmount = 0;
  let fade = 1;
  let pickNow = pick;
  let waitFor = settings.delay;
  let shown = null;
  let labelling = null;
  let way = { side: 1, angle: settings.angle, length: settings.length, labelWidth: settings.labelWidth };
  let segment = null; // the line as last drawn, for the other callouts to keep clear of

  function reset() {
    phase = 'idle';
    region = null;
    outline.style.display = 'none';
    svg.style.opacity = '0';
    label.style.opacity = '0';
    label.hidden = true;
  }
  reset();

  // Choose which way the line goes, how long it is and how wide the label is: the first that keeps the label
  // on the stage and clear of the cubes, the other labels and lines, and the axis titles, or failing that
  // the one covering least. The line leans away from the middle of the stage, a full width label is preferred
  // to a narrower one that wraps onto more lines, and shorter lines to longer ones.
  function choose(start) {
    const width = layer.clientWidth;
    const height = layer.clientHeight;
    const points = obstacles().filter(Boolean);
    const taken = others().filter(Boolean);
    const strokes = lines().filter(Boolean);
    const k = scale();
    const sides = start.x < width / 2 ? [-1, 1] : [1, -1];
    // how tall a label is at a given width, estimated from its font (about half an em a character)
    const style = getComputedStyle(label);
    const fontSize = parseFloat(style.fontSize) || 15;
    const lineHeight = parseFloat(style.lineHeight) || fontSize * 1.35;
    let best = null;
    for (const labelWidth of [settings.labelWidth * k, 190 * k, 140 * k]) {
      const rows = Math.max(1, Math.ceil((label.textContent.length * fontSize * 0.5) / labelWidth));
      const boxHeight = rows * lineHeight + 4;
      for (const length of [settings.length * k, (settings.length + 50) * k, (settings.length + 110) * k]) {
        for (const angle of [settings.angle, 55, 70, 25, -25, -45]) {
          for (const side of sides) {
            const rad = (angle * Math.PI) / 180;
            // the end of the line is moved in, as draw() does, if the label would run off the stage
            let endX = start.x + side * Math.cos(rad) * length;
            let endY = start.y - Math.sin(rad) * length;
            const room = side > 0 ? width - endX - 18 : endX - 18;
            if (room < labelWidth) endX += side * (room - labelWidth);
            if (height > boxHeight + 16) endY = Math.min(height - 8 - boxHeight / 2, Math.max(8 + boxHeight / 2, endY));
            const left = side > 0 ? endX + 10 : endX - 10 - labelWidth;
            const box = { left: left - 14, right: left + labelWidth + 14, top: endY - boxHeight / 2 - 14, bottom: endY + boxHeight / 2 + 14 };
            const seg = { x1: start.x, y1: start.y, x2: endX, y2: endY };
            const clash = taken.some((r) => !(box.right < r.left || box.left > r.right || box.bottom < r.top || box.top > r.bottom) || crosses(seg, r))
              || strokes.some((s) => crosses(s, box));
            const covered = points.filter((p) => p.x >= box.left && p.x <= box.right && p.y >= box.top && p.y <= box.bottom).length + (clash ? 1000 : 0);
            if (!best || covered < best.covered) best = { side, angle, length, labelWidth, covered };
            if (covered === 0) return best;
          }
        }
      }
    }
    return best ?? way;
  }

  function draw() {
    let start;
    const k = scale();
    let gap = settings.gap * k;
    if (region) {
      const r = region();
      if (!r) { svg.style.opacity = '0'; label.style.opacity = '0'; return; }
      outline.style.display = showOutline ? '' : 'none';
      outline.setAttribute('x', r.left);
      outline.setAttribute('y', r.top);
      outline.setAttribute('width', r.right - r.left);
      outline.setAttribute('height', r.bottom - r.top);
      outline.style.strokeDashoffset = String(1 - boxProgress);
      start = { x: regionSide > 0 ? r.right : r.left, y: r.top + (r.bottom - r.top) * (r.anchor ?? 0.5) };
      gap = 4 * k;
    } else {
      start = locate(cube);
    }
    if (!start) {
      svg.style.opacity = '0';
      label.style.opacity = '0';
      return;
    }
    const width = layer.clientWidth;
    const { side } = way;
    const angle = (way.angle * Math.PI) / 180;
    const dx = side * Math.cos(angle);
    const dy = -Math.sin(angle);
    const end = { x: start.x + dx * way.length, y: start.y + dy * way.length };
    // On a narrow stage the label is narrowed, and the line shortened, to keep it on the stage
    const room = side > 0 ? width - end.x - 18 : end.x - 18;
    const labelWidth = Math.min(way.labelWidth ?? settings.labelWidth * k, Math.max(MIN_LABEL * k, room));
    if (room < labelWidth) end.x += side * (room - labelWidth);
    // and kept inside the stage top and bottom too
    const half = (label.offsetHeight || 0) / 2;
    const height = layer.clientHeight;
    if (half && height > 2 * half + 16) end.y = Math.min(height - 8 - half, Math.max(8 + half, end.y));
    // the line starts `gap` from what it points at, and runs towards the end, however far that was moved
    const run = Math.hypot(end.x - start.x, end.y - start.y) || 1;
    const from = { x: start.x + ((end.x - start.x) / run) * gap, y: start.y + ((end.y - start.y) / run) * gap };
    const tip = { x: from.x + (end.x - from.x) * growth, y: from.y + (end.y - from.y) * growth };
    segment = { x1: from.x, y1: from.y, x2: tip.x, y2: tip.y };
    line.setAttribute('x1', from.x);
    line.setAttribute('y1', from.y);
    line.setAttribute('x2', tip.x);
    line.setAttribute('y2', tip.y);
    dot.setAttribute('cx', from.x);
    dot.setAttribute('cy', from.y);
    dot.style.display = growth > 0 ? '' : 'none';
    line.style.display = growth > 0 ? '' : 'none';
    svg.style.opacity = String(fade);
    Object.assign(label.style, {
      left: side > 0 ? `${end.x + 10}px` : 'auto',
      right: side > 0 ? 'auto' : `${width - end.x + 10}px`,
      top: `${end.y}px`,
      textAlign: side > 0 ? 'left' : 'right',
      width: `${labelWidth}px`,
      opacity: String(labelAmount * fade),
    });
  }

  return {
    get phase() { return phase; },
    // The box this callout's label takes up on the stage, or null if it is not showing.
    occupied() {
      if (phase === 'idle' || phase === 'waiting' || label.hidden) return null;
      const r = label.getBoundingClientRect();
      const l = layer.getBoundingClientRect();
      return { left: r.left - l.left, right: r.right - l.left, top: r.top - l.top, bottom: r.bottom - l.top };
    },
    // The line as drawn now, or null if it is not showing.
    segment: () => (phase === 'idle' || phase === 'waiting' || growth === 0 ? null : segment),
    // Start the wait: the line begins `delay` seconds from now. `pick` chooses the cube (default: the
    // one given when the callout was made) and `onShown` is called once the label has faded in.
    schedule(text, { pick: choosePick = pick, delay = settings.delay, onShown = null, onLabel = null, region: area = null, side = 'right', outline: drawOutline = true } = {}) {
      showOutline = drawOutline;
      reset();
      region = area;
      regionSide = side === 'left' ? -1 : 1;
      pickNow = choosePick;
      waitFor = delay;
      shown = onShown;
      labelling = onLabel;
      label.textContent = text;
      label.hidden = false;
      clock = 0;
      phase = 'waiting';
    },
    // Fade out quickly and stop.
    hide() {
      shown = null;
      labelling = null;
      if (phase === 'idle') return;
      if (phase === 'waiting') { reset(); return; }
      phase = 'leaving';
      clock = 0;
    },
    update(dt) {
      if (phase === 'idle') return;
      clock += dt;
      if (phase === 'waiting' && clock >= waitFor) {
        if (region) {
          way = { side: regionSide, angle: settings.angle / 2, length: settings.length * scale(), labelWidth: settings.labelWidth * scale() };
          phase = showOutline ? 'boxing' : 'growing';
        } else {
          cube = pickNow();
          if (cube < 0) { reset(); return; }
          way = choose(locate(cube) ?? { x: 0, y: 0 });
          phase = 'growing';
        }
        clock = 0;
        growth = 0;
        boxProgress = 0;
        labelAmount = 0;
        fade = 1;
      }
      if (phase === 'boxing') {
        boxProgress = clamp01(clock / scaled(settings.box));
        if (clock >= scaled(settings.box)) { phase = 'growing'; clock = 0; boxProgress = 1; }
      } else if (phase === 'growing') {
        growth = clamp01(clock / scaled(settings.grow));
        growth = growth * growth * (3 - 2 * growth);
        if (clock >= scaled(settings.grow)) { phase = 'labelling'; clock = 0; growth = 1; const callback = labelling; labelling = null; callback?.(); }
      } else if (phase === 'labelling') {
        labelAmount = clamp01(clock / scaled(settings.labelFade));
        if (clock >= scaled(settings.labelFade)) {
          phase = 'shown';
          const callback = shown;
          shown = null;
          callback?.();
        }
      } else if (phase === 'leaving') {
        fade = 1 - clamp01(clock / scaled(settings.leave));
        if (fade <= 0) { reset(); return; }
      }
      if (phase !== 'waiting') draw();
    },
  };
}
