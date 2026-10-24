# Our planet. Decoded. Data cube animation

An interactive 3D animation that shows how scattered records of wildlife become a data cube
(species × location × time) that reveals patterns in nature. It rebuilds the
[physical data cube](https://digitalenvironment.org/building-a-physical-data-cube/) as a web page.

[![Watch the video: the animation from scattered records to a data cube](docs/data-cube-poster.png)](docs/data-cube.mp4)

*Click the image to watch the video (97 seconds).*

Prefer to try it yourself? Open the [live version](https://tomaugust.github.io/nature-decode-visualisation/).

Status: every step of the animation works, from the opening screen to the logo and Restart, with tag
lines and labels that point at the data. Kiosk mode, keyboard and screen-reader support and a data size selector are done. Still to do: a final
README and checks (M8), then a landscape mobile version. See [docs/technical-spec.md](docs/technical-spec.md).

## Run it

Open `index.html` in a browser. It needs no server and no internet connection. The `main` branch is also
published with GitHub Pages (see [Publishing](#publishing)).

Kiosk mode makes the story play itself, for a screen at an event. Click "Play automatically" on the
opening screen, or add `?kiosk` to the address to start it at once. Any key, click, touch or mouse
movement hands control to the visitor; with `?kiosk`, if they then leave it alone for 90 seconds it returns
to the start and plays again. The timings are `KIOSK` in `src/config.js`.

The page always plays the full animation: it does not follow the system's reduced-motion setting. A
reduced version (quick fades, no physics to watch) exists and is used only if the address has
`?motion=reduced`.

## Sound

The page has sound: soft plastic clacks and thuds when cubes touch, small cues for the tags, the slide
between steps, the cube turning and the finale, and a quiet bed (a pad with a few sparse notes) that
follows the story. Everything is synthesised in the browser with [Tone.js](https://tonejs.github.io/); there
are no audio files, and nothing needs the internet.

Sound starts with the first click or key press (browsers do not allow it before) and the first few
seconds draw the sounds in the background. The Sound button at the top right mutes it. Kiosk mode (`?kiosk`
or "Play automatically") starts muted; pressing Sound there turns it on and keeps it on. The sounds and
the bed per step are `BED` and `SOUND` in `src/config.js`; the synthesis is in `src/audio/`.
`?audiolog` plays nothing and logs each sound with its time instead, which is how the video gets its sound.

Add `?size=N` to the address to change the size of the data cube, from 5 to 12 per side (default 9),
for example `index.html?size=7`. 10 runs comfortably; 12 may lag on a laptop.

## Develop

Requires Node 20 or later.

```
npm install
npm run dev      # rebuild dist/app.js whenever src/ changes
npm run build    # build dist/app.js once
npm run data     # generate a new data cube into data/ (one size)
npm run data:all # generate and check a cube for every size from 5 to 12
npm run check    # build check, tests, data story check, palette check
```

`dist/app.js` is built from `src/` and is committed, so the page runs straight from the repository
and from GitHub Pages. Run `npm run build` after changing anything in `src/`. `npm run check` (and
the GitHub Action) fails if the committed bundle is out of date.

### Changing the data

`npm run data` simulates a cube (species × time × location, 9 per side by default) and writes
`data/data-cube.json` and `data/data-cube.js`. The page loads the `.js` file. 9 runs smoothly on a laptop,
10 is comfortable and 12 shows a slight lag.

Some random iterations do not tell the story the narration describes (for example, the top view
needs records to rise over time in every location), so every cube is checked
(`scripts/lib/story-checks.mjs`) and data that fails is never written. By default the generator
tries seeds 1, 2, 3 and so on until one passes.

```
npm run data -- --size 7 --habitats 3 --specialists 2
npm run data -- --seed 12         # a fixed seed, which must pass the checks
```

Cube sizes from 5 to 12 are supported. `npm run data:all` makes all eight: the default size 9 is
`data/data-cube.json`, and the others are `data/data-cube-5.json`, `data-cube-6.json` and so on. The page
picks the file from `?size=N` (`data/load-data.js`). `npm run check` checks every size.

## Making a video

`npm run video` plays the whole story and records it frame by frame, so the video is perfectly smooth
however slowly the machine renders. It needs a Chromium-based browser (the installed Edge or Chrome is
found automatically; `--browser path` names another). The video is made by the browser's own H.264 encoder,
so nothing else needs installing (ffmpeg is still needed to add the sound); if ffmpeg is on the PATH it is used instead (`--encoder ffmpeg`), or
`--encoder png` saves numbered PNG files. The result is `video/data-cube.mp4`.

```
npm run video                                    # 1920 x 1080 at 62.5 fps, size 9 (slow: allow an hour or more)
npm run video -- --size 7 --width 960 --height 540 --fps 15.6 --max-seconds 20 --out video/test.mp4
```

The video is not recorded in kiosk mode, and the cubes are left alone: nothing pushes them. Add `--sweep`
to move the mouse back and forth over the floor during Data, Categorise and Sort, so the cubes are pushed
as they are when a visitor moves the cursor (no cursor is drawn).

The video has sound. The page runs with `?audiolog`, which logs every sound it would have played
with its time on the virtual clock, and when the capture ends the same synthesis draws that list into
`video/data-cube.wav` (in a second browser) and ffmpeg adds it to the video. Without ffmpeg the WAV file is
kept and the command to add it is printed. `--no-audio` makes a silent video.

Options are listed at the top of `scripts/capture-video.mjs`.

## Publishing

Every push to `main` deploys the page to GitHub Pages (`.github/workflows/pages.yml`). To turn it on once,
go to the repository's Settings, then Pages, and set Source to "GitHub Actions". After that the workflow
publishes `index.html`, `styles.css`, `assets/`, `data/` and `dist/` and the address appears in the
workflow run.

## Brand assets

The code is MIT licensed (see `LICENSE`). The UKCEH logo files in `docs/` and the brand
colours are © UKCEH, are not covered by that licence, and are used with permission.
