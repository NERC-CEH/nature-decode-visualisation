# Our planet. Decoded. Data cube animation

An interactive 3D animation that shows how scattered records of wildlife become a data cube
(species × location × time) that reveals patterns in nature. It rebuilds the
[physical data cube](https://digitalenvironment.org/building-a-physical-data-cube/) as a web page.

Status: every step of the animation works, from the opening screen to the logo and Restart, with tag
lines and labels that point at the data. Still to do: kiosk mode, the accessibility pass and a data size
selector (M7 and M8), then a landscape mobile version. See [docs/technical-spec.md](docs/technical-spec.md).

## Run it

Open `index.html` in a browser. It needs no server and no internet connection.

## Develop

Requires Node 20 or later.

```
npm install
npm run dev      # rebuild dist/app.js whenever src/ changes
npm run build    # build dist/app.js once
npm run data     # generate a new data cube into data/
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

Cube sizes from 5 to 12 are supported.

## Brand assets

The code is MIT licensed (see `LICENSE`). The UKCEH logo files in `docs/` and the brand
colours are © UKCEH, are not covered by that licence, and are used with permission.
