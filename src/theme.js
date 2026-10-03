// Page colour theme (light page for the animation, dark page for the intro and finale).
// The theme is a single number, 0 = light and 1 = dark, so the page and the 3D scene can
// ease between the two together.

import { THEMES } from './config.js';
import { tween, ease } from './tween.js';

const channel = (hex, i) => parseInt(hex.slice(1 + i * 2, 3 + i * 2), 16);

export function mixHex(a, b, t) {
  const part = (i) => Math.round(channel(a, i) + (channel(b, i) - channel(a, i)) * t);
  return '#' + [0, 1, 2].map((i) => part(i).toString(16).padStart(2, '0')).join('').toUpperCase();
}

export function themeColours(t) {
  const out = {};
  for (const key of Object.keys(THEMES.light)) out[key] = mixHex(THEMES.light[key], THEMES.dark[key], t);
  return out;
}

// `apply(colours, t)` is called on every change.
export function createTheme(apply, initial = 'dark') {
  let value = initial === 'dark' ? 1 : 0;
  let running = null;
  apply(themeColours(value), value);

  return {
    get value() { return value; },
    // Resolves when the theme has arrived. A new call cancels one still running.
    async animateTo(name, seconds) {
      const target = name === 'dark' ? 1 : 0;
      running?.cancel();
      if (target === value) return;
      const from = value;
      running = tween({
        duration: seconds,
        easing: ease.inOutQuad,
        onUpdate: (p) => {
          value = from + (target - from) * p;
          apply(themeColours(value), value);
        },
      });
      await running.finished;
    },
  };
}
