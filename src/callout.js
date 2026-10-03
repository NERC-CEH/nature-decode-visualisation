// A tag line and label that point at one cube, to help tell the story. Two seconds after the
// caption has finished fading in, a line grows out from the cube; when it is complete the label
// fades in. Both follow the cube if it moves, and fade out quickly when the step changes.

import { CALLOUT } from './config.js';

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
// gives the screen positions of all the cubes, so the label can be put where it covers none.
export function createCallout({ layer, locate, pick, obstacles = () => [], settings = CALLOUT }) {
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
  let way = { side: 1, angle: settings.angle, length: settings.length };

  function reset() {
    phase = 'idle';
    region = null;
    outline.style.display = 'none';
    svg.style.opacity = '0';
    label.style.opacity = '0';
    label.hidden = true;
  }
  reset();

  // Choose which way the line goes and how long it is: the first (shortest, then steepest-first)
  // that keeps the label on the stage and clear of the cubes, or failing that the one covering fewest.
  function choose(start) {
    const width = layer.clientWidth;
    const height = layer.clientHeight;
    const boxHeight = label.offsetHeight || 90;
    const points = obstacles().filter(Boolean);
    let best = null;
    for (const length of [settings.length, settings.length + 50, settings.length + 110]) {
      for (const angle of [settings.angle, 55, 70, 25, -25, -45]) {
        for (const side of [1, -1]) {
          const rad = (angle * Math.PI) / 180;
          const endX = start.x + side * Math.cos(rad) * length;
          const endY = start.y - Math.sin(rad) * length;
          const left = side > 0 ? endX + 10 : endX - 10 - settings.labelWidth;
          const box = { left: left - 14, right: left + settings.labelWidth + 14, top: endY - boxHeight / 2 - 14, bottom: endY + boxHeight / 2 + 14 };
          if (box.left < 8 || box.right > width - 8 || box.top < 8 || box.bottom > height - 8) continue;
          const covered = points.filter((p) => p.x >= box.left && p.x <= box.right && p.y >= box.top && p.y <= box.bottom).length;
          if (!best || covered < best.covered) best = { side, angle, length, covered };
          if (covered === 0) return best;
        }
      }
    }
    return best ?? way;
  }

  function draw() {
    let start;
    let gap = settings.gap;
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
      gap = 4;
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
    const from = { x: start.x + dx * gap, y: start.y + dy * gap };
    const end = { x: start.x + dx * way.length, y: start.y + dy * way.length };
    const tip = { x: from.x + (end.x - from.x) * growth, y: from.y + (end.y - from.y) * growth };
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
      width: `${settings.labelWidth}px`,
      opacity: String(labelAmount * fade),
    });
  }

  return {
    get phase() { return phase; },
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
          way = { side: regionSide, angle: settings.angle / 2, length: settings.length };
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
        boxProgress = clamp01(clock / settings.box);
        if (clock >= settings.box) { phase = 'growing'; clock = 0; boxProgress = 1; }
      } else if (phase === 'growing') {
        growth = clamp01(clock / settings.grow);
        growth = growth * growth * (3 - 2 * growth);
        if (clock >= settings.grow) { phase = 'labelling'; clock = 0; growth = 1; const callback = labelling; labelling = null; callback?.(); }
      } else if (phase === 'labelling') {
        labelAmount = clamp01(clock / settings.labelFade);
        if (clock >= settings.labelFade) {
          phase = 'shown';
          const callback = shown;
          shown = null;
          callback?.();
        }
      } else if (phase === 'leaving') {
        fade = 1 - clamp01(clock / settings.leave);
        if (fade <= 0) { reset(); return; }
      }
      if (phase !== 'waiting') draw();
    },
  };
}
