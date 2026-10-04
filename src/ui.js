// The caption bar, buttons, progress marks and keyboard shortcuts. The text is HTML, not part
// of the 3D render, so it can be selected and read by screen readers (technical-spec 4.2, 11).
//
// Buttons use aria-disabled, not disabled, so keyboard focus is not lost while a step plays.

import { SIMULATED_NOTE } from './config.js';

// How long the title and caption take to slide and fade out and in, in milliseconds
const FADE_OUT_MS = 900;
const FADE_IN_MS = 1400;

const noCallouts = () => {};

export function createUi({ steps, onNext, onBack, onRestart, onCaptionShown = noCallouts }) {
  const $ = (id) => document.getElementById(id);
  const el = {
    app: $('app'),
    hero: $('hero'),
    heroText: $('hero-text'),
    canvasWrap: $('canvas-wrap'),
    status: $('status'),
    title: $('caption-title'),
    text: $('caption-text'),
    summary: $('caption-summary'),
    progress: $('progress'),
    progressLabel: $('progress-label'),
    insight: $('insight-indicator'),
    note: $('note'),
    credit: $('credit'),
    body: document.querySelector('.caption-body'),
    back: $('back'),
    next: $('next'),
  };

  steps.forEach(() => el.progress.appendChild(document.createElement('li')));

  let current = { canNext: false, canBack: false, canRestart: false };

  // The title (with the footnote) and the caption text slide left and fade out, then the next ones slide
  // in from the right and fade in. The order on a new step is: the title, then the tags and labels (see
  // callout.js), then the caption text, so that people see the tags before they read on. A step with no
  // tags brings in the caption text straight after the title. A step that sets `captionWhenReady` holds
  // its title back until the step has finished.
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const shift = reduceMotion ? 0 : 80;
  const titleParts = [el.title, el.insight, el.note, el.credit];
  const slide = (targets, from, to, ms) => Promise.all(targets.map((target) => target.animate(
    [{ opacity: from, transform: `translateX(${from ? 0 : shift}px)` }, { opacity: to, transform: `translateX(${to ? 0 : -shift}px)` }],
    { duration: ms, easing: 'ease', fill: 'forwards' },
  ).finished));
  let shownIndex = -1;
  let captionRun = 0;
  let waitingFor = null; // the step whose caption is waiting for it to finish
  let textRun = 0; // the caption text that is waiting for the tags and labels to finish (0 = none)
  const setCaption = (step) => {
    const hideNote = step.id === 'intro' || steps.indexOf(step) === steps.length - 1;
    el.app.classList.toggle('is-statement', Boolean(step.statement));
    el.app.classList.toggle('is-finale', Boolean(step.credit));
    el.credit.hidden = !step.credit;
    el.note.textContent = step.note ?? SIMULATED_NOTE;
    el.note.classList.toggle('is-hidden', hideNote);
    el.title.textContent = step.title;
    el.text.textContent = step.text;
    el.summary.textContent = step.summary ?? '';
    el.insight.hidden = !step.insight;
    el.insight.textContent = '';
    if (step.insight) {
      for (let n = 1; n <= 3; n++) {
        const span = document.createElement('span');
        span.textContent = n;
        if (n === step.insight) span.className = 'current';
        if (n > 1) el.insight.append(' · ');
        el.insight.append(span);
      }
    }
  };
  async function changeCaption(state) {
    const run = ++captionRun;
    const { step } = state;
    // Leaving the opening slide, its caption is not on show, so there is nothing to fade out.
    textRun = 0;
    await slide([...titleParts, el.text], 1, 0, shownIndex === 0 ? 0 : FADE_OUT_MS).catch(() => {});
    if (run !== captionRun) return;
    setCaption(step);
    if (step.captionWhenReady && current.busy) {
      await new Promise((resolve) => { waitingFor = resolve; });
      if (run !== captionRun) return;
    }
    await slide(titleParts, 0, 1, FADE_IN_MS).catch(() => {});
    if (run !== captionRun) return;
    if (step.callout && onCaptionShown !== noCallouts) {
      textRun = run; // the caption text waits for revealText(), called when the last label is in
      onCaptionShown(step);
    } else {
      await slide([el.text], 0, 1, FADE_IN_MS).catch(() => {});
    }
  }
  // Bring in the caption text of the current step, once its tags and labels are all showing.
  function revealText() {
    if (!textRun || textRun !== captionRun) return Promise.resolve();
    textRun = 0;
    return slide([el.text], 0, 1, FADE_IN_MS).catch(() => {});
  }
  const press = (flag, action) => () => { if (flag()) action(); };
  const goNext = press(() => current.canNext || current.canRestart, () => (current.canRestart ? onRestart() : onNext()));
  const goBack = press(() => current.canBack, onBack);
  el.next.addEventListener('click', goNext);
  el.back.addEventListener('click', goBack);

  // Page Down or N for Next (Restart on the finale), Page Up or B for Back. Enter and Space
  // work on whichever button has focus. Arrow keys are kept for rotating the cube (M4).
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey || e.defaultPrevented) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    if (e.key === 'PageDown' || e.key === 'n' || e.key === 'N') { e.preventDefault(); goNext(); }
    else if (e.key === 'PageUp' || e.key === 'b' || e.key === 'B') { e.preventDefault(); goBack(); }
  });

  return {
    revealText,
    render(state) {
      current = state;
      const { step, index } = state;
      if (!state.busy && waitingFor) { waitingFor(); waitingFor = null; }
      const isIntro = step.id === 'intro';
      const isFinale = index === steps.length - 1;

      el.app.classList.toggle('is-intro', isIntro);
      el.app.classList.toggle('is-busy', state.busy);
      el.heroText.textContent = steps[0].text;
      el.canvasWrap.setAttribute('aria-label', step.canvasLabel);

      el.progressLabel.textContent = `Step ${index + 1} of ${steps.length}`;
      [...el.progress.children].forEach((li, i) => {
        li.classList.toggle('done', i <= index);
        if (i === index) li.setAttribute('aria-current', 'step');
        else li.removeAttribute('aria-current');
      });

      if (index !== shownIndex) {
        if (shownIndex < 0) setCaption(step);
        else changeCaption(state);
        shownIndex = index;
      }

      el.next.textContent = isFinale ? 'Restart' : 'Next';
      el.back.setAttribute('aria-disabled', String(!state.canBack));
      el.next.setAttribute('aria-disabled', String(!(state.canNext || state.canRestart)));
    },

    showFatal(message) {
      el.status.hidden = false;
      el.status.textContent = message;
      el.back.setAttribute('aria-disabled', 'true');
      el.next.setAttribute('aria-disabled', 'true');
    },

    showNoWebGL() {
      el.canvasWrap.hidden = true;
      el.status.hidden = false;
      el.status.textContent = 'The 3D view needs WebGL, which is not available in this browser. ' +
        'The steps and text below still work.';
    },
  };
}
