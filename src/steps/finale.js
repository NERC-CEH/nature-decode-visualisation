// Step 8, Finale: the page fades to black while the cubes fly to the dots of the UKCEH logo symbol,
// turning into flat white discs; 26 of them become the 26 dots, and the rest shrink to nothing on
// the way. Then the logo lock-up, with its tagline, fades in over the dots, exactly on top of them.
// Back takes the cubes back to the Insight views.

import { CUBE, DURATIONS, FACE, LOGO, speciesColour } from '../config.js';
import { arrangement } from '../layout.js';
import { finaleTargets, logoLayout } from '../finale.js';
import logoDots from '../logoDots.js';
import { FACES } from './insights.js';

export const finaleStep = {
  async enter(ctx) {
    const { cube, field, scene, frame, rotation, logo } = ctx;
    rotation.setTarget({ yaw: 0, pitch: 0 }); // square on to the camera, as in the last Insight
    const stage = scene.stage();
    const layout = logoLayout({ stage, image: logoDots.image, dots: logoDots.dots, unitsPerPixel: stage.unitsPerPixel });
    const here = field.capture().map((c) => ({ x: c.p.x, y: c.p.y - ctx.cubeCentre }));
    const targets = finaleTargets(here, layout).map((t) => ({ x: t.x, y: ctx.cubeCentre + t.y, z: 0, scale: t.scale }));
    ctx.finaleLayout = layout;
    logo.place(layout.rect);
    await Promise.all([
      ctx.setTheme('dark', DURATIONS.finale),
      field.blendTo((i) => speciesColour(cube.cubes[i].species), 1, DURATIONS.finale / 3),
      frame?.fadeTo(0, 1),
      frame?.hideFaceTitles(0.4),
      field.flyTo(targets, { seconds: DURATIONS.finale, morph: 1, glow: 1 }),
    ]);
    await logo.fadeTo(1, DURATIONS.logoFade);
    field.setVisible(false); // the lock-up has taken over from the cubes
  },

  // Back to the third Insight: the lock-up fades out, the cubes appear where the dots were and fly back
  // to their cells, and the page fades to white.
  async reverse(ctx) {
    const { cube, field, scene, frame, rotation, logo } = ctx;
    field.setVisible(true);
    await logo.fadeTo(0, 0.5);
    const face = FACES.insight3;
    rotation.setTarget({ yaw: face.yaw, pitch: face.pitch });
    const cells = arrangement(cube.cubes, cube.displayOrder, cube.size).map((c) => ({ ...c, scale: 1 }));
    await Promise.all([
      ctx.setTheme('light', DURATIONS.finaleBack),
      field.flyTo(cells, { seconds: DURATIONS.finaleBack, morph: 0, glow: 0 }),
      field.blendTo((i) => speciesColour(cube.cubes[i].species), FACE.alpha, DURATIONS.finaleBack),
      frame?.fadeBoxTo(1, DURATIONS.finaleBack / 2),
      scene?.setView('face', 0.5),
    ]);
    await frame?.showFaceTitles(face.horizontal, face.vertical, 0.5);
  },
};
