// Reduced motion. When the visitor has asked their system for less motion (prefers-reduced-motion),
// no animation lasts longer than REDUCED_MAX seconds, so every move becomes a quick cross-fade or cut;
// the physics steps (the drop and the sort) are run out of sight instead of played; the cube turns by a
// cut; and the cursor no longer pushes cubes. The setting is read each time, so it can change mid-visit.

export const REDUCED_MAX = 0.4;

export function reducedMotion() {
  return typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// A duration in seconds, shortened if motion is reduced.
export function scaled(seconds) {
  return reducedMotion() ? Math.min(seconds, REDUCED_MAX) : seconds;
}
