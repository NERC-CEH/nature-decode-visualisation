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
};

export const SIMULATED_NOTE = 'Simulated data.';
export const TAGLINE = 'Our planet. Decoded.';

// One entry per step, in order. `theme` is the page colour for that step.
// `canvasLabel` describes the 3D scene for screen readers. `summary` is the plain-text
// description of the pattern an Insight shows.
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
    canvasLabel: 'Many small black cubes fall and scatter across the floor.',
  },
  {
    id: 'categorise',
    title: 'Categorise',
    text: 'Each record names a species. We give each species its own colour.',
    theme: 'light',
    canvasLabel: 'The scattered cubes take on a different colour for each species.',
  },
  {
    id: 'sort',
    title: 'Sort',
    text: 'We group the records by species. Some species have many records. Others have few.',
    theme: 'light',
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
