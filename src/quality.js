// Picks how much the renderer is asked to do, and backs off if the frames are slow. Tiers run from the
// best looking to the cheapest. A phone starts a tier down. The monitor only ever steps down, so the
// picture does not flicker between tiers.

export const TIERS = [
  { name: 'high', pixelRatio: 2, shadowMap: 1024 },
  { name: 'medium', pixelRatio: 1.5, shadowMap: 512 },
  { name: 'low', pixelRatio: 1, shadowMap: 0 }, // 0: no shadows
];

export const QUALITY = {
  startTier: { desktop: 0, phone: 1 },
  minFps: { desktop: 40, phone: 28 }, // a tier drops when frames average slower than this...
  window: 90, // ...over this many frames,
  warmup: 60, // after ignoring this many frames at the start (and after each change) while things settle
};

// `onChange(tier)` is called when the tier drops. Feed it each frame's length in seconds with frame(dt).
export function createQuality({ phone = false, onChange = () => {}, settings = QUALITY } = {}) {
  const kind = phone ? 'phone' : 'desktop';
  let index = settings.startTier[kind];
  let skip = settings.warmup;
  let frames = 0;
  let total = 0;

  return {
    get tier() { return TIERS[index]; },
    frame(dt) {
      if (index >= TIERS.length - 1) return;
      if (skip > 0) { skip--; return; }
      frames++;
      total += dt;
      if (frames < settings.window) return;
      const slow = total / frames > 1 / settings.minFps[kind];
      frames = 0;
      total = 0;
      if (!slow) return;
      index++;
      skip = settings.warmup;
      onChange(TIERS[index]);
    },
  };
}
