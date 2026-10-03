// Step 9, Conclusion: the data cube is back as it was in the Arrange step (turned to show its front and
// one side, solid colours), but with no axis titles, tags or labels. The caption at the bottom is just
// the title, large and centred (see ui.js). Back returns to the third Insight.

import { backToCube, showFace, FACES } from './insights.js';

export const conclusionStep = {
  enter: (ctx) => backToCube(ctx, { restoreTitles: false }),
  reverse: (ctx) => showFace(ctx, FACES.insight3),
};
