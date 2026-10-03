// Settings, palette and copy. Pure data: no DOM access, so scripts and tests can import it.

// Species colours, in species-id order. From the UKCEH brand palette, chosen for colour-blind
// safety (technical-spec 10). Ids 0 and 1 are the specialists. Ids 9 to 11 are only used for
// cubes larger than 9 and have weaker separation. Beyond 12 the list repeats.
export const PALETTE = [
  '#E76124', // 0 orange (specialist)
  '#133B64', // 1 navy (specialist)
  '#90A968', // 2 green
  '#F4C03D', // 3 amber
  '#477AE2', // 4 blue
  '#7F1518', // 5 maroon
  '#67CCEA', // 6 sky
  '#D7B7AA', // 7 clay
  '#CBE0AB', // 8 pale green
  '#DB1F26', // 9 red
  '#F5ED5A', // 10 yellow
  '#CFBCD5', // 11 lilac
];
export const CORE_PALETTE_SIZE = 9;

export const speciesColour = (id) => PALETTE[id % PALETTE.length];

// Page colours. The controller tweens between them: 0 = white page, 1 = black page.
export const THEMES = {
  light: { bg: '#FFFFFF', fg: '#000000', muted: '#595959', line: '#B3B3B3' },
  dark: { bg: '#000000', fg: '#FFFFFF', muted: '#BFBFBF', line: '#4D4D4D' },
};

export const EDGE_COLOUR = '#B3B3B3';

// Physics constants (technical-spec 7.1). One world unit is one cube edge.
export const PHYSICS = {
  step: 1 / 60,
  gravity: -30,
  friction: 0.4,
  restitution: 0.2,
};

// Durations in seconds (technical-spec 6.2). Starting values, tuned by eye.
export const DURATIONS = {
  theme: 1.0,
  drop: 2.0, // cubes are released, one after another, over this time...
  dropRamp: 1.0, // ...ramping up over the first and down over the last this many seconds
  dropSettle: 0.5, // extra wait after the last cube spawns before the step is ready
  lift: 1.2, // cubes rise out of view on Back
  categorise: 2.0, // every cube has taken its species colour within this time, each at its own random moment
  categoriseBack: 1.0, // and on Back, the colours drain away within this time
  sort: 3.0, // the cubes are pulled into their heaps for this long...
  sortSettle: 0.5, // ...and the step is ready this long after the pull ends
  sortBack: 1.2, // on Back the cubes ease back to where they were
  arrange: 3.5, // every cube is in its cell within this time: heaps lift one after another...
  arrangeFlight: 1.5, // ...and each cube takes this long to fly to its cell
  arrangeFrame: 2.0, // the frame (box, arrow and titles) starts to fade in this long after the lift starts...
  frameFade: 0.8, // ...and takes this long
  arrangeBack: 1.5, // on Back the cubes return to their heaps and the camera to the floor
};

// The floor the cubes fall onto. Sized from the cube count; one world unit is one cube edge.
export const ARENA = {
  aspect: 1.5, // width / depth
  areaPerCube: 6, // floor area for every cube, in square units
  spawnSeed: 1, // spawn order and spin repeat for a given data file
};

// The drop is a stream of cubes pouring into the middle of the floor. Cubes are released down
// several side-by-side lanes at once, with a downward speed that keeps cubes in the same lane
// apart, so none start inside another. The rate and width of the stream wander at random.
export const STREAM = {
  speed: 28, // downward speed at release, units/s
  gap: 1.8, // least distance between cubes in one lane at release (a turned cube is up to 1.73 across)
  spacing: 1.25, // spiral spacing of the lanes, which sets how wide the stream is
  drift: 2, // random sideways speed at release, so the pile spreads
  variation: 0.5, // the release rate and the width (area) of the stream each vary by up to this share
};

// The network of wireframe cubes behind the title on the opening screen. It hangs this many
// units in front of the camera. Sway is how far each cube drifts (as a share of the view), cycle
// is the length in seconds of a slow sway, and turn is how far the whole cloud rocks, in radians.
export const NETWORK = {
  nodes: 80,
  neighbours: 2, // each cube is joined to this many of its nearest cubes
  depth: 45,
  size: [0.5, 1.0], // cube edge, in units at that depth
  opacity: 0.1,
  colour: '#FFFFFF',
  sway: 0.035,
  cycle: 30,
  turn: 0.25,
  seed: 7,
  // The cursor pushes cubes away. Radius is in view heights (a radius of 0.35 is a third of the
  // way up the screen); push is an acceleration in units/s^2, and spring and damping bring a
  // pushed cube back. Spin tumbles it. maxPush is the furthest a cube can be pushed, in units.
  repelRadius: 0.35,
  repelPush: 200,
  repelSpin: 90,
  spring: 5,
  damping: 3.5,
  maxPush: 14,
};

// The Sort step pulls every cube across the floor towards the heap for its species. The pull is
// an acceleration in units/s^2 that never drops below `base` (far more than the floor's friction,
// so cubes shove through and keep sliding until the cubes ahead stop them, which builds a heap
// rather than a flat patch), grows by `k` for every unit of distance and is capped at `max`.
// `drag` slows sideways speed, which caps the speed of a cube at about base / drag units/s. The
// pull fades out within `heapRadius` of the heap, so the heap spreads into a mound, not a column. The
// pull builds up over `rampIn` seconds and eases off over `rampOut`. After the main pull, cubes
// still further than `farRadius` from their heap keep being pulled, for up to `stragglers` more
// seconds (so the whole pull lasts 10 s at the most), until no more than `farShare` of the cubes
// are still on their way. Heaps are spread
// over `spread` of the floor's width, in two rows: `rowZ` is the middle of the two rows and
// neighbouring heaps are `zigzag` units either side of it, which gives each heap more room.
export const SORT = {
  base: 120,
  k: 10,
  max: 300,
  drag: 6,
  heapRadius: 2,
  rampIn: 0.4,
  rampOut: 0.6,
  farRadius: 5,
  farShare: 0.01,
  stragglers: 7,
  spread: 0.88,
  rowZ: 5,
  zigzag: 5,
};

// The arranged data cube. `pitch` is the distance between cell centres, so cubes of one unit leave
// a gap of pitch - 1 between them; `floorGap` is the space under the cube. The camera looks at it
// from `elevation` degrees above the horizontal, with `margin` times the room it needs. The cube
// is turned by `yaw` and `tilt` radians (about the vertical and horizontal axes) when it arrives, to
// show the front and one side; the cube springs back to this when it is let go.
export const CUBE = {
  pitch: 1.25,
  floorGap: 1.5,
  titleDrop: 4.5, // how far below the cube to leave room for: the arrow and title for time (2.5), and the lowering of the near ones by perspective
  elevation: 14,
  margin: 0.88,
  yaw: -0.55,
  tilt: 0.05,
};

// Dragging the cube: radians turned per pixel dragged, the furthest it can tilt, and the stiffness
// of the spring that returns it (larger is faster; the spring is critically damped).
export const ROTATE = {
  sensitivity: 0.008,
  maxPitch: 1.3,
  spring: 9,
};

// Camera for the floor steps: elevation is how far above horizontal it looks down, in degrees.
export const CAMERA = {
  elevation: 10,
  floorHeight: 1 / 3, // the cubes settle this far up the screen, from the bottom
};

// Cursor repulsion (technical-spec 7.1). Accelerations are per second, so the push is the same at
// any frame rate. A cube at rest needs a push of more than about 12 (friction) to start moving.
export const REPEL = {
  radius: 4.5, // floor units around the cursor
  push: 120, // sideways acceleration at the cursor, falling off with distance squared
  lift: 25, // upward acceleration, which eases the cube's grip on the floor so it slides and hops
  spin: 16, // random angular acceleration, so cubes tumble
};

export const SIMULATED_NOTE = 'Simulated data.';
export const TAGLINE = 'Our planet. Decoded.';

// One entry per step, in order. `theme` is the page colour for that step.
// `repel` marks steps where the cursor pushes the cubes, and `rotate` those where the cube can be dragged round. `canvasLabel` describes the 3D scene
// for screen readers. `summary` is the plain-text description of the pattern an Insight shows.
export const STEPS = [
  {
    id: 'intro',
    title: 'Data cube',
    text: 'Decoding nature reveals its stories.',
    theme: 'dark',
    canvasLabel: 'An empty black screen. The animation starts when you press Next.',
  },
  {
    id: 'data',
    title: 'Data',
    text: 'Every record of wildlife is a data point. Smartphone apps and surveys now collect them in large numbers. On their own, they are scattered and hard to read.',
    theme: 'light',
    repel: true,
    canvasLabel: 'Many small black cubes fall and scatter across the floor.',
  },
  {
    id: 'categorise',
    title: 'Categorise',
    text: 'Each record names a species. We give each species its own colour.',
    theme: 'light',
    repel: true,
    canvasLabel: 'The scattered cubes take on a different colour for each species.',
  },
  {
    id: 'sort',
    title: 'Sort',
    text: 'We group the records by species. Some species have many records. Others have few.',
    theme: 'light',
    repel: true,
    canvasLabel: 'The cubes gather into one heap per species, so each heap has a single colour.',
  },
  {
    id: 'arrange',
    title: 'Arrange',
    rotate: true,
    text: 'We place each record in a cube with three axes: species, location and time. Each species is one sheet. A data cube is a stack of spreadsheets, one on top of another.',
    theme: 'light',
    canvasLabel: 'The cubes arrange into a three-dimensional data cube with axes for species, location and time. Drag to rotate it.',
  },
  {
    id: 'insight1',
    title: 'Insights',
    rotate: true,
    text: 'Species by location. Generalist species occur in many locations. Specialist species occur in few, because they depend on particular habitats.',
    theme: 'light',
    insight: 1,
    canvasLabel: 'The data cube seen from the side, showing species against location.',
    summary: 'Generalist species have records in many locations. The two specialist species have records in only one habitat.',
  },
  {
    id: 'insight2',
    title: 'Insights',
    rotate: true,
    text: 'Location by time. Records grow over time across locations, as more people record wildlife with smartphone apps.',
    theme: 'light',
    insight: 2,
    canvasLabel: 'The data cube seen from above, showing location against time.',
    summary: 'The number of records rises from the earliest time to the latest, in locations across the cube.',
  },
  {
    id: 'insight3',
    title: 'Insights',
    rotate: true,
    text: 'Species by time. Overall recording rises, yet specialist records fall. That pattern points to a decline.',
    theme: 'light',
    insight: 3,
    canvasLabel: 'The data cube seen from the front, showing species against time.',
    summary: 'Records rise overall, but the two specialist species have no records in the last third of the time axis.',
  },
  {
    id: 'finale',
    title: 'UKCEH',
    text: TAGLINE,
    theme: 'dark',
    canvasLabel: 'The cubes form the dots of the UKCEH logo. Our planet. Decoded.',
  },
];
