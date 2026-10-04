// Reduced motion. The reduced version of the animation exists but is OFF: the page does not follow the
// system's prefers-reduced-motion setting, so it always plays in full. It is used only when the address
// asks for it with ?motion=reduced. When it is on, no animation lasts longer than REDUCED_MAX seconds, so
// every move becomes a quick cross-fade or cut; the physics steps (the drop and the sort) are run out of
// sight instead of played; the cube turns by a cut; and the cursor no longer pushes cubes.

export const REDUCED_MAX = 0.4;

export function reducedMotion() {
  return typeof location !== 'undefined' && /[?&]motion=reduced(?:&|$)/.test(location.search || '');
}

// A duration in seconds, shortened if motion is reduced.
export function scaled(seconds) {
  return reducedMotion() ? Math.min(seconds, REDUCED_MAX) : seconds;
}
