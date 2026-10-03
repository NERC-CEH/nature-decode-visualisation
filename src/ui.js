// The caption bar, buttons, progress marks and keyboard shortcuts. The text is HTML, not part
// of the 3D render, so it can be selected and read by screen readers (technical-spec 4.2, 11).
//
// Buttons use aria-disabled, not disabled, so keyboard focus is not lost while a step plays.

import { SIMULATED_NOTE } from './config.js';

export function createUi({ steps, onNext, onBack, onRestart }) {
  const $ = (id) => document.getElementById(id);
  const el = {
    app: $('app'),
    hero: $('hero'),
    heroTitle: $('hero-title'),
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
    back: $('back'),
    next: $('next'),
  };
  el.note.textContent = SIMULATED_NOTE;

  steps.forEach(() => el.progress.appendChild(document.createElement('li')));

  let current = { canNext: false, canBack: false, canRestart: false };
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
    render(state) {
      current = state;
      const { step, index } = state;
      const isIntro = step.id === 'intro';
      const isFinale = index === steps.length - 1;

      el.app.classList.toggle('is-intro', isIntro);
      el.app.classList.toggle('is-busy', state.busy);
      el.heroTitle.textContent = steps[0].title;
      el.heroText.textContent = steps[0].text;
      el.title.textContent = step.title;
      el.text.textContent = step.text;
      el.summary.textContent = step.summary ?? '';
      el.canvasWrap.setAttribute('aria-label', step.canvasLabel);
      el.note.classList.toggle('is-hidden', isIntro || isFinale);

      el.progressLabel.textContent = `Step ${index + 1} of ${steps.length}`;
      [...el.progress.children].forEach((li, i) => {
        li.classList.toggle('done', i <= index);
        if (i === index) li.setAttribute('aria-current', 'step');
        else li.removeAttribute('aria-current');
      });

      if (step.insight) {
        el.insight.hidden = false;
        el.insight.textContent = '';
        for (let n = 1; n <= 3; n++) {
          const span = document.createElement('span');
          span.textContent = n;
          if (n === step.insight) span.className = 'current';
          if (n > 1) el.insight.append(' · ');
          el.insight.append(span);
        }
      } else {
        el.insight.hidden = true;
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
