// The finale: cubes fly to the dots of the UKCEH logo symbol and the logo lock-up fades in over
// them. Pure functions for where the logo goes on the stage and which cube goes to which dot, and
// a small controller for the lock-up image. See technical-spec 7.7.

import { LOGO } from './config.js';
import { tween, ease } from './tween.js';

// Where the lock-up image sits on a stage of `stage` pixels, and where each dot of the symbol is in
// the world. The image is centred, as large as `LOGO.fraction` of the stage allows. `unitsPerPixel`
// is the size of a screen pixel in world units at the cube (the face view). World positions are
// relative to the middle of the cube: x to the right, y up.
export function logoLayout({ stage, image, dots, unitsPerPixel, fraction = LOGO.fraction }) {
  const aspect = image.width / image.height;
  const width = Math.min(stage.width * fraction, stage.height * fraction * aspect);
  const height = width / aspect;
  const left = (stage.width - width) / 2;
  const top = (stage.height - height) / 2;
  const scale = width / image.width; // screen pixels per image pixel
  return {
    rect: { left, top, width, height },
    dots: dots.map((d) => ({
      x: (left + d.x * scale - stage.width / 2) * unitsPerPixel,
      y: -(top + d.y * scale - stage.height / 2) * unitsPerPixel,
      diameter: 2 * d.r * scale * unitsPerPixel,
    })),
  };
}

// Pair rows with columns at the least total cost (the Hungarian algorithm). `cost[r][c]`; there
// must be no more rows than columns. Returns the column for each row.
export function assign(cost) {
  const rows = cost.length;
  const cols = rows ? cost[0].length : 0;
  if (rows > cols) throw new Error('assign needs at least as many columns as rows');
  const u = new Array(rows + 1).fill(0);
  const v = new Array(cols + 1).fill(0);
  const p = new Array(cols + 1).fill(0); // the row now holding each column
  const way = new Array(cols + 1).fill(0);
  for (let i = 1; i <= rows; i++) {
    p[0] = i;
    let j0 = 0;
    const minv = new Array(cols + 1).fill(Infinity);
    const used = new Array(cols + 1).fill(false);
    do {
      used[j0] = true;
      const i0 = p[j0];
      let delta = Infinity;
      let j1 = 0;
      for (let j = 1; j <= cols; j++) {
        if (used[j]) continue;
        const cur = cost[i0 - 1][j - 1] - u[i0] - v[j];
        if (cur < minv[j]) { minv[j] = cur; way[j] = j0; }
        if (minv[j] < delta) { delta = minv[j]; j1 = j; }
      }
      for (let j = 0; j <= cols; j++) {
        if (used[j]) { u[p[j]] += delta; v[j] -= delta; } else { minv[j] -= delta; }
      }
      j0 = j1;
    } while (p[j0] !== 0);
    do {
      const j1 = way[j0];
      p[j0] = p[j1];
      j0 = j1;
    } while (j0);
  }
  const result = new Array(rows).fill(-1);
  for (let j = 1; j <= cols; j++) if (p[j]) result[p[j] - 1] = j - 1;
  return result;
}

// For every cube, where it goes in the finale. `positions[i]` is where cube i is now ({ x, y }),
// `layout` is from logoLayout, `random()` gives numbers in 0..1. As many cubes as there are dots are
// chosen at random to become the dots, and are paired with the dots so the flights are as short as
// can be. Every other cube is `removed`: it is to fade away before the flight and takes no part in it.
// Returns, for each cube, { x, y, scale, dot, removed } with scale in world units (the diameter of
// a dot), or 0 for the cubes that are removed.
export function finaleTargets(positions, layout, random = Math.random) {
  const dots = layout.dots;
  const distance = (a, b) => (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
  const targets = new Array(positions.length);
  if (positions.length >= dots.length) {
    const order = positions.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    const chosen = order.slice(0, dots.length);
    const pairs = assign(dots.map((dot) => chosen.map((c) => distance(positions[c], dot))));
    pairs.forEach((k, dotIndex) => {
      targets[chosen[k]] = { x: dots[dotIndex].x, y: dots[dotIndex].y, scale: dots[dotIndex].diameter, dot: dotIndex, removed: false };
    });
    positions.forEach((p, cube) => {
      if (!targets[cube]) targets[cube] = { x: p.x, y: p.y, scale: 0, dot: -1, removed: true };
    });
  } else {
    // fewer cubes than dots: each cube takes the nearest free dot, and the spare dots show only in the logo
    const free = new Set(dots.keys());
    positions.forEach((p, cube) => {
      let best = -1;
      for (const d of free) if (best < 0 || distance(p, dots[d]) < distance(p, dots[best])) best = d;
      free.delete(best);
      targets[cube] = { x: dots[best].x, y: dots[best].y, scale: dots[best].diameter, dot: best, removed: false };
    });
  }
  return targets;
}

// The lock-up image over the stage: placed to match the dots, and faded in and out.
export function createLogo(element) {
  let amount = 0;
  let running = null;
  const apply = () => {
    element.style.opacity = String(amount);
    element.hidden = amount <= 0.001;
  };
  apply();
  return {
    element,
    get amount() { return amount; },
    place(rect) {
      Object.assign(element.style, { left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px` });
    },
    fadeTo(target, seconds) {
      running?.cancel();
      const from = amount;
      if (from === target) return Promise.resolve();
      running = tween({
        duration: seconds,
        easing: ease.inOutQuad,
        onUpdate: (p) => { amount = from + (target - from) * p; apply(); },
      });
      return running.finished.then(() => undefined);
    },
  };
}
