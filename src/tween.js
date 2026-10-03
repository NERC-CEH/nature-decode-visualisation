// Minimal tweening: one value from 0 to 1 over a duration, with easing.

export const ease = {
  linear: (t) => t,
  inOutQuad: (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2),
  inOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2),
  inCubic: (t) => t * t * t,
  outCubic: (t) => 1 - (1 - t) ** 3,
};

const frame = (fn) =>
  typeof requestAnimationFrame === 'function' ? requestAnimationFrame(fn) : setTimeout(() => fn(performance.now()), 16);

// Runs `onUpdate(progress)` each frame, where progress is eased 0..1, and resolves `finished`
// after a final call with exactly 1. `cancel()` stops it without a final call.
export function tween({ duration, easing = ease.inOutCubic, onUpdate }) {
  const start = performance.now();
  let cancelled = false;
  const finished = new Promise((resolve) => {
    const tick = (now) => {
      if (cancelled) return resolve(false);
      const t = duration > 0 ? Math.min(1, (now - start) / (duration * 1000)) : 1;
      onUpdate(t >= 1 ? 1 : easing(t));
      if (t >= 1) resolve(true);
      else frame(tick);
    };
    frame(tick);
  });
  return { finished, cancel: () => { cancelled = true; } };
}

export const wait = (seconds) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));
