# Our Planet Decoded: Data Cube Animation (Project Scope)

## Background

In 2021 Tom August built a physical **data cube** ([Building a physical data cube](https://digitalenvironment.org/building-a-physical-data-cube/)). It is a laser-cut Perspex object in an oak frame that represents a three-dimensional array of biodiversity data. The three dimensions are species, location and time, and black squares mark observations. Seen from different sides, the cube tells different stories:

- Observations increase over time.
- Some species are generalists and some are specialists.
- Habitat specialists are declining.

UKCEH now has a new brand identity and the tagline **"Our planet. Decoded"**. The data cube concept fits this message well: raw data is collected, organised and structured, and then it reveals an understanding of nature.

This project rebuilds the data cube as a virtual, interactive web experience that walks the viewer through that decoding process.

## Goal

Build a single-page, browser-based, interactive 3D animation. In a series of steps, it shows how scattered raw observations become ordered, structured data that produces insight about nature. It ends on the UKCEH brand and tagline.

## Audience and purpose

- General audiences, from people new to data to experienced researchers. This matches the original physical cube.
- It communicates the idea that organising and decoding data creates understanding, in support of the "Our Planet Decoded" brand.
- The overacrhing message is, "Decoding nature reveals its stories"

## The experience

The viewer moves through the steps with a **Next** button. Each step has a short label and, where relevant, narrative text beside the 3D scene.

| # | Step | What happens | Interaction |
|---|------|--------------|-------------|
| 1 | **Data** | Many small black cubes fall from the top of the screen and scatter across the floor. A physics engine drives this. | Moving the cursor over the cubes repels them, so they tumble slightly away. |
| 2 | **Categorise** | The scattered black cubes change colour. Each colour stands for a species. | Cursor repulsion continues. |
| 3 | **Sort** | The cubes move into piles by colour, one pile per species. | Cursor repulsion continues. |
| 4 | **Arrange** | The cubes move into a 3D space bounded by a wireframe or transparent cube. Each small cube is placed by its **year**, **species** and **habitat**, which are the three axes of the data cube. | The user can rotate the cube. |
| 5 | **Insight 1** | The cube rotates to face one side, for example *species × habitat*. | Rotation allowed. A narrative description sits beside the cube. |
| 6 | **Insight 2** | The cube rotates to a second face, for example *species × year*. | As above. |
| 7 | **Insight 3** | The cube rotates to the third face, for example *habitat × year*. | As above. |
| 8 | **Finale** | The UKCEH logo and the tagline. | None. |

## Data

- The cube is driven by an existing data array that Tom will supply. Each element is a species observation, indexed by year, species and habitat.
- Each observation is drawn as one small cube, coloured by species.

## In scope

- A single HTML page with its supporting assets, runnable in a modern desktop browser.
- Real-time 3D rendering of the scene and the cubes.
- Physics simulation for the falling and scattering in the **Data** step, and cursor-driven repulsion.
- Smooth animated transitions between steps: recolour, sort into piles, arrange into the cube, and rotate to each face.
- User-controlled rotation of the data cube on the Arrange and Insight steps.
- Step navigation with a Next button.
- Narrative text panels for the Insight steps.
- An ending screen with UKCEH branding: logo, tagline, and brand colours and typography.
- Loading and mapping the supplied data array into the cube.

## Out of scope (unless agreed otherwise)

- A backend, database or live data feeds.
- Authoring the dataset itself, which Tom supplies.
- Content management for editing text without code changes.
- Native mobile apps or VR/AR versions.
- Analytics and tracking.

## Deliverables

1. A working single-page web animation in this repository: https://github.com/tomaugust/nature-decode-visualisation
2. A technical specification, written after the open questions in [questions.md](questions.md) are answered.
3. Short instructions for running, building and deploying it.

## Success criteria

- A first-time viewer can click through all steps and understand the story from raw data to insight.
- The Data step feels physical and playful, with believable falling, scattering and cursor response.
- Transitions between steps are smooth and readable on a typical laptop.
- The Insight views clearly show the patterns described in their narrative text.
- The page uses UKCEH branding correctly.

## Key assumptions and risks

- **Performance.** The number of cubes, physics simulation and transitions must stay smooth on ordinary hardware. The size of the data array sets the cube count, so this needs checking early.
- **Physics to structure handover.** Moving cubes from a physics-driven state into precise positions (piles, then grid) needs careful choreography.
- **Brand assets.** Official UKCEH logo files, colours and fonts, plus any usage rules, are needed for the finale and overall styling.
- **Data shape.** The axes (year, species, habitat) differ from the original physical cube (species, location, time). The final data structure needs confirming.
