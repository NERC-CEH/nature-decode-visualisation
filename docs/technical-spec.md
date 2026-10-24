# Technical Specification: Our Planet. Decoded. Data Cube Animation

Status: M0 to M6 built, plus a polish pass (see 13). M7 (kiosk, accessibility) and M8 (finish) remain. Sources: [scope.md](scope.md), the answers in [questions.md](questions.md), the UKCEH Brand Guidelines (v3, 2026) and logo guide, and the project sketches. The PDFs are kept locally and are gitignored.

## 1. Summary

A static, offline-capable web page that tells the story "Decoding nature reveals its stories" as a 3D animation:

- Black cubes fall and scatter.
- They take on species colours and sort into heaps.
- The heaps rise into a 3D data cube (species × location × time).
- The cube turns to three faces that each show an insight.
- The cubes dissolve into the dots of the UKCEH logo.

Navigation is **Next** and **Back** only. Each press plays an animation forward or in reverse. There is no skipping and no URL state, so the page always starts at the beginning.

## 2. Decisions

| Topic | Decision |
|---|---|
| Axes | **Species**, **Location**, **Time**. Geometry in 4.1. |
| Axis labelling | Axis titles only. No species names or tick numbers, because the data is simulated. **Time** carries an arrow showing its direction. |
| Values | Binary. One cube per observation (1), nothing for 0. |
| Data loading | Loaded from a data file, so regenerating the data needs no code change (5). |
| Tagline | **Our planet. Decoded.** |
| Font | **Arial**, the brand guide's approved fallback for Suisse International. A system font, so nothing is shipped. |
| Look | Minimalist wireframe. Titles are capitals in square brackets. White background and black text for steps 1 to 7. **The intro and the finale are black with white text**, and the background eases between them. Bounding cube edges are a fine light-grey stroke (`#B3B3B3`). |
| Navigation | Next and Back. Back reverses the animation. No skipping. No URL state. |
| Kiosk mode | Auto-play that loops without clicks. |
| Categorise | Random-order recolour, 2 seconds at most. |
| Sort | Physics-driven heaps. No labels. |
| Cursor repulsion | Every step before Arrange. |
| Arrange and Insights | Drag to rotate. No zoom. Snaps back to the intended view on release. |
| Finale | Cubes dissolve into the dots of the UKCEH symbol, then the logo and tagline lock-up appears, with Restart. |
| Species colours | Brand palette, checked for colour-blind safety (10). |
| Tooltips | None. Dropped. |
| Sound | Stretch goal: plastic clacks on impacts, plus sounds for a tag appearing, a slide change, the cube turning and the move to the finale. Mute control, unlocked by a tap. |
| Hosting | For now the page is only ever run locally (double-click `index.html`); the repository is private. GitHub Pages was the plan and is deferred until a public launch, so it is not enabled. Fully offline: no CDN. |
| Mobile | Built. Landscape only: a phone held upright is asked to turn. Buttons only. 7 × 7 × 7 data by default on phones. Plan in 13.1. |
| Data size | 9 × 9 × 9 by default. 10 is comfortable; 12 shows a slight lag on a laptop. `?size=5` to `?size=12` picks another (built, 13.1). |
| Captions | Along the bottom, over a full-height canvas. The order on each step is title, then tags and labels, then the caption text (7.9). |
| Accessibility | Keyboard navigation and text alternatives (11). Reduced motion is built but switched off (11). |
| Maintenance | Simple. Few dependencies. |
| Git | Brand guide PDFs and `sketches.pdf` are gitignored. Work is pushed to `main`. |
| Process | Built step by step, with a review after each milestone. |

## 3. Architecture

### 3.1 Stack

- **Three.js** for rendering. Pinned to an exact version.
- **cannon-es** for physics. It is pure JavaScript, so offline and `file://` use stays simple. All physics goes through `physics.js`, so it can be swapped for Rapier's `compat` build, which embeds its WASM, if heaps prove unstable.
- **Plain JavaScript** ES modules in `src/`. No TypeScript, no framework.
- **esbuild-wasm** (the WebAssembly build of esbuild, so no native binary: the native `esbuild.exe` is blocked from starting on this machine) bundles `src/` into one classic (IIFE) script, `dist/app.js`. The built file is committed. Opening `index.html` by double-click needs this: browsers block ES-module imports and `fetch` of local files under `file://`, but allow a classic `<script src>`.
- **Animation:** a small in-house tween helper (`tween.js`, about 60 lines, with easing functions). It avoids another dependency and gives exact control over reversing.
- Node 20 or later and npm are the only tools needed. Both are already used for the data generator.

### 3.2 Repository layout

```
index.html              page shell: loads data/data-cube.js, then dist/app.js
styles.css
src/
  main.js               boot, WebGL check, wires modules together
  controller.js         step state machine, snapshots, kiosk timer
  data.js               reads window.DATA_CUBE, derives cube list, display order, layouts
  scene.js              renderer, cameras, lights, shadow floor, resize
  cubes.js              InstancedMesh, per-instance colour, blending modes
  physics.js            cannon-es world, floor, walls, cursor repulsion, headless settle
  rotate.js             drag-to-rotate of the cube group, spring back
  labels.js             axis titles and time arrow
  tween.js              tween and easing helpers
  theme.js              light/dark page theme, eased as one value
  network.js            the intro's background network of wireframe cubes
  steps/                one module per step (data, categorise, sort, arrange, insight, finale),
                        each exporting enter(), exit() and reverse()
  ui.js                 caption bar, buttons, progress, live region
  config.js             durations, sizes, palette, copy, physics constants
  audio.js              (stretch)
dist/app.js             built bundle (committed)
data/data-cube.json     generator output (source of truth)
data/data-cube.js       the same data as `window.DATA_CUBE = {...}`
assets/                 logo lock-up PNG, logo-dots.json, NOTICE for brand assets
scripts/
  generate-data-cube.mjs  simulate the cube (and seed search)
  check-story.mjs         assert the narration's claims on the data
  check-palette.mjs       colour-blind and contrast check of the palette
  extract-logo-dots.mjs   measure the 26 symbol dots from the lock-up PNG
.github/workflows/check.yml  build, run checks, fail if dist/ is stale
docs/
```

The current `preview/` folder is a review tool only. It is deleted once the Arrange step (M4) replaces it.

### 3.3 Build and run

- `npm run build` bundles to `dist/app.js`. `npm run dev` rebuilds on change.
- `npm run data` runs the generator, then `check-story`, and writes both data files only if the checks pass.
- `npm run check` runs the build plus all check scripts.
- **Local use:** double-click `index.html`.
- **GitHub Pages (deferred):** not enabled, as the repository is private and there is no launch planned. When it is wanted, it would be served from the `main` branch root. The workflow does not deploy anything. It fails if the committed `dist/app.js` does not match a fresh build, so a stale bundle cannot reach Pages unnoticed.

## 4. Layout and visual design

### 4.1 Axis geometry

| Axis | Direction in 3D | Order |
|---|---|---|
| **Species** | y, vertical | Display order (5.2): the most widespread species at the bottom and the specialists at the top. |
| **Time** | x, left to right | Early to late. The arrow points right. |
| **Location** | z, front to back | Grouped by habitat type, so each habitat is a contiguous band. |

The three faces are:

| View | Look along | Shows | Matches sketch |
|---|---|---|---|
| Insights 1, side face | x | location (horizontal) × species (vertical) | page 7 (species up, habitat across) |
| Insights 2, top face | y | time (horizontal) × location (vertical) | – |
| Insights 3, front face | z | time (horizontal) × species (vertical) | page 6 (year along the front edge) |

Time reads left to right in both views that contain it.

### 4.2 Page layout

The 3D canvas fills the whole page, and the caption sits over its lower part:

```
+------------------------------------------------------------+
|                                                            |
|                       3D scene                             |
|        (tag lines and labels point at cubes)               |
|                                                            |
|  [ STEP TITLE ]  narration, two to four lines    ▪ ▪ ▪ ▫ ▫  |
|  Simulated data.                               Back   Next |
+------------------------------------------------------------+
```

- The caption is HTML, not part of the 3D render, so its text is selectable and readable by screen readers. The camera frames the scene in the part of the page above the caption (the canvas is larger than the stage and the view is offset), so cubes can pass behind the caption. Only the three axis titles and the time arrow live in the 3D scene.
- The title is capitals in square brackets, about as tall as the narration beside it. The footnote is bottom left, the buttons bottom right.
- Progress at the right: one mark per step. The three Insight steps also show "1 · 2 · 3" under the title.
- The title, the footnote and the narration each fade and slide left when the step changes. On a new step the order is the title, then the tags and labels, then the narration (7.9).
- **Intro (black background, white text):** the sentence "Decoding nature reveals its stories." large and centred over the network, with the UKCEH logo below it. The sketch's four words (beautiful, intuitive, captivating, inspiring) are design aims for the team, not display text.
- **Conclusion:** the same sentence as a title alone, in capitals and brackets, centred at the bottom, with no narration.
- **Finale:** the logo lock-up on black, a small credit link in place of the caption ("Design and implementation by Tom August"), and **Restart** in place of Next.

### 4.3 Look

- **Background and text:** steps 1 to 7 use a white background (`#FFFFFF`) with black text (`#000000`). The intro and the finale use a black background with white text. Either pairing gives 21:1 contrast. The page background, caption bar, buttons, focus ring and canvas clear colour all switch together, through one CSS variable that the controller tweens (so the DOM and the 3D scene always match).
- **Arial:** step title in bold, narration in regular, "Simulated data." as a smaller footnote. Type is never stretched, squashed or over-tracked.
- Cubes are lit by a soft hemisphere light plus one directional key light. A shadow-only floor (`ShadowMaterial`) gives soft contact shadows, so cubes sit on the white page instead of floating. The floor itself is invisible.
- Cubes have no outline: they are plain shaded boxes, and the lighting alone shows their shape (an outline was tried and removed at review, because it looked wrong as each cube took its colour).
- Tone: short sentences, decisive, no hedging, no exclamation marks, no capitals except acronyms.

## 5. Data

### 5.1 Contract

Input: `data/data-cube.js`, which sets `window.DATA_CUBE` and is produced by `scripts/generate-data-cube.mjs`.

```
meta:    { version, size, seed, axes: ["species","time","location"],
           habitatTypes, habitatOf[location], displayOrder[species], note }
species: [{ id, specialist, rarity, timeDetection[], locationPreference[] }]
data:    data[species][time][location] = 0 | 1
```

Generator tasks (M0):

- Rename the output to species/time/location.
- Write `data-cube.js` next to the JSON.
- Add `meta.version` and `meta.displayOrder`.
- Tune the parameters so the story holds (8.1).
- Add `--seed auto`: the generator runs many random iterations (seeds 1, 2, 3 and so on, up to a limit of 10,000) and keeps the first one that passes `check-story`. The winning seed is written into the data file, so the same cube can be reproduced. This is the same method as the original model, where several random runs were tried until one fitted the story, but now automatic.

### 5.2 Display order

`displayOrder` sorts species by the number of locations they occur in, most widespread first. The bottom sheet of the cube is then the most widespread species and the specialists sit at the top. Insights 1 (location × species) then reads as a staircase, from wide to narrow. Colours follow the species, not the position (10).

### 5.3 Size

- The cube is always n × n × n, and everything derives from `meta.size`.
- Supported sizes are 5 to 12. That keeps the cube count under about 400, which cannon-es heaps handle at 60 fps on integrated graphics, and within the 12-colour palette.
- The app shows a console warning outside this range but still runs.
- At 9³ the data has about 150 cubes. That is enough to feel like "data" and to fill the faces. 10³ runs smoothly; 12³ (about 400 cubes) shows a very small lag on a laptop. The default stays 9.

## 6. Step controller

### 6.1 Rules

- Linear states: `intro → data → categorise → sort → arrange → insight1 → insight2 → insight3 → conclusion → finale`.
- Each step module exports `enter()` (play forward from the previous step), `reverse()` (play back to the previous step) and `exit()` (clean up).
- **Deterministic transitions** (recolour, rotation, flight to grid cells, finale) are tweens, and reverse plays the same tween backwards.
- **Physics transitions** cannot be rewound. When the user leaves a step forward, the controller stores a **snapshot** of every cube's position, rotation and colour. Back eases the cubes from wherever they are to that snapshot over about 1.2 seconds, then hands them back to physics. Going forward again runs the physics fresh.
- A step is **ready** when its scripted motion has finished. Physics can still be settling. Next and Back are disabled until the step is ready, then enabled.
- Spawn positions use a seeded random generator, so a given data file always starts the same way and reviews are reproducible.
- **Restart** eases everything back to the intro state without reloading the page.

### 6.2 Timing (starting values, tuned in review)

| Transition | Forward | Back |
|---|---|---|
| Intro → Data | Background eases from black to white over 1 s, then the cubes pour into the middle of the floor as a stream over 2 s, ramping up for the first second and down for the last. Ready 0.5 s after the last release. | Cubes rise out of view (1.2 s), then the background eases to black |
| Data → Categorise | Random-order recolour, 2 s total, each cube 0.3 s | Recolour to black, 1 s |
| Categorise → Sort | An explosion throws the cubes up and out for 0.5 s and holds them frozen in mid air for 0.5 s; then they are pulled to their heap spots and pile up, for 3 s, plus up to 7 s for stragglers. Ready 4.5 s after the pull starts even if some cubes are still on their way (the pull carries on) | Ease to the Categorise snapshot, 1.2 s |
| Sort → Arrange | Each heap lifts in turn and its cubes fly into their sheet of the cube, 3.5 s in all | Ease to the Sort snapshot, 1.5 s |
| Arrange → Insight 1 → 2 → 3 | The camera pulls back a little (0.6 s), then the cube turns while the camera draws in to the face (2.5 s in all), with the colours changing over 1 s | Same, reversed |
| Insight 3 → Conclusion | As Back from Insight 1 to Arrange, without the axis titles: pull back, turn to the arranged angle, solid colours | The Insight 3 turn |
| Conclusion → Finale | The cubes not needed fade to white and shrink (0.9 s). Then the background eases from white to black while the 26 chosen cubes fly to the logo dots and the camera squares up (3 s), then the lock-up fades in (1 s) | Lock-up fades out (0.5 s), cubes fly back and the page goes white (2.5 s) |

Within a step, the title fades in over 1.4 s, the tags start 0 s after that, and the narration follows the last label (7.9).

### 6.3 Kiosk mode (built, `src/kiosk.js`)

- Turned on by the "Play automatically" link on the opening screen, or by `?kiosk` in the address (which starts at once and is called event mode). That is a mode switch, not step state, so links still start at the beginning.
- Each step is left once **everything on it has appeared**: the step has finished, and its title, tags, labels and caption are all showing. It then stays for `KIOSK.base` (3 s) plus 0.25 s a word of the caption, never less than 5 s or more than 20 s. The opening screen stays 5 s and the last step 8 s, then the story starts again from the opening screen. All in `config.js`. Under reduced motion every stay doubles.
- On the steps where the cursor pushes cubes (Data, Categorise, Sort), once they are complete a virtual cursor sweeps slowly over the floor, drawn as a faint ring, so passers-by see that the cubes react.
- A status line at the bottom says "Playing automatically. Click, touch or press a key to take control."
- Any key press, click, touch, scroll or movement of the pointer leaves kiosk mode and hands control to the visitor. A pointer movement has to be more than 4 px, and is ignored for 3 s after it starts, so moving the mouse away from the link does not undo it.
- **Event idle return:** in event mode only, if the visitor then does nothing for 90 s, the page returns to the opening screen and plays itself again. After the link, taking over is for good.
- The kiosk presses Next and Restart through the same step controller as the buttons, so it cannot run ahead of an animation.

## 7. Step behaviour

| # | Step | Forward | Interaction |
|---|---|---|---|
| 0 | Intro | The sentence and logo fade in on black, over a slowly drifting network of small wireframe cubes joined by thin lines (7.8). | Next. |
| 1 | **Data** | Black cubes pour from above the frame in a narrow stream into the middle of the floor, over 2 s. They land in a heap and tumble outward across the floor. One tag on a cube at the top right of the pile. | Cursor or touch repels cubes. |
| 2 | **Categorise** | Each cube takes its species colour, in random order. Cubes stay put. One tag. | Cursor repels cubes. |
| 3 | **Sort** | The cubes are thrown apart and frozen in the air, then pulled to one spot per species, spread across the floor in display order (in two alternating rows), and pile into heaps there. Tags on the back left and back right heaps. | Cursor repels cubes. |
| 4 | **Arrange** | Each heap lifts in turn and its cubes fly to their cells in that species' sheet. The wireframe box fades in. One tag at the corner of the cube ("Each observation can be placed in the data cube according to where it was (Location), when it was (Time), and what it was (Species)."), bringing in all three axis titles. | Drag to rotate. Spring back. |
| 5 | **Insights 1** | The cube turns to the side face. Boxes round the top two rows (the specialists) and the bottom two (the generalists), each with a label. | Drag to rotate. Spring back. |
| 6 | **Insights 2** | Turns to the top face. Cubes are opaque and coloured by how many are in their column, blue to red (7.4). Two tags off the sides of the box. | As above. |
| 7 | **Insights 3** | Turns to the front face. Boxes round the bottom and top two rows with labels. | As above. |
| 8 | **Conclusion** | The cube turns back to its arranged angle with no axis titles or tags. The title alone is shown at the bottom. | Drag to rotate. Spring back. |
| 9 | **Finale** | Unneeded cubes fade out. The background eases to black. 26 randomly chosen cubes fly to the 26 logo dots, round off into discs and turn white. The lock-up fades in around the symbol. | Restart. |

Every cube is the same object throughout and belongs to one cell (species, time, location) from the start. It is visibly the same data point from the moment it falls to the moment it lands in the cube.

### 7.1 Physics

- cannon-es world with a fixed step of 1/60 s. One world unit is one cube edge. Gravity starts at -30 units/s²: falls feel brisk at this scale. Tune by eye.
- Cube bodies are boxes with friction 0.4 and restitution 0.2, so they tumble and settle like small plastic blocks. Sleeping is on, so settled cubes cost nothing.
- **Bounds:** an invisible floor and four low invisible walls just outside the frame, so cubes never leave the view.
- **Cursor repulsion:** raycast the pointer onto a horizontal plane at cube-centre height. Each frame, bodies within 4.5 units of the pointer are accelerated away from it, with a strength that falls off with the square of the distance, plus a small upward acceleration and random spin so they hop and tumble. The push is an acceleration, scaled by the frame time, so it feels the same at any frame rate. A cube at rest needs a push of more than about 12 units/s² (friction) to start moving, so far cubes stay still and near cubes are driven away. Woken bodies go back to sleep naturally. Touch (stretch) uses the touch point.
- **Explosion before Sort:** cubes left in a pile on the floor can wedge against each other. So Sort begins with every cube thrown up and away from the middle of the pile (`EXPLODE` in `config.js`; cubes low in the pile get extra lift), after 0.5 s damped to a stop with gravity cancelled, so they hang in mid air for 0.5 s, spread out and off the floor. Then gravity returns and the pull starts.
- **Steering in Sort:** each cube gets a force toward its heap spot that weakens on arrival, so the heaps form by physics. A cap on speed prevents flying. A cube within a cube-length of its heap spot is released (only slowed), so it settles where it is. The two rows of heap spots are shares of the floor's depth (`SORT.rowZ`, `SORT.zigzag`), so every spot is on the floor at every size: fixed distances put the spots outside the wall on the small cubes, and the pull then pinned cubes against the wall, held up by friction, until the pull ended. The step is ready 4.5 s after the pull starts even if a few cubes are still on their way; the next step takes over from wherever they are.
- **Headless settle:** `physics.js` can step the world without rendering until every body sleeps (capped at 600 steps). Reduced motion uses this (11), and so does any end state that must be known in advance.

### 7.2 Arrange

- Cell pitch is 1.25 units, so the gaps between cubes show the grid, as on the physical cube. The bounding box is pitch × n on each side, centred on the cell lattice.
- When the heaps lift, the bodies switch to kinematic, tween along a short arc to their cells, and then leave the physics world.
- **Rotation:** dragging rotates the cube *group* (cubes, box and labels), not the camera, so the face views and labels stay simple. Rotation is free while dragging. On release it springs back to the step's target orientation (critically damped, about 0.6 s). No zoom.

### 7.3 Axis labels

- The three titles of the arranged cube, "Time", "Species" and "Location", are flat text (a canvas texture on a plane) lying along edges of the cube: Time under the arrow along the front, Species up the left edge of the front, Location along the bottom of the right side. They turn with the cube, so they read as part of the object. They are 50% grey, bold and large (`src/axistext.js`). On the Arrange step each fades in with its own tag.
- In a face view the three titles and the arrow fade out and two upright HTML titles take their place, in the same style (large, bold, 50% grey), below and to the left of the face. The vertical one reads upwards.

### 7.4 Face views (Insights)

Seen face-on, cubes in a line of sight hide each other, so each face has to show counts. As built:

- **Which face shows what.** The cube is turned (not the camera). Insights 1 is the side face: location across, species up, with time along the line of sight. Insights 2 is the top face: time across (left to right), location up and down, with species along the line of sight. Insights 3 is the front face: time across, species up, with location along the line of sight. Each is a rotation of the cube about its middle: yaw 90° for the side, tilt 90° for the top, none for the front.
- **Near-orthographic view.** The camera does a dolly zoom: its field of view narrows from 35° to 3° while it backs off from about 32 to about 280 units, which keeps the cube the same size on screen and flattens the picture into a grid. It does not swap to a true orthographic camera, because a swap would jump. The face fits the view with 45% to spare (`FACE.margin`) for its two titles.
- **Turning between faces.** The camera first pulls back about 45% of the way to the wide view (0.6 s) so the turn reads as 3D, then the cube turns while the camera draws in (2.5 s in all). The spring that turns the cube is softer (`ROTATE.spring`).
- **Insights 1 and 3: see-through cubes in species colours.** Cubes are 60% opaque, so the more cubes lie along a line of sight the darker the cell. Along any line of sight in these two faces the overlapping cubes are of one species, so they have one colour whatever the order.
- **Insights 2: colour by count.** Species mean nothing on this face, and grey tones were hard to tell apart (a see-through version with a stretched tone scale was tried first). Instead every cube is opaque and takes the colour for the number of cubes in its column (the same time and location): a blue to red scale (`FACE.countColours`) from the fewest to the most. The footnote reads "Simulated data. Red means more records, blue fewer." Insights 1 and 3 keep "Darker means more records."
- **Axis titles.** The upright titles for a face are "Location" and "Species", "Time →" and "Location", then "Time →" and "Species". The light-grey box stays as a border round the grid.
- **Drag and snap back.** The cube can still be dragged round; it springs back to its face.
- **Back** goes to the face before, and from the first face to the arranged cube.

### 7.5 Camera and framing

- Perspective camera at a 35° field of view for steps 0 to 4. Steps 0 to 3 look at the floor from a low angle, 10° above horizontal (`CAMERA.elevation` in `config.js`; an earlier version used a raised 38° view). The view is lowered so the cubes settle one third of the way up the screen (`CAMERA.floorHeight`), leaving the sky free for the drop. Arrange raises the camera to the height of the cube.
- Framing is fitted from the bounding sphere of the active content (floor area or cube) and the stage aspect, so every size from 5 to 12 fits. The stage is the part of the page above the caption; the canvas itself is larger, and the camera has a view offset so the framing is unchanged by the caption.
- The camera eases between keyframes. The user never moves the camera directly.

### 7.6 Rendering

- One `InstancedMesh` for all cubes, with per-instance colour and opacity. Matrices are copied from the physics bodies each frame while physics runs.
- **No cube outlines:** a darker edge drawn in the cube shader was tried in M1 and removed at M2 review. Cubes are plain `MeshStandardMaterial` boxes.
- Bounding box: `EdgesGeometry`, `#B3B3B3`, 1 px.
- Pixel ratio capped at 2. Antialiasing on. Shadow map 1024 px, from the key light only.
- The cube geometry carries a morph target to a sphere for the finale (7.7).

### 7.7 Finale

- `scripts/extract-logo-dots.mjs` finds the 26 dots (radii 17, 31 and 41 px: 6 inner, 8 middle, 12 outer) in the lock-up PNG and writes their centres and radii, in image pixels, to `assets/logo-dots.json`. Because they come from the same file as the lock-up, the dots line up with the image exactly.
- The finale begins from the conclusion's view, so as the cubes fly the cube turns square on and the camera dollies to the face view, which is the view the symbol is placed for. The symbol is placed in screen space where the lock-up will appear.
- Choosing which cubes fly: 26 cubes are picked at random (a different set each time) and paired with the dots so the total flight distance is as short as possible (the Hungarian algorithm). The other cubes first fade to white and shrink away, before anything else moves.
- In flight, each cube morphs from box to sphere, scales to its dot's radius, rotates to face the camera and fades from species colour to white. In orthographic view the result is flat white discs identical to the white logo symbol on black.
- The lock-up image then fades in over the discs. The symbol in the image and the discs coincide, so the hand-over cannot be seen. The discs are removed after the fade.
- The tagline is also present as text in the live region for screen readers.
- Reverse: the image fades out, the discs reappear, and every cube returns to its cell, regaining its colour, while the cube turns back to the conclusion's angle.
- The final slide has a small credit link in place of the caption.

### 7.8 Intro network

- About 80 small wireframe cubes, each joined by thin white lines to its two nearest neighbours (nearest as seen on screen, so the lines are mostly short). Cubes are 0.5 to 1 unit across at a depth of 45 units, at 10% opacity.
- The network hangs in the camera's own space, so it fills the screen behind the title at any window shape and does not move with the floor camera.
- Everything moves slowly: each cube sways by about 3.5% of the view on its own cycle of 30 s or so and turns slowly on its axes, and the whole cloud rocks gently back and forth, which gives it depth. The speed is a few pixels per second.
- Layout, sizes and cycles are seeded, so the network looks the same each time the page loads.
- **Cursor:** cubes near the cursor are pushed away from it across the screen and tumble, as the floor cubes are on later steps. Nearness is measured on the screen (within a third of the screen height), and the push is an acceleration with the same squared falloff as the floor cubes. Pushed cubes spring back (spring 5, damping 3.5) and stop tumbling after about 2 s, and a push is capped at 14 units. The lines stay joined to the cubes, so they stretch as cubes are pushed.
- **Drawing order:** the network is drawn first and ignores the depth buffer. It hangs in front of the camera, and the invisible floor (which writes depth) used to hide the parts of it that lay behind the floor as seen from the camera, cutting lines off. The floor's shadow material no longer writes depth either.
- On Next the network fades out over the same 1 s, and with the same easing, as the page eases to white. On Back to the intro it fades back in. It is not shown on the finale. It does no work while hidden.
- Reduced motion (M7): the network stays but stops moving.

### 7.9 Tags, labels and caption order

- A **callout** is a tag line and a label (`src/callout.js`). A step lists them in `callout` in `config.js`; each has a `target` (a cube picked by a rule: the top right of the pile, a heap, the left- or right-most cube, the lowest, a corner of the cube, a pair of rows, or the sides of the box) and its text. They play one after another.
- The line grows out from a point a little away from the target (so it never hides it) over 0.8 s; then the label fades in over 0.6 s; then the next callout begins (after an optional delay). Rows and the corner use a rectangle that traces itself. Everything follows its cube every frame, so it moves if the cube moves, and fades out in 0.2 s when Next or Back is pressed.
- The line's direction and length are chosen so the label covers no cubes and stays on the stage; the label also has a halo in the page colour.
- **Caption order.** The title fades in first, then the callouts, then the narration text, so that people see the tags before they read on. A step with no callouts shows the narration straight after the title. Steps that wait for physics (Data, Sort, Arrange, Insights) hold their title or their tags until the step is ready.
- Gaps and wording are in `config.js` (`CALLOUT`, and `callout` on each step).

## 8. Narrative copy

Brand voice: short sentences, decisive, no hedging, no exclamation marks. Each claim has to be visible in the data on screen (8.1).

The wording of every title, narration, tag and label lives in `STEPS` in `src/config.js`. It is the single source and is edited there; this document does not repeat it.

### 8.1 Data-story fit

`check-story.mjs` asserts each claim **on the face views**, not on raw counts, because the viewer reads the faces:

| Face | Assertion |
|---|---|
| Species × location | At least two species occupy two-thirds or more of locations. Each specialist occupies at most one habitat band. |
| Location × time | Every time step and location has at least one record. Records summed over species rise across time: a Spearman correlation of at least 0.9 between time and records, and the last third has at least twice the records of the first. Every location has more records in the last third than the first, and at least 70% of locations have 1.5 times as many. The busiest cells (at least 3 records, or one under the maximum) are all in the later half of the time axis. |
| Species × time | Total records rise (as above). Specialist records in the last third total zero. Specialist records in the first third total at least 4. |
| Whole cube | Cube count is between 15% and 28% of cells (5.3). Every species has at least one record. |

The location × time checks are strict because Insights 2 colours every column of the top view: a gradient from blue to red across time has to be visible in every part of the picture. About 4% of random iterations pass at 9³. `npm run data` refuses to write data that fails, and `--seed auto` tries iterations until one passes (5.1). A fixed seed that fails is reported with the assertions it broke. The copy stays fixed while the data changes.

## 9. Branding

### 9.1 Assets

- The finale uses `UKCEH_Logo_Tagline_Stacked_White_Data.png` (white logo, lime tagline, transparent background) on black. `UKCEH_Logo_Tagline_Stacked_Black_Data.png` has the same 2506 × 868 px layout, so either file gives identical dot positions. Dots are measured from the alpha channel, not from colour. Files used are copied into `assets/`.
- PNG only, so it is drawn at no more than half its pixel size (no wider than 1250 CSS px) to stay sharp on high-density screens.
- Clearspace is the height of the "H" on all sides. The minimum size is 30 px. The lock-up is used unaltered: the guide fixes the relationship between logo and tagline.

### 9.2 Tagline contrast

The lock-up's tagline is lime (`#DBFD52`). On white that is about 1.1:1 contrast, well below the guide's 3:1 minimum for large text. On black it is about 18:1. The guide's preferred use is the white logo on black. So:

- The intro and the finale use a **black background**, and the finale uses the **white lock-up** (`UKCEH_Logo_Tagline_Stacked_White_Data.png`).
- Steps 1 to 7 use the white background, because the cubes are black on white, as designed.
- The lock-up is used unaltered. The tagline is also in the live region as text for screen readers.

### 9.3 Licence

The repository's MIT licence covers the code. `assets/NOTICE` and the README state that the UKCEH logo and brand assets are © UKCEH, are not covered by the MIT licence, and are used with permission.

## 10. Species colours

From the brand palette by exhaustive search. Every nine-colour subset of the 15 brand colours (core plus the data-visualisation-only colours) was scored by the smallest CIELAB ΔE between any two colours under normal vision and simulated protanopia, deuteranopia and tritanopia (Machado 2009). Colours under 1.3:1 against white (`#D6EAE6`, `#F5ED5A`) were excluded from the first nine.

| Species id | Colour | Contrast on white |
|---|---|---|
| 0 (specialist) | `#E76124` orange | 3.4 |
| 1 (specialist) | `#133B64` navy | 11.4 |
| 2 | `#90A968` green | 2.6 |
| 3 | `#F4C03D` amber | 1.7 |
| 4 | `#477AE2` blue | 4.1 |
| 5 | `#7F1518` maroon | 10.4 |
| 6 | `#67CCEA` sky | 1.8 |
| 7 | `#D7B7AA` clay | 1.9 |
| 8 | `#CBE0AB` pale green | 1.4 |
| 9 to 11 | `#DB1F26`, `#F5ED5A`, `#CFBCD5` | sizes 10 to 12 only, chosen to keep the smallest difference as large as possible (ΔE 8.6 across all 12). |

- The worst pair is clay and pale green under deuteranopia, ΔE 13.7, which is above the roughly 10 needed to tell colours apart side by side.
- The specialists get the two most distinct colours, because the Insights follow them.
- Pale colours are the weakest on white; the shading and the soft shadows keep their shape readable. Check on a projector during review.
- Colour is never the only cue. Species are also separated by heap (Sort) and by sheet (Arrange and Insights).
- The palette is an ordered list in `config.js`. `check-palette.mjs` reruns the ΔE and contrast checks if the palette changes.

## 11. Accessibility

Built, except the manual screen-reader pass (NVDA, VoiceOver), which still has to be done by a person.

- **Keyboard.** Next, Back and Restart are real buttons, reachable by Tab, with a visible focus ring. Enter and Space press the focused button. Global shortcuts that never conflict: **Page Down** or **N** for Next, **Page Up** or **B** for Back. On the steps where the cube turns (Arrange, the Insights, the conclusion) the canvas takes focus with Tab, and the **arrow keys** turn the cube while held; when they are let go it springs back (`ROTATE.keySpeed`). The canvas has `role="application"` with the hint "Use the arrow keys to turn it" in its label on those steps, and `role="img"` elsewhere.
- **Screen readers.** A hidden live region (`#announcer`) is read in the same order as the screen: the step's title (with "part 2 of 3" on the Insights), then each tag and label as it comes in, then the caption, then the plain-text description of the pattern for an Insight (`summary` in `config.js`). The canvas has an `aria-label` for the current scene. The tags and the visible title are not announced twice.
- **Reduced motion: switched off.** A reduced version is built (`src/motion.js`) but the page deliberately does not follow `prefers-reduced-motion`, because embedded browsers report it and played the animation too fast to follow. It is used only with `?motion=reduced` in the address. When on: no animation lasts longer than 0.4 s, so moves become quick fades; the text fades without sliding; the cube cuts to its new angle; the drop and the sort are run out of sight (stopping as soon as the cubes are at rest) and the cubes then fade in; there is no explosion; the cursor does not push cubes; the intro network holds still; the tags draw quickly. Whether to follow the system setting by default is a decision to revisit before any public launch.
- **No WebGL.** The page shows a note, and every step still gives its title and caption; the words of the step's tags and labels are shown as a plain list where the 3D view would be. Next and Back change the page colour and the words.
- Text contrast meets the guide's 5:1 (black on white, white on black). Large text and controls meet 3:1. See 9.2 for the tagline. Kiosk mode (6.3) is not built yet.

## 12. Decisions to confirm during the build

No questions are blocking. These are design proposals that get confirmed at their milestone review:

1. **Insight face rendering (7.4):** multiply blending and the neutral tint for location × time. Review at M5.
2. **Timing values (6.2) and physics constants (7.1):** starting values, tuned by eye at M1 to M3.
3. **Pale species colours on white (10):** check on a projector or at low brightness at M2.

## 13. Milestones

Each milestone ends with a review. Each step milestone includes the step's **reverse** animation and its narration.

| Milestone | Content | Done when |
|---|---|---|
| M0 (built) | Generator changes, `check-story` with seed search, `check-palette`, scaffold, esbuild, pinned Three.js and cannon-es, page shell, caption bar, controller with snapshots, keyboard shortcuts, live region, CI check | Double-click and Pages both load the shell, offline. Next and Back cycle through placeholder steps. `npm run check` passes. |
| M1 (built) | **Data**: drop, floor, walls, shadows, cursor repulsion | Cubes fall and settle at 60 fps. Repulsion feels physical. Back lifts them away. |
| M2 (built) | **Categorise** with palette | Recolour in 2 s or less. Back returns to black. |
| M3 (built) | **Sort**: steering and heaps | Heaps are stable and distinct. Back restores the Categorise scatter. |
| M4 (built) | **Arrange**: sheets, box, labels, rotate and spring back | Heaps rise into sheets. Rotation feels good. `preview/` deleted. |
| M5 (built) | **Insights** ×3: turns, dolly zoom to a flat grid, see-through cubes, key | Each face shows its claim at a glance. |
| M6 (built) | **Finale**: dot extraction, flight, morph, lock-up, Restart | The hand-over to the logo cannot be seen. |
| Polish (built) | Caption along the bottom with the fade order; tags and labels on Data, Categorise, Sort, Arrange and the Insights; flat axis titles; explosion before Sort; softer Insight turns; Insights 2 coloured by count; conclusion step; random logo cubes and fade-out; credit link; stricter data checks | Reviewed by the project owner and in user testing. |
| Accessibility (built) | Keyboard turning, tags and labels announced in order, reduced motion, no-WebGL text view | Checked in a browser; the manual screen-reader pass is still to do. |
| Kiosk (built) | Kiosk mode (6.3): the link, `?kiosk`, dwell times, virtual cursor, hand-over on input, idle return | The story loops with no clicks, and any input hands control back. |
| M8 | README, memory check over repeated Restarts (GitHub Pages deferred) | Runs on the latest Chrome, Edge, Firefox and Safari. 9³ runs smoothly on a laptop (confirmed by the project owner). |
| Selectable size (built) | `npm run data:all`, `data/load-data.js`, `?size=N`, checks and tests for every size | Every size from 5 to 12 passes the story checks and runs the whole animation. |
| Stretch | Mobile (13.1), sound, embed mode, localisation | – |

### 13.1 Stretch plan

- **Selectable size (built):** `npm run data:all` makes one story-checked cube for each size from 5 to 12 (`data/data-cube-N.*`, with 9 as `data/data-cube.*`); `?size=N` picks one (default 9) through `data/load-data.js`, which writes a script tag for that file, so `file://` keeps working. Sizes outside 5 to 12 fall back to 9. Phones will default to 7 (mobile work).
- **Mobile (built):** `src/device.js` and `data/load-data.js` detect a phone (touch screen, short side 500 px or less). Landscape only, with a "please turn your phone" prompt over the paused animation when held upright (and a landscape lock where the browser allows it). Default size 7 on phones. Touch drag repels and rotates (`touch-action: none`). A compact caption band on short screens, scaled callouts, quality tiers with a frame-time monitor, no swipe navigation, plain web (no installable page). `src/quality.js` starts a phone a tier down (pixel ratio, shadow map) and steps down again if frames average slower than 28 fps; it never steps back up. Target: a mid-range Android phone at 30 fps (not yet tried on a real device).
- **Sound (built):** `src/audio/`. All synthetic, no samples or files: Tone.js draws each sound once, offline, into an audio buffer (`synth.js`), and plain Web Audio plays the buffers (`player.js`), so playing costs almost nothing and cannot stutter the animation. Sounds: cube-on-cube clack and cube-on-ground thud (from the physics contact speed, `physics.onImpact`), a tag pip, a slide glide (rising for Next, falling for Back), a cube-turn sweep and the finale arpeggio. A quiet bed per step (a pad in A minor, a breath of air, sparse bell notes) loops seamlessly and crossfades between steps; it ducks 2 dB under hard impacts and fades out under the finale. Levels are fixed by scaling each buffer to a target peak or RMS. The first tap or key press unlocks audio (browsers require it) and starts the drawing in the background. A Sound button mutes; kiosk mode starts muted, and a visitor's own choice is never undone. `?audiolog` logs the sound events instead of playing them, and `scripts/capture-video.mjs` renders them into the video's soundtrack. Not yet tried on a real phone: drawing the buffers costs a few seconds of CPU at the start.
- Dropped: tooltips, poster export, a Rapier physics swap.

### M1 as built

- The floor is sized from the cube count at 6 square units per cube, 1.5 : 1 wide (about 37 × 25 units for 164 cubes), so the cubes read as small. The camera is fitted to it at any window shape, and cubes are released from just above the top of the view. The view is then lowered so the floor sits one third of the way up the screen.
- Cubes pour into the middle of the floor as a stream. They are released down several side-by-side lanes (a sunflower spiral, 1.25 units apart) at 28 units/s, so no cube starts inside another: cubes in one lane are at least 1.8 apart at release, and the number of lanes follows the cube count (11 lanes for 164 cubes). Release order, spin and sideways drift are seeded, so a given data file always drops the same way. If a frame is slow, cubes released during it start part-way down their fall, so the stream stays smooth. The step is ready 0.5 s after the last release. Back lifts the cubes out of view over 1.2 s, then the page eases to black.
- The floor shows only the soft shadows (cubes had a thin darker edge at first; it was removed in M2). Cubes start near-black (`#111111`), not pure black, so the lighting still shows their shape.
- Repulsion was tuned in a simulation (a resting cube next to a stationary cursor is driven out to the edge of the cursor's reach, about 6 units; a quick sweep nudges it 1 to 5 units). Final values are set by eye at review.
- `?debug` on the page address exposes the app as `__dataCube` in the browser console, for testing.
- Verified in Edge from `file://`: 164 cubes released, all settle inside the walls; repulsion pushes only nearby cubes; Back lifts everything away and the cubes drop again on Next. Headless software rendering ran at 19 fps, so the 60 fps target still needs checking on a real GPU.

- The intro network is built (7.8): `src/network.js`, tuned in `NETWORK` in `config.js`.

- Release height is worked out from the real width of the stream: the lowest corner of a cube released anywhere in it must be above the top of the view, plus a margin of 1.5 units (about 23 units up for the default cube), so cubes are never seen appearing. A test frame 0.02 s after the release starts shows no cube in view.
- Shadows fade in as the cubes fall: none at the release height, full strength within 3.5 units of the floor. The shadow map cannot be transparent, so each cube's shadow is dithered (a fraction of its pixels are dropped, by height) and the map's soft filtering turns that into a lighter shadow.
- `?debug` also gives `pause()` and `advance(seconds)`, which stop the animation loop and step it by hand, so a frame can be captured at an exact time.

- The release rate ramps up over the first second and down over the last (`DURATIONS.dropRamp`, 1 s), so the stream starts and tails off like a pour. The release lasts 2 s (`DURATIONS.drop`), so the two ramps meet and the flow is a triangle that peaks at 1 s at about 164 cubes a second. The default cube has released 1, 7, 20, 46 and 82 cubes by 0.1, 0.3, 0.5, 0.75 and 1 s, and 159 by 1.75 s. A drop longer than twice the ramp leaves a steady flow between the ramps; a ramp longer than half the drop is cut to half. (An earlier version dropped the cubes in 1 s with 0.5 s ramps, which made the stream wider because the lanes are sized for the peak rate.) The lanes are sized for the peak rate, so no cube starts inside another.

- The pour varies at random (`STREAM.variation`, 0.5): the release rate and the width of the stream each wander by up to 50% either way, on slow cycles of roughly half a second to two seconds, on top of the ramps. The width is the number of lanes in use, taken from the inside of the spiral outward, so the stream's area really does change by up to 50%. The release time of each cube is read from the tabulated, randomised flow. When the stream is narrow and the flow is high, a cube waits for a free lane (so no cube is ever released inside another), which flattens the peaks a little and makes the pour end up to about 0.6 s after its planned time. Up to 50% more lanes than the plain pour need are available, so the widest the stream gets is about 5 units from the middle for 164 cubes. Everything is seeded, so a given data file always pours the same way. For the default cube, cubes released in successive 0.2 s windows run 4, 11, 12, 19, 41, 23, 21, 21, 9, 3, using 4 to 14 lanes.

### M6 as built

- **The dots.** `scripts/extract-logo-dots.mjs` (using `pngjs`, which is pure JavaScript) finds the 26 dots of the symbol in the white lock-up image from the transparent pixels and writes `src/logoDots.js`: 6 inner, 8 middle and 12 outer, radii about 17, 31 and 41 px in the 2506 x 868 px image. It reads transparency, not colour, so the black lock-up gives the same dots. The image used on the page is `assets/UKCEH_Logo_Tagline_Stacked_White_Data.png`.
- **Placing the logo.** The lock-up is centred on the stage at up to 62% of its size, and the world position and size of each dot are worked out from the stage size and the scale of the face view (the camera is still the one from the last Insight). The lock-up is an HTML image laid exactly over the stage; in the browser every disc was within 0.001 pixels of its dot in position and size. The lock-up and the discs move together if the window is resized.
- **Which cube becomes which dot.** The cheapest pairing is found with the Hungarian algorithm (a test checks it against brute force), so the 26 flights are as short as they can be in total. The other 138 cubes fly to the nearest dot and shrink to nothing. If a cube count is lower than 26, each cube takes its own dot and the spare dots appear only with the lock-up.
- **The flight (3 s).** The cubes fly across, turning square to the camera, while the page goes from white to black, the frame fades out and the cubes become solid. They bend from cubes into spheres: each face of the box is cut into 8 x 8 squares so there are enough points, and the shader moves every point towards the sphere by an amount that rises from 0 to 1. They also turn white: the colour fades to black while a white glow rises, so the cubes become flat white discs like the logo.
- **The lock-up (1 s).** It fades in over the discs and then the cubes are hidden (not removed, so Back still has them).
- **Back.** The cubes reappear, the lock-up fades out in 0.5 s, and over 2.5 s the cubes unbend, lose the glow, grow and fly back to their cells while the page goes white; the box and the two Insight titles return.
- **Restart** fades the lock-up out in 0.6 s, clears the cubes, puts the camera back on the floor and brings the black opening screen and its network back. After a Restart nothing from the first run is left over (checked: no cubes, no lock-up, black page, network at full strength).
- Taking a full run in the browser from the first Next to Restart gave no console errors.

### M4 as built

- **Layout** (`src/layout.js`): time runs left to right, species up (display order, so the most widespread species is the bottom sheet and the specialists the top two), location front to back. Cells are 1.25 units apart, so cubes of one unit leave a gap of a quarter of a unit, and the cube floats with its bottom 1.5 units above the floor. Every cube has its own cell (checked by a test).
- **The flight** (`field.arrange`): the heaps lift one after another, bottom sheet first, so every cube is in its cell within 3.5 s; each cube takes 1.5 s, up a 2 to 4 unit arc, turning to sit square. In the cells the cubes are fixed in place and no longer part of the physics (the physics world has no bodies in it). All 164 cubes were within 0.001 units of their cells in the browser.
- **Camera** (`scene.setView`): the camera rises from the floor view (10° above horizontal) to a cube view at 14° over the 3.5 s, looking at a point a little below the middle of the cube so the time arrow and its title fit under it. The size of the cube on screen is the room the cube and the frame need (`CUBE.margin`).
- **The frame** (`src/frame.js`): a light-grey wireframe box, an arrow for the direction of time along the front, and titles for Time, Species and Location. It fades in from 2 s, as the last heaps are arriving. There are no species names or tick numbers. The shadows on the floor fade out as the cubes lift, because the arranged cube floats in space.
- **Rotation** (`src/rotate.js`): drag to turn the cube about its middle (yaw and tilt, tilt limited to 75°). There is no zoom. On letting go a critically damped spring returns it to the angle the step wants, 0.55 radians round and 0.05 tilted, which shows the front and the right-hand side. It springs back the short way if turned more than a half turn, and the spring is solved exactly, so it is steady at any frame rate. In the browser, a drag of 240 px turned it 1.9 radians, and 2.5 s after letting go it was back at rest. Dragging works only on the Arrange and Insight steps (`rotate` in `config.js`); the cursor does not push cubes there.
- **Back:** the frame fades out, the cube turns square, the camera returns to the floor and the cubes ease back to the places and poses they had when Sort ended (1.5 s), where physics takes over again. 164 of 164 cubes returned.
- A first attempt at the camera framing used a sphere round the middle of the cube and clipped the time arrow off the bottom of the screen. The camera now looks lower down (`CUBE.titleDrop`).

### M3 as built

- **Heap spots** (`heapSpots` in `src/steering.js`): one per species, spread across 88% of the floor's width in display order (left to right), in two rows 10 units apart that alternate from heap to heap (z = 0 and z = 10), so neighbouring heaps are at least 7 units apart. A single straight row was tried first: the heaps in the middle built up as walls in the path of the cubes bound for the far heaps, and only about 10% of the cubes reached their own heap in the time.
- **The pull:** every cube is accelerated across the floor towards its heap spot. It builds up over 0.4 s and eases off over 0.6 s of a 3 s main pull. It never drops below 120 units/s² (about ten times the floor's friction), so cubes shove through and keep sliding in until the cubes ahead stop them, and drag (6 per second) caps the speed at about 20 units/s. Within 2 units of the heap spot the pull fades out, so the cubes stop short of the exact middle and the heap spreads into a mound. Without that fade, heaps built up as columns up to 6.5 cubes tall; with it the tallest is about 3.5.
- **Stragglers:** after the 3 s main pull, cubes still more than 5 units from their heap keep being pulled, until no more than 1% of the cubes (one cube, for the default data) are still on their way, with the pull lasting 10 s at the most (it was capped at 5 s at first; the cap was raised at review). The step is ready 0.5 s after the pull ends. In simulation the pull ends at about 3.7 s, so the step takes about 4.2 s, and 164 of 164 cubes finish within 7 units of their heap. A cube that is stuck would make the step last the full 10.5 s.
- **Fixed steps:** the pull is applied before every fixed physics step (`physics.onStep`), not once a frame. Applied once a frame, a slow frame gave a pull ten times too big in one go and the cubes tunnelled through each other.
- **Results:** in a simulation of the whole drop and sort with the default data, 154 to 160 of the 164 cubes finish nearer their own heap than any other, and 150 to 157 within 5 units of it. In the browser 156 of 164 were nearer their own heap and 156 within 5 units.
- **Back:** physics cannot be rewound, so the cubes are eased from where they are back to the poses recorded when the Categorise step ended (1.2 s, with a turn between each cube's two orientations) and then handed back to physics. 164 of 164 cubes came back to within 0.5 units of where they had been, with their colours.
- The cursor still pushes cubes during Sort (the push is a fraction of the pull, so cubes near the cursor are knocked about and then drawn back).

### M2 as built

- Each cube takes its species colour (from the palette in `config.js`, by species id) at its own random moment: every cube's start time is drawn at random (seeded, so the order is the same every time) and the whole sweep finishes within 2 s, each cube changing colour instantly (there is no fade). Cubes keep tumbling if still moving, and the cursor still pushes them.
- Back drains the colours to near-black within 1 s, the same way (each cube switching instantly at its own random moment), and only that: the cubes stay where they are.
- The colour of every cube is part of the snapshot taken on leaving the step, as the spec requires.
- The species colours are clearly distinct on white. The palest (pale green and sky) are the weakest against the page; the shading keeps their shape readable. This still needs checking on a projector.
- `?debug` also exposes `speciesColour`, so a slow-motion version of the step can be run for screenshots.

- The thin dark edges are removed (they looked wrong as each cube gained its colour). Cubes are plain shaded boxes.
- The colour change has no fade: each cube switches instantly at its own random moment.
- A "popcorn" push as each cube took its colour was built, tried at 55% and 165% of the cursor's power, and removed again at review. Cubes now stay where they are while the colours arrive.

### M0 as built

- Generator defaults were tuned from the original script's values: detection over time 0.15 to 1.0 (was 0.2 to 0.9), habitat cut-off 0.3 (was 0.5), species rarity 0.6 to 1 (was 0.5 to 1). With these about 58% of random iterations pass the story checks (about 12% with the original values), and `--seed auto` finds a passing seed within a few tries. The committed cube is seed 1: 164 records.
- Step transitions are placeholders (they ease the page theme and pause 0.4 s). The scene draws only the bounding box, turning slowly. The real steps replace them one milestone at a time.
- The controller moves the visible step on at the **start** of a transition, so the caption changes while the animation plays. Buttons use `aria-disabled` while busy, not `disabled`, so keyboard focus is kept.
- Verified in Edge from `file://`: no console errors; Next, Back, Restart, Page Up/Down and N/B work; the page theme eases black to white and back; the stage height stays constant between steps; the no-WebGL and missing-data messages show.

## 14. Testing

- **Automated:** `npm run check` and CI run a build-staleness check, unit tests (`node --test`: data model, story checks, data loader, step controller, theme, tween, headless physics), `check-story` and `check-palette`.
- **Manual, per milestone:**
  - Run from `file://` (the only way it is run for now).
  - Walk forward and back through every step, including rapid presses (buttons must be disabled until the step is ready).
  - Resize the window during each step.
  - Try 5³, 9³ and 12³ data.
- **Browsers:** latest Chrome, Edge, Firefox and Safari on desktop. WebGL 2 required. WebGL 1 falls back to the text view.
- **Performance:** frame time via the browser's performance panel on an integrated-GPU laptop. Target 60 fps, with 30 fps as the floor at 12³.

## 15. Risks

| Risk | Mitigation |
|---|---|
| Physics cannot be rewound | Snapshots and eased returns (6.1). |
| Heaps jitter or collapse in cannon-es | Sleeping, tuned friction, speed cap. Rapier compat behind the same `physics.js` interface. |
| Faces hide counts | Multiply blending (7.4). Check on the projections (8.1). |
| Pale species colours on white | Shading, soft shadows, projector check. |
| Tagline contrast on white | Black background for the intro and finale (9.2). |
| Stale committed bundle | CI staleness check (3.3). |
| `file://` limits | No runtime `fetch` or module imports. The data is a script file. |
| Data no longer fits the copy after a parameter change | `npm run data` refuses data that fails `check-story`. |
