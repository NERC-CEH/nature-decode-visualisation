// The caption bar, buttons, progress marks and keyboard shortcuts. The text is HTML, not part
// of the 3D render, so it can be selected and read by screen readers (technical-spec 4.2, 11).
//
// Buttons use aria-disabled, not disabled, so keyboard focus is not lost while a step plays.

import { SIMULATED_NOTE } from './config.js';
import { reducedMotion, scaled } from './motion.js';

// How long the title and caption take to slide and fade out and in, in milliseconds
const FADE_OUT_MS = 900;
const FADE_IN_MS = 1400;

const noCallouts = () => {};

export function createUi({ steps, onNext, onBack, onRestart, onCaptionShown = noCallouts, onCaptionComplete = noCallouts, onKioskStart = noCallouts, onSoundToggle = noCallouts, soundSupported = false, soundMuted = false }) {
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
    announcer: $('announcer'),
    kioskStart: $('kiosk-start'),
    sound: $('sound'),
    kioskStatus: $('kiosk-status'),
    fallback: $('fallback'),
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
  // Under reduced motion the text only fades, and quickly.
  const shift = () => (reducedMotion() ? 0 : 80);
  const titleParts = [el.title, el.insight, el.note, el.credit];
  const slide = (targets, from, to, ms) => Promise.all(targets.map((target) => target.animate(
    [{ opacity: from, transform: `translateX(${from ? 0 : shift()}px)` }, { opacity: to, transform: `translateX(${to ? 0 : -shift()}px)` }],
    { duration: scaled(ms / 1000) * 1000, easing: 'ease', fill: 'forwards' },
  ).finished));
  let shownIndex = -1;
  let captionRun = 0;
  let waitingFor = null; // the step whose caption is waiting for it to finish
  let textRun = 0; // the caption text that is waiting for the tags and labels to finish (0 = none)
  let textStep = null;
  let withoutWebGL = false;

  // What a screen reader says, in the same order as it appears on screen: the title, then each tag and
  // label as it comes in, then the caption. Each message is added to a hidden live region.
  const announce = (message) => {
    if (!message) return;
    const line = document.createElement('p');
    line.textContent = message;
    el.announcer.append(line);
  };
  const announceCaption = (step) => {
    announce(step.text);
    announce(step.summary);
  };
  const announceTitle = (step) => {
    el.announcer.replaceChildren();
    announce(step.insight ? `${step.title}, part ${step.insight} of 3` : step.title);
  };
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
    if (withoutWebGL) {
      // no 3D view: the words of the step's tags and labels are shown as a list instead
      el.fallback.replaceChildren(...(step.callout ?? []).map((entry) => Object.assign(document.createElement('li'), { textContent: entry.text })));
      el.fallback.hidden = !step.callout;
    }
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
    announceTitle(step);
    if (step.captionWhenReady && current.busy) {
      await new Promise((resolve) => { waitingFor = resolve; });
      if (run !== captionRun) return;
    }
    await slide(titleParts, 0, 1, FADE_IN_MS).catch(() => {});
    if (run !== captionRun) return;
    if (step.callout && onCaptionShown !== noCallouts) {
      textRun = run; // the caption text waits for revealText(), called when the last label is in
      textStep = step;
      onCaptionShown(step);
    } else {
      announceCaption(step);
      await slide([el.text], 0, 1, FADE_IN_MS).catch(() => {});
      if (run === captionRun) onCaptionComplete(steps.indexOf(step));
    }
  }
  // Bring in the caption text of the current step, once its tags and labels are all showing.
  function revealText() {
    if (!textRun || textRun !== captionRun) return Promise.resolve();
    textRun = 0;
    announceCaption(textStep);
    const step = textStep;
    const run = captionRun;
    return slide([el.text], 0, 1, FADE_IN_MS).catch(() => {}).then(() => {
      if (run === captionRun) onCaptionComplete(steps.indexOf(step));
    });
  }
  const press = (flag, action) => () => { if (flag()) action(); };
  const goNext = press(() => current.canNext || current.canRestart, () => (current.canRestart ? onRestart() : onNext()));
  const goBack = press(() => current.canBack, onBack);
  el.kioskStart.addEventListener('click', () => onKioskStart());
  // The sound button says what pressing it does not; it shows the state: Sound on or Sound off.
  const showSound = (muted) => {
    el.sound.textContent = muted ? 'Sound off' : 'Sound on';
    el.sound.setAttribute('aria-pressed', String(!muted));
  };
  el.sound.hidden = !soundSupported;
  showSound(soundMuted);
  el.sound.addEventListener('click', () => onSoundToggle());
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
    announce,
    setSoundState: showSound,
    // Show or hide the kiosk status line and the "Play automatically" link for the kiosk's mode.
    setKioskMode(mode) {
      el.kioskStatus.hidden = mode !== 'auto';
      el.kioskStart.hidden = mode === 'auto';
      if (mode === 'auto') announce('Playing automatically. Press any key or click to take control.');
    },
    render(state) {
      current = state;
      const { step, index } = state;
      if (!state.busy && waitingFor) { waitingFor(); waitingFor = null; }
      const isIntro = step.id === 'intro';
      const isFinale = index === steps.length - 1;

      el.app.classList.toggle('is-intro', isIntro);
      el.app.classList.toggle('is-busy', state.busy);
      el.heroText.textContent = steps[0].text;
      el.canvasWrap.setAttribute('aria-label', step.rotate ? `${step.canvasLabel} Use the arrow keys to turn it; it springs back when you let go.` : step.canvasLabel);

      el.progressLabel.textContent = `Step ${index + 1} of ${steps.length}`;
      [...el.progress.children].forEach((li, i) => {
        li.classList.toggle('done', i <= index);
        if (i === index) li.setAttribute('aria-current', 'step');
        else li.removeAttribute('aria-current');
      });

      if (index !== shownIndex) {
        if (shownIndex < 0) {
          setCaption(step);
          announceTitle(step);
          announceCaption(step);
          onCaptionComplete(index);
        } else changeCaption(state);
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
      withoutWebGL = true;
      el.canvasWrap.hidden = true;
      el.status.hidden = false;
      el.status.textContent = 'The 3D view needs WebGL, which is not available in this browser. ' +
        'The steps and text below still work.';
    },
  };
}
