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
// `repel` marks steps where the cursor pushes the cubes. `canvasLabel` describes the 3D scene
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
    text: 'We place each record in a cube with three axes: species, location and time. Each species is one sheet. A data cube is a stack of spreadsheets, one on top of another.',
    theme: 'light',
    canvasLabel: 'The cubes arrange into a three-dimensional data cube with axes for species, location and time. Drag to rotate it.',
  },
  {
    id: 'insight1',
    title: 'Insights',
    text: 'Species by location. Generalist species occur in many locations. Specialist species occur in few, because they depend on particular habitats.',
    theme: 'light',
    insight: 1,
    canvasLabel: 'The data cube seen from the side, showing species against location.',
    summary: 'Generalist species have records in many locations. The two specialist species have records in only one habitat.',
  },
  {
    id: 'insight2',
    title: 'Insights',
    text: 'Location by time. Records grow over time across locations, as more people record wildlife with smartphone apps.',
    theme: 'light',
    insight: 2,
    canvasLabel: 'The data cube seen from above, showing location against time.',
    summary: 'The number of records rises from the earliest time to the latest, in locations across the cube.',
  },
  {
    id: 'insight3',
    title: 'Insights',
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
