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
  explode: 0.5, // Sort begins with the cubes thrown up and out for this long...
  freeze: 0.5, // ...then hanging frozen in mid air for this long, before the pull begins
  sort: 3.0, // the cubes are pulled into their heaps for this long...
  sortSettle: 0.5, // ...and the step is ready this long after the pull ends,
  sortReady: 4.5, // or this long after the pull starts if some cubes are still on their way (the pull carries on)
  sortBack: 1.2, // on Back the cubes ease back to where they were
  look: 1.0, // cubes change between solid and see-through, and between colours and grey
  finaleFade: 0.9, // the cubes that are not needed fade away this long before the others fly to the dots
  finale: 3.0, // the cubes fly to the dots of the logo, and the page fades to black, over this time...
  logoFade: 1.0, // ...then the logo lock-up fades in over the dots in this time
  finaleBack: 2.5, // on Back the cubes fly back to the cube
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

// The explosion that begins the Sort step, to pull the cubes apart and off the floor so none are
// stuck in the pile. Each cube is thrown away from the middle of the pile at `outward` units/s
// (varying by up to half either way) and up at `up` units/s; cubes low in the pile get up to
// `lowBonus` more upward speed, as they have the most weight on them. `spin` is the tumble.
export const EXPLODE = {
  outward: 16,
  up: 17,
  lowBonus: 10,
  spin: 8,
};

// The Sort step pulls every cube across the floor towards the heap for its species. The pull is
// an acceleration in units/s^2 that never drops below `base` (far more than the floor's friction,
// so cubes shove through and keep sliding until the cubes ahead stop them, which builds a heap
// rather than a flat patch), grows by `k` for every unit of distance and is capped at `max`.
// `drag` slows sideways speed, which caps the speed of a cube at about base / drag units/s. The
// pull fades out between `releaseRadius` and `heapRadius` of the heap, and stops altogether inside
// `releaseRadius`: a cube that has arrived is only slowed, and settles where it is, so the heap spreads
// into a mound, not a column. The
// pull builds up over `rampIn` seconds and eases off over `rampOut`. After the main pull, cubes
// still further than `farRadius` from their heap keep being pulled, for up to `stragglers` more
// seconds (so the whole pull lasts 10 s at the most), until no more than `farShare` of the cubes
// are still on their way. Heaps are spread
// over `spread` of the floor's width, in two rows: `rowZ` is the middle of the two rows and
// neighbouring heaps are `zigzag` either side of it, which gives each heap more room. Both are shares
// of the floor's depth, so the heaps stay on the floor at every size (a heap spot outside the wall
// would pin the cubes against it, held up by friction, for as long as the pull lasts).
export const SORT = {
  base: 120,
  k: 10,
  max: 300,
  drag: 6,
  heapRadius: 2,
  releaseRadius: 1,
  rampIn: 0.4,
  rampOut: 0.6,
  farRadius: 5,
  farShare: 0.01,
  stragglers: 7,
  spread: 0.88,
  rowZ: 0.2,
  zigzag: 0.2,
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

// The tag lines and labels that point at cubes (see callout.js). A step lists them in `callout`, each
// with a `target` and `text`; they appear one after another. The first line starts `delay` seconds after
// the caption has faded in, grows out over `grow` seconds at `angle` degrees above horizontal, to
// `length` pixels from the cube (starting `gap` pixels away); then the label fades in over
// `labelFade`. Everything fades out within `leave` seconds when the step changes.
export const CALLOUT = {
  delay: 0,
  grow: 0.8,
  box: 0.8, // a rectangle round a region traces itself in this long, before the line comes off it
  labelFade: 0.6,
  leave: 0.2,
  length: 120,
  gap: 34,
  angle: 40,
  labelWidth: 260,
};

// Kiosk mode (kiosk.js): the story plays itself. Once everything on a step has appeared it stays for
// `base` seconds plus `perWord` for each word of the caption, but never less than `minDwell` or more than
// `maxDwell`; the opening screen stays `introDwell` and the last `finaleDwell`, then the story starts again.
// `idleReturn` is how long a visitor can do nothing, at an event (?kiosk), before it returns to the opening
// screen and plays itself. `pointerGrace` is how long after it starts that moving the pointer is ignored.
// `cursorSpeed` is how fast the virtual cursor sweeps over the cubes.
export const KIOSK = {
  introDwell: 5,
  base: 3,
  perWord: 0.25,
  minDwell: 5,
  maxDwell: 20,
  finaleDwell: 8,
  idleReturn: 90,
  pointerGrace: 3,
  cursorSpeed: 0.55,
};

// The logo in the finale: the lock-up image fills this share of the stage, as far as its shape
// allows. The cubes become the dots of the symbol and are drawn flat white, as in the logo.
export const LOGO = {
  fraction: 0.62,
};

// The face views (the Insights): the camera looks straight at a face of the cube through a view
// this many degrees wide (narrow, so that perspective all but disappears), with `margin` times the
// room the face needs for itself and its two axis titles. Cubes keep their species colour and are
// drawn see-through there (`alpha` opaque), so the more cubes lie behind each other along the line of
// sight, the darker the cell. The top view, where species colours mean nothing, instead colours every
// cube by how many cubes are in its column (`countColours`, low to high), fully opaque.
export const FACE = {
  fov: 3,
  margin: 1.45,
  alpha: 0.6,
  // blue for the fewest cubes in a column, through yellow to red for the most
  countColours: ['#4575B4', '#91BFDB', '#FEE090', '#FC8D59', '#D73027'],
  turn: 2.5, // seconds to turn from one face to the next
  pullBack: 0.6, // seconds to pull back before the cube turns...
  pullBackShare: 0.45, // ...this share of the way from the face view towards the wide cube view, which brings back some perspective so the turn reads as 3D
};

// Dragging the cube: radians turned per pixel dragged, the furthest it can tilt, and the stiffness
// of the spring that returns it (larger is faster; the spring is critically damped).
export const ROTATE = {
  sensitivity: 0.008,
  keySpeed: 1.6, // radians a second while an arrow key is held
  maxPitch: 1.8,
  spring: 3.5,
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
export const TAGLINE_LONG = 'Decoding nature reveals its stories.';
export const CREDIT = { text: 'Design and implementation by Tom August', url: 'https://www.ceh.ac.uk/staff/tom-august' };

// One entry per step, in order. `theme` is the page colour for that step.
// `repel` marks steps where the cursor pushes the cubes, and `rotate` those where the cube can be dragged round, and `note` replaces the footnote. `canvasLabel` describes the 3D scene
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
    callout: [{ target: 'topRight', text: 'Each black cube represents a wildlife observation contributed by a member of the public.' }],
    captionWhenReady: true, // the caption appears once the last cube has been released (plus the settle time)
    text: 'People all over the country submit observations of wildlife through a range of websites, mobile apps, recording schemes, and societies, many supported by UKCEH.',
    theme: 'light',
    repel: true,
    canvasLabel: 'Many small black cubes fall and scatter across the floor.',
  },
  {
    id: 'categorise',
    title: 'Categorise',
    callout: [{ target: 'topRight', text: 'Each wildlife observation has attributes; for example these observations have been coloured according to which species was seen.' }],
    text: 'Data attributes provide information key for futher analysis; what was seen, where, when and by who?',
    theme: 'light',
    repel: true,
    canvasLabel: 'The scattered cubes take on a different colour for each species.',
  },
  {
    id: 'sort',
    title: 'Sort',
    // the second label appears once the first has faded in; both wait until the heaps have formed
    callout: [
      { target: 'backLeftHeap', text: 'Some species have lots of observations.' },
      { target: 'backRightHeap', text: 'Some species have few observations.' },
    ],
    calloutWhenReady: true,
    text: 'The more data we have for a species the more confident we can be about how its populations are changing, but it is often the rare species with little data that are most at risk of declines.',
    theme: 'light',
    repel: true,
    canvasLabel: 'The cubes gather into one heap per species, so each heap has a single colour.',
  },
  {
    id: 'arrange',
    title: 'Arrange',
    rotate: true,
    text: 'Data cubes are a bit like a pile of spreadsheets, one on top of another. Arranging the data in this way allows us to look for patterns in the data that might give us a clue about how species populations are changing.',
    theme: 'light',
    callout: [
      // `reveal` fades in the named axis titles with the label
      {
        target: 'cubeTopRight',
        text: 'Each observation can be placed in the data cube according to where it was (Location), when it was (Time), and what it was (Species).',
        reveal: ['location', 'time', 'species'],
      },
    ],
    calloutWhenReady: true,
    canvasLabel: 'The cubes arrange into a three-dimensional data cube with axes for species, location and time. Drag to rotate it.',
  },
  {
    id: 'insight1',
    title: 'Insights',
    rotate: true,
    note: 'Simulated data. Darker means more records.',
    text: 'Specialist species occur in fewer locations than generalists, often because they require a specific habitat to survive. Because of these special requirements they are more susceptible to declines in a changing environment.',
    theme: 'light',
    insight: 1,
    // a rectangle round the rows, then a line off the left or right side of it, then the label
    callout: [
      { target: 'specialists', side: 'left', text: 'Some species are found in few locations - these are called specialists.' },
      { target: 'generalists', side: 'right', text: 'Some species are found in many locations - these are called generalists.', delay: 1 },
    ],
    calloutWhenReady: true,
    canvasLabel: 'The data cube seen from the side, showing species against location.',
    summary: 'Generalist species have records in many locations. The two specialist species have records in only one habitat.',
  },
  {
    id: 'insight2',
    title: 'Insights',
    rotate: true,
    note: 'Simulated data. Red means more records, blue fewer.',
    text: 'With the development of new species identification guides, recording websites, and mobile phone applications it has become far easier to share wildlife observations. As a result we have seen a growth in the number of records over the long term.',
    theme: 'light',
    insight: 2,
    // lines off the left and right of the cube's box (`outline: false`: no rectangle), part of the way down
    callout: [
      { target: 'cubeBox', side: 'left', outline: false, anchor: 0.15, text: 'In the past, fewer people submitted observations of wildlife.' },
      { target: 'cubeBox', side: 'right', outline: false, anchor: 0.15, text: 'In recent years we have received more data as more people get involved in wildlife recording.', delay: 1 },
    ],
    calloutWhenReady: true,
    canvasLabel: 'The data cube seen from above, showing location against time.',
    summary: 'The number of records rises from the earliest time to the latest, in locations across the cube.',
  },
  {
    id: 'insight3',
    title: 'Insights',
    rotate: true,
    note: 'Simulated data. Darker means more records.',
    text: 'Land-use change, climate change and other factors are changing the environment around us. Generalists are better equipped to adapt to these changes.',
    theme: 'light',
    insight: 3,
    // a rectangle round each pair of rows, then a line off its side, then the label
    callout: [
      { target: 'generalists', side: 'right', text: 'Many generalists are adapting to our changing world.' },
      { target: 'specialists', side: 'left', text: 'Specialists find it harder to adapt and many are disappearing over time.', delay: 1 },
    ],
    calloutWhenReady: true,
    canvasLabel: 'The data cube seen from the front, showing species against time.',
    summary: 'Records rise overall, but the two specialist species have no records in the last third of the time axis.',
  },
  {
    id: 'conclusion',
    title: TAGLINE_LONG,
    text: '',
    statement: true, // the title alone, large and centred, with no caption
    rotate: true,
    theme: 'light',
    canvasLabel: 'The finished data cube, seen from the front and side. Decoding nature reveals its stories. Drag to rotate it.',
  },
  {
    id: 'finale',
    title: 'UKCEH',
    text: TAGLINE,
    credit: true, // the credit link replaces the title and caption
    theme: 'dark',
    canvasLabel: 'The cubes form the dots of the UKCEH logo. Our planet. Decoded.',
  },
];

// Sound (src/audio). The bed is one looping pad per step, with a few bell notes. `loop` is its length in
// seconds, `tail` the reverb tail drawn past the end and folded back onto the start, `rms` its level in dBFS
// (about 12 dB below the sound effects). Per step: `notes` the pad, `tex` the bells per loop, `air` the
// breath of noise, `level` an offset in dB, `seed` which bells fall when.
export const BED = {
  loop: 10,
  tail: 5,
  sampleRate: 22050, // the bed is soft and low, so it is drawn at half rate to save time
  rms: -34,
  bells: ['A4', 'C5', 'E5', 'G5', 'A5', 'C6'],
  steps: {
    intro: { notes: ['A2', 'E3'], tex: 0, air: 0.35, level: -6, seed: 1 },
    data: { notes: ['A2', 'E3', 'A3'], tex: 5, air: 0.6, level: 0, seed: 2 },
    categorise: { notes: ['A2', 'E3', 'A3'], tex: 7, air: 0.6, level: 0, seed: 3 },
    sort: { notes: ['A2', 'E3', 'A3', 'C4'], tex: 8, air: 0.6, level: 0.5, seed: 4 },
    arrange: { notes: ['A2', 'E3', 'A3', 'C4'], tex: 3, air: 0.4, level: -1.5, seed: 5 },
    insight1: { notes: ['A2', 'E3', 'A3', 'C4', 'E4'], tex: 2, air: 0.3, level: -1, seed: 6 },
    insight2: { notes: ['A2', 'E3', 'G3', 'C4', 'E4'], tex: 2, air: 0.3, level: -1, seed: 7 },
    insight3: { notes: ['A2', 'E3', 'B3', 'E4', 'G4'], tex: 2, air: 0.3, level: -1, seed: 8 },
    conclusion: { notes: ['A2', 'E3', 'A3', 'C4', 'E4', 'A4'], tex: 2, air: 0.3, level: 0, seed: 9 },
    finale: { notes: ['A2', 'E3', 'A3', 'C4', 'E4', 'A4'], tex: 0, air: 0.2, level: -1, seed: 10 },
  },
  crossfade: 2.5, // seconds between one step's bed and the next
  finaleFadeAt: 3.5, // seconds into the finale when the bed starts to fade out...
  finaleFade: 5, // ...over this many seconds
};

export const SOUND = {
  master: 0.35, // overall level, 0 to 1
  voices: 32, // most sound effects playing at once
  impactMinSpeed: 3, // slower contacts make no sound (cube units a second). This is the speed the cubes have really been travelling at (see physics.js), so a settling pile or a heap held together by the Sort pull is below it
  impactFullSpeed: 20, // contacts at or above this speed are played at full strength: cubes thrown or poured in reach this and more
  impactCurve: 1.6, // loudness follows speed: strength = (how far between min and full speed) ^ this. Above 1, a gentle knock is much quieter than a hard one
  impactQuiet: 0.04, // the gain of the gentlest knock that sounds...
  impactLoud: 0.9, // ...and of a knock at full speed
  impactsPerStep: 2, // most impacts that sound in one physics step (a step is 1/60 s); a pour of cubes is a patter, not a wall
  impactSpread: 0.016, // seconds: each impact is placed at a random moment within its step, so they do not land together
  burst: 6, // a sustained rush of contacts (the Sort step) may sound at most `rate` impacts a second, after a burst of this many:
  rate: 20, // a pour is a patter, but cubes sliding into heaps for seconds must not become a roar
  densityTau: 0.3, // seconds over which a busy stretch of impacts is remembered...
  densityRef: 3, // ...an impact is played at 1 / sqrt(1 + recent impacts / this) of its strength, so a pour does not pile up into a wall
  clackLength: 0.2, // seconds of each sound that are played: the rest of the drawn buffer is silence
  thudLength: 0.4,
  duckDb: -2, // the bed dips this far under a hard impact...
  duckAbove: 0.6, // ...when its strength (0 to 1) is at least this
};
