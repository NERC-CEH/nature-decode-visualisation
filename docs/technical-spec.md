# Technical Specification: Our Planet. Decoded. Data Cube Animation

Status: ready for build (M0). Sources: [scope.md](scope.md), the answers in [questions.md](questions.md), the UKCEH Brand Guidelines (v3, 2026) and logo guide, and the project sketches. The PDFs are kept locally and are gitignored.

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
| Look | Minimalist wireframe. White background and black text for steps 1 to 7. **The intro and the finale are black with white text**, and the background eases between them. Bounding cube edges are a fine light-grey stroke (`#B3B3B3`). |
| Navigation | Next and Back. Back reverses the animation. No skipping. No URL state. |
| Kiosk mode | Auto-play that loops without clicks. |
| Categorise | Random-order recolour, 2 seconds at most. |
| Sort | Physics-driven heaps. No labels. |
| Cursor repulsion | Every step before Arrange. |
| Arrange and Insights | Drag to rotate. No zoom. Snaps back to the intended view on release. |
| Finale | Cubes dissolve into the dots of the UKCEH symbol, then the logo and tagline lock-up appears, with Restart. |
| Species colours | Brand palette, checked for colour-blind safety (10). |
| Tooltips | None. Kept as a future addition. |
| Sound | Stretch goal: plastic clacks on impacts. |
| Hosting | GitHub Pages and local double-click. Fully offline: no CDN. |
| Mobile | Stretch goal. Desktop first. |
| Accessibility | Reduced motion, keyboard navigation, text alternatives (11). |
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
  cubes.js              InstancedMesh, per-instance colour, edge shader, blending modes
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
- **GitHub Pages:** served from the `main` branch root. The workflow does not deploy anything. It fails if the committed `dist/app.js` does not match a fresh build, so a stale bundle cannot reach Pages unnoticed.

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

The layout follows the sketches: the 3D scene above a caption bar.

```
+------------------------------------------------------------+
|                                                            |
|                       3D scene                             |
|                                                            |
+------------------------------------------------------------+
|  STEP TITLE   two or three lines of narration    ▪ ▪ ▪ ▫ ▫ ▫ |
|                                                 Back   Next |
|  Simulated data.                                            |
+------------------------------------------------------------+
```

- The canvas fills the viewport above the caption bar. The caption bar is HTML, not part of the 3D render, so its text is selectable and readable by screen readers. Only the axis titles and the time arrow live in the 3D scene.
- Progress at the right: one mark per step. The three Insight steps also show "1 · 2 · 3" above the narration.
- On the finale, Next becomes **Restart**.
- **Intro (black background, white text):** the title "Data cube", the line "Decoding nature reveals its stories." and Next. The sketch's four words (beautiful, intuitive, captivating, inspiring) are design aims for the team, not display text.

### 4.3 Look

- **Background and text:** steps 1 to 7 use a white background (`#FFFFFF`) with black text (`#000000`). The intro and the finale use a black background with white text. Either pairing gives 21:1 contrast. The page background, caption bar, buttons, focus ring and canvas clear colour all switch together, through one CSS variable that the controller tweens (so the DOM and the 3D scene always match).
- **Arial:** step title in bold, narration in regular, "Simulated data." as a smaller footnote. Type is never stretched, squashed or over-tracked.
- Cubes are lit by a soft hemisphere light plus one directional key light. A shadow-only floor (`ShadowMaterial`) gives soft contact shadows, so cubes sit on the white page instead of floating. The floor itself is invisible.
- Each cube has a thin dark edge (7.6), so pale species colours stay visible on white.
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
- At 9³ the target after tuning is about 120 to 200 cubes. That is enough to feel like "data" and to fill the faces. The current data has 88.

## 6. Step controller

### 6.1 Rules

- Linear states: `intro → data → categorise → sort → arrange → insight1 → insight2 → insight3 → finale`.
- Each step module exports `enter()` (play forward from the previous step), `reverse()` (play back to the previous step) and `exit()` (clean up).
- **Deterministic transitions** (recolour, rotation, flight to grid cells, finale) are tweens, and reverse plays the same tween backwards.
- **Physics transitions** cannot be rewound. When the user leaves a step forward, the controller stores a **snapshot** of every cube's position, rotation and colour. Back eases the cubes from wherever they are to that snapshot over about 1.2 seconds, then hands them back to physics. Going forward again runs the physics fresh.
- A step is **ready** when its scripted motion has finished. Physics can still be settling. Next and Back are disabled until the step is ready, then enabled.
- Spawn positions use a seeded random generator, so a given data file always starts the same way and reviews are reproducible.
- **Restart** eases everything back to the intro state without reloading the page.

### 6.2 Timing (starting values, tuned in review)

| Transition | Forward | Back |
|---|---|---|
| Intro → Data | Background eases from black to white over 1 s, then the cubes pour into the middle of the floor as a stream over 1 s. Ready 0.5 s after the last release. | Cubes rise out of view (1.2 s), then the background eases to black |
| Data → Categorise | Random-order recolour, 2 s total, each cube 0.3 s | Recolour to black, 1 s |
| Categorise → Sort | Cubes slide to their heap spots and tumble in, 3 s | Ease to the Categorise snapshot, 1.2 s |
| Sort → Arrange | Each heap rises in turn and spreads into its sheet, 3.5 s | Ease to the Sort snapshot, 1.5 s |
| Arrange → Insight 1 → 2 → 3 | Cube rotation plus camera change, 1.5 s each | Same, reversed |
| Insight 3 → Finale | Background eases from white to black while the cubes fly to the logo dots (3 s), then the lock-up fades in (1 s) | Same, reversed |

### 6.3 Kiosk mode

- Turned on by a "Play automatically" link on the intro, or by `?kiosk` in the URL. That is a mode switch, not step state, so links still start at the beginning.
- Each step dwells for `4 s + 60 ms per word of narration` after it is ready. After the finale it restarts.
- During the Data, Categorise and Sort dwells, a virtual cursor sweeps gently through the cubes, so passers-by see that they react.
- Any key press, click or pointer movement over the page leaves kiosk mode and hands control to the visitor.
- **Event idle return:** in kiosk mode only, after 90 seconds without input the page returns to the intro and auto-play resumes.

## 7. Step behaviour

| # | Step | Forward | Interaction |
|---|---|---|---|
| 0 | Intro | Title and line fade in on black, over a slowly drifting network of small wireframe cubes joined by thin lines (7.8). | Next. |
| 1 | **Data** | Black cubes pour from above the frame in a narrow stream into the middle of the floor, over 1 s. They land in a heap and tumble outward across the floor. | Cursor repels cubes. |
| 2 | **Categorise** | Each cube takes its species colour, in random order. Cubes stay put. | Cursor repels cubes. |
| 3 | **Sort** | Cubes are steered to one spot per species, in a row across the floor in display order, and tumble into heaps there. No labels. | Cursor repels cubes. |
| 4 | **Arrange** | Each heap lifts in turn and its cubes fly to their cells in that species' sheet. The wireframe box and axis titles fade in. | Drag to rotate. Spring back. |
| 5 | **Insights 1** | The cube turns to the side face. Face rendering starts (7.4). | Drag to rotate. Spring back. |
| 6 | **Insights 2** | Turns to the top face. | As above. |
| 7 | **Insights 3** | Turns to the front face. | As above. |
| 8 | **Finale** | The background eases to black. Cubes fly to the 26 logo dots, round off into discs and turn white. The surplus fades out on the way. The lock-up fades in around the symbol. | Restart. |

Every cube is the same object throughout and belongs to one cell (species, time, location) from the start. It is visibly the same data point from the moment it falls to the moment it lands in the cube.

### 7.1 Physics

- cannon-es world with a fixed step of 1/60 s. One world unit is one cube edge. Gravity starts at -30 units/s²: falls feel brisk at this scale. Tune by eye.
- Cube bodies are boxes with friction 0.4 and restitution 0.2, so they tumble and settle like small plastic blocks. Sleeping is on, so settled cubes cost nothing.
- **Bounds:** an invisible floor and four low invisible walls just outside the frame, so cubes never leave the view.
- **Cursor repulsion:** raycast the pointer onto a horizontal plane at cube-centre height. Each frame, bodies within 4.5 units of the pointer are accelerated away from it, with a strength that falls off with the square of the distance, plus a small upward acceleration and random spin so they hop and tumble. The push is an acceleration, scaled by the frame time, so it feels the same at any frame rate. A cube at rest needs a push of more than about 12 units/s² (friction) to start moving, so far cubes stay still and near cubes are driven away. Woken bodies go back to sleep naturally. Touch (stretch) uses the touch point.
- **Steering in Sort:** each cube gets a force toward its heap spot that weakens on arrival, so the heaps form by physics. A cap on speed prevents flying.
- **Headless settle:** `physics.js` can step the world without rendering until every body sleeps (capped at 600 steps). Reduced motion uses this (11), and so does any end state that must be known in advance.

### 7.2 Arrange

- Cell pitch is 1.25 units, so the gaps between cubes show the grid, as on the physical cube. The bounding box is pitch × n on each side, centred on the cell lattice.
- When the heaps lift, the bodies switch to kinematic, tween along a short arc to their cells, and then leave the physics world.
- **Rotation:** dragging rotates the cube *group* (cubes, box and labels), not the camera, so the face views and labels stay simple. Rotation is free while dragging. On release it springs back to the step's target orientation (critically damped, about 0.6 s). No zoom.

### 7.3 Axis labels

- DOM labels (CSS2D), positioned from the 3D scene: "Species", "Location" and "Time →". They face the camera.
- In a face view, the label of the collapsed axis (the one pointing at the viewer) fades out.

### 7.4 Face views (Insights)

Seen face-on, cubes in a line of sight hide each other. On the current data each face shows 37 to 51 squares for 88 cubes, and about half of them hide two or more. The faces have to show those counts, so:

- **Projection:** after the turn, the camera eases into a near-orthographic view (a dolly zoom: the field of view narrows while the camera backs away, so the framing holds), then switches to a true orthographic camera with no visible jump.
- **Multiply blending ("tinted Perspex"):** in face views cubes are drawn with multiplicative blending and partial tint. On white, one cube reads light and every cube behind it darkens the cell further. This is independent of draw order, so it is cheap and stable, and it echoes the stacked Perspex sheets of the physical cube.
- **Species × location** and **species × time:** each row is one species, so overlaps darken that species' own colour.
- **Location × time:** species collapses, so mixed colours would be meaningless. Cubes cross-fade to a neutral grey tint for this face, and the darkness of a cell shows how many species were recorded there.
- A small key in the caption bar reads "Darker = more records" during the Insights.
- Blending switches back to opaque when the cube leaves the face views (Back to Arrange, or on to the finale).

### 7.5 Camera and framing

- Perspective camera at a 35° field of view for steps 0 to 4. Steps 0 to 3 look at the floor from a low angle, 10° above horizontal (`CAMERA.elevation` in `config.js`; an earlier version used a raised 38° view). The view is lowered so the cubes settle one third of the way up the screen (`CAMERA.floorHeight`), leaving the sky free for the drop. Arrange raises the camera to the height of the cube.
- Framing is fitted from the bounding sphere of the active content (floor area or cube) and the viewport aspect, so every size from 5 to 12 fits, with the caption bar subtracted.
- The camera eases between keyframes. The user never moves the camera directly.

### 7.6 Rendering

- One `InstancedMesh` for all cubes, with per-instance colour and opacity. Matrices are copied from the physics bodies each frame while physics runs.
- **Cube edges:** lines cannot be instanced cheaply, so edges are drawn in the cube's fragment shader instead. `MeshStandardMaterial` is patched with `onBeforeCompile` to darken pixels near each face's UV border. This costs one draw call for every cube.
- Bounding box: `EdgesGeometry`, `#B3B3B3`, 1 px.
- Pixel ratio capped at 2. Antialiasing on. Shadow map 1024 px, from the key light only.
- The cube geometry carries a morph target to a sphere for the finale (7.7).

### 7.7 Finale

- `scripts/extract-logo-dots.mjs` finds the 26 dots (radii 17, 31 and 41 px: 6 inner, 8 middle, 12 outer) in the lock-up PNG and writes their centres and radii, in image pixels, to `assets/logo-dots.json`. Because they come from the same file as the lock-up, the dots line up with the image exactly.
- The camera is already orthographic from the face views. The symbol is placed in screen space where the lock-up will appear.
- Choosing which cubes fly: 26 cubes are picked to minimise the total flight distance, and each is assigned a dot. The other cubes fade and shrink out during the flight.
- In flight, each cube morphs from box to sphere, scales to its dot's radius, rotates to face the camera and fades from species colour to white. In orthographic view the result is flat white discs identical to the white logo symbol on black.
- The lock-up image then fades in over the discs. The symbol in the image and the discs coincide, so the hand-over cannot be seen. The discs are removed after the fade.
- The tagline is also present as text in the live region for screen readers.
- Reverse: the image fades out, the discs reappear, and the fliers return to the cube while the faded cubes return.

### 7.8 Intro network

- About 80 small wireframe cubes, each joined by thin white lines to its two nearest neighbours (nearest as seen on screen, so the lines are mostly short). Cubes are 0.5 to 1 unit across at a depth of 45 units, at 50% opacity.
- The network hangs in the camera's own space, so it fills the screen behind the title at any window shape and does not move with the floor camera.
- Everything moves slowly: each cube sways by about 3.5% of the view on its own cycle of 30 s or so and turns slowly on its axes, and the whole cloud rocks gently back and forth, which gives it depth. The speed is a few pixels per second.
- Layout, sizes and cycles are seeded, so the network looks the same each time the page loads.
- On Next the network fades out over the same 1 s, and with the same easing, as the page eases to white. On Back to the intro it fades back in. It is not shown on the finale. It does no work while hidden.
- Reduced motion (M7): the network stays but stops moving.

## 8. Narrative copy

Brand voice: short sentences, decisive, no hedging, no exclamation marks. Each claim has to be visible in the data on screen (8.1).

| Step | Title | Text |
|---|---|---|
| Intro | Data cube | Decoding nature reveals its stories. |
| 1 | Data | Every record of wildlife is a data point. Smartphone apps and surveys now collect them in large numbers. On their own, they are scattered and hard to read. |
| 2 | Categorise | Each record names a species. We give each species its own colour. |
| 3 | Sort | We group the records by species. Some species have many records. Others have few. |
| 4 | Arrange | We place each record in a cube with three axes: species, location and time. Each species is one sheet. A data cube is a stack of spreadsheets, one on top of another. |
| 5 | Insights 1 | Species by location. Generalist species occur in many locations. Specialist species occur in few, because they depend on particular habitats. |
| 6 | Insights 2 | Location by time. Records grow over time across locations, as more people record wildlife with smartphone apps. |
| 7 | Insights 3 | Species by time. Overall recording rises, yet specialist records fall. That pattern points to a decline. |
| Finale | – | Our planet. Decoded. |

### 8.1 Data-story fit

The default cube (9³, seed 42) does not yet support the copy:

- Records per time step run 9, 9, 5, 11, 10, 9, 8, 11, 16, a weak and noisy rise.
- Only one of seven non-specialists occurs in all locations.
- Records per location fall from 19 to 6 along the axis.
- The specialist decline holds: there are no specialist records after time step 5.

`check-story.mjs` asserts each claim **on the face views**, not on raw counts, because the viewer reads the faces:

| Face | Assertion |
|---|---|
| Species × location | At least two species occupy two-thirds or more of locations. Each specialist occupies at most one habitat band. |
| Location × time | Every time step and location has at least one record. Records summed over species rise across time: a positive Spearman correlation of at least 0.8 between time and records, and the last third has at least 1.5× the records of the first third. |
| Species × time | Total records rise (as above). Specialist records in the last third total zero. Specialist records in the first third total at least 4. |
| Whole cube | Cube count is between 15% and 28% of cells (5.3). Every species has at least one record. |

Some random iterations do not tell the story, so the check is essential. `npm run data` refuses to write data that fails, and `--seed auto` tries iterations until one passes (5.1). A fixed seed that fails is reported with the assertions it broke. The copy stays fixed while the data changes.

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
- Pale colours are rescued by the dark cube edges (7.6). Check on a projector during review.
- Colour is never the only cue. Species are also separated by heap (Sort) and by sheet (Arrange and Insights).
- The palette is an ordered list in `config.js`. `check-palette.mjs` reruns the ΔE and contrast checks if the palette changes.

## 11. Accessibility

- **Keyboard.** Next, Back and Restart are real buttons, reachable by Tab, with a visible focus ring. Enter and Space press the focused button. Global shortcuts that never conflict: **Page Down** or **N** for Next, **Page Up** or **B** for Back. The canvas is focusable on Arrange and the Insights. While it has focus, the **arrow keys** rotate the cube and releasing them springs it back.
- **Screen readers.** The caption bar is an `aria-live="polite"` region announced on each step. The canvas has `role="img"` and an `aria-label` describing the current scene. Each Insight has a one-sentence plain-text description of the pattern (in `config.js`).
- **Reduced motion** (`prefers-reduced-motion`): physics runs headless (7.1) and steps crossfade between end states in 0.4 s. Rotations become cuts. Cursor repulsion is off. Kiosk dwell times double.
- **No WebGL.** The page shows the step titles and narration as readable text in sequence, with a short note that the 3D view needs WebGL.
- Text contrast meets the guide's 5:1 (black on white, white on black). Large text and controls meet 3:1. See 9.2 for the tagline.

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
| M1 (built) | **Data**: drop, floor, walls, shadows, edge shader, cursor repulsion | Cubes fall and settle at 60 fps. Repulsion feels physical. Back lifts them away. |
| M2 | **Categorise** with palette | Recolour in 2 s or less. Back returns to black. |
| M3 | **Sort**: steering and heaps | Heaps are stable and distinct. Back restores the Categorise scatter. |
| M4 | **Arrange**: sheets, box, labels, rotate and spring back | Heaps rise into sheets. Rotation feels good. `preview/` deleted. |
| M5 | **Insights** ×3: turns, orthographic hand-over, face blending, key | Each face shows its claim at a glance. |
| M6 | **Finale**: dot extraction, flight, morph, lock-up, Restart | The hand-over to the logo cannot be seen. |
| M7 | Kiosk mode, reduced motion, no-WebGL fallback, accessibility pass | Keyboard-only and screen-reader walkthrough passes. |
| M8 | Polish, performance, README, NOTICE, GitHub Pages | Runs on the latest Chrome, Edge, Firefox and Safari. Steady 60 fps on an integrated-GPU laptop. |
| Stretch | Sound, mobile and touch, tooltips | – |

### M1 as built

- The floor is sized from the cube count at 6 square units per cube, 1.5 : 1 wide (about 37 × 25 units for 164 cubes), so the cubes read as small. The camera is fitted to it at any window shape, and cubes are released from just above the top of the view. The view is then lowered so the floor sits one third of the way up the screen.
- Cubes pour into the middle of the floor as a stream over 1 s. They are released down several side-by-side lanes (a sunflower spiral, 1.25 units apart) at 28 units/s, so no cube starts inside another: cubes in one lane are at least 1.8 apart at release, and the number of lanes follows the cube count (11 lanes for 164 cubes). Release order, spin and sideways drift are seeded, so a given data file always drops the same way. If a frame is slow, cubes released during it start part-way down their fall, so the stream stays smooth. The step is ready 0.5 s after the last release. Back lifts the cubes out of view over 1.2 s, then the page eases to black.
- Each cube has a thin darker edge drawn in its own shader (a darker version of its own colour), and the floor shows only the soft shadows. Cubes start near-black (`#111111`), not pure black, so the lighting still shows their shape.
- Repulsion was tuned in a simulation (a resting cube next to a stationary cursor is driven out to the edge of the cursor's reach, about 6 units; a quick sweep nudges it 1 to 5 units). Final values are set by eye at review.
- `?debug` on the page address exposes the app as `__dataCube` in the browser console, for testing.
- Verified in Edge from `file://`: 164 cubes released, all settle inside the walls; repulsion pushes only nearby cubes; Back lifts everything away and the cubes drop again on Next. Headless software rendering ran at 19 fps, so the 60 fps target still needs checking on a real GPU.

- The intro network is built (7.8): `src/network.js`, tuned in `NETWORK` in `config.js`.

### M0 as built

- Generator defaults were tuned from the original script's values: detection over time 0.15 to 1.0 (was 0.2 to 0.9), habitat cut-off 0.3 (was 0.5), species rarity 0.6 to 1 (was 0.5 to 1). With these about 58% of random iterations pass the story checks (about 12% with the original values), and `--seed auto` finds a passing seed within a few tries. The committed cube is seed 1: 164 records.
- Step transitions are placeholders (they ease the page theme and pause 0.4 s). The scene draws only the bounding box, turning slowly. The real steps replace them one milestone at a time.
- The controller moves the visible step on at the **start** of a transition, so the caption changes while the animation plays. Buttons use `aria-disabled` while busy, not `disabled`, so keyboard focus is kept.
- Verified in Edge from `file://`: no console errors; Next, Back, Restart, Page Up/Down and N/B work; the page theme eases black to white and back; the stage height stays constant between steps; the no-WebGL and missing-data messages show.

## 14. Testing

- **Automated:** `npm run check` and CI run a build-staleness check, unit tests (`node --test`: data model, story checks, data loader, step controller, theme, tween, headless physics), `check-story` and `check-palette`.
- **Manual, per milestone:**
  - Run from `file://` and from a local or Pages URL.
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
| Pale species colours on white | Edge shader, contact shadows, projector check. |
| Tagline contrast on white | Black background for the intro and finale (9.2). |
| Stale committed bundle | CI staleness check (3.3). |
| `file://` limits | No runtime `fetch` or module imports. The data is a script file. |
| Data no longer fits the copy after a parameter change | `npm run data` refuses data that fails `check-story`. |
