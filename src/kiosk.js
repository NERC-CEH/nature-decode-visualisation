// Kiosk mode: the story plays itself, for a screen at an event. See technical-spec 6.3.
//
// It is started by the "Play automatically" link on the opening screen, or by ?kiosk in the address.
// Each step is left on screen for a while once everything on it has appeared (the tags, the labels and
// the caption), then the next begins; after the last the story starts again. While it plays, a virtual
// cursor sweeps over the cubes on the steps that react to the cursor, so passers-by see that they do.
//
// Any key press, click, touch or movement of the pointer hands control to the visitor. With ?kiosk
// (event mode), if the visitor then does nothing for a while, the page returns to the opening screen and
// plays itself again.

import { KIOSK } from './config.js';

export function createKiosk({
  controller,
  steps,
  config = KIOSK,
  eventMode = false,
  reduced = () => false,
  timers = { set: (fn, ms) => setTimeout(fn, ms), clear: (id) => clearTimeout(id) },
  now = () => performance.now(),
  onChange = () => {},
}) {
  let mode = 'off'; // 'off', 'auto' (playing itself) or 'manual' (the visitor has taken over)
  let dwellTimer = null;
  let idleTimer = null;
  let autoSince = 0;
  let clock = 0;
  const here = { index: -1, busy: false, captionDone: false };

  const words = (text) => (text ? text.trim().split(/\s+/).length : 0);

  // How long to stay on a step once everything on it has appeared, in seconds
  function dwell(index) {
    const step = steps[index];
    let seconds;
    if (index === 0) seconds = config.introDwell;
    else if (index === steps.length - 1) seconds = config.finaleDwell;
    else seconds = Math.min(config.maxDwell, Math.max(config.minDwell, config.base + config.perWord * words(step.text)));
    return reduced() ? seconds * 2 : seconds;
  }

  const clearDwell = () => { if (dwellTimer !== null) { timers.clear(dwellTimer); dwellTimer = null; } };
  const clearIdle = () => { if (idleTimer !== null) { timers.clear(idleTimer); idleTimer = null; } };

  function schedule() {
    if (mode !== 'auto' || here.busy || !here.captionDone || dwellTimer !== null) return;
    dwellTimer = timers.set(advance, dwell(here.index) * 1000);
  }

  function advance() {
    dwellTimer = null;
    if (mode !== 'auto') return;
    if (controller.state.index >= steps.length - 1) controller.restart();
    else controller.next();
  }

  function setMode(next) {
    mode = next;
    onChange(mode);
  }

  function handOver() {
    if (mode !== 'auto') return;
    clearDwell();
    setMode('manual');
    if (eventMode) armIdle();
  }

  function armIdle() {
    clearIdle();
    idleTimer = timers.set(returnToStart, config.idleReturn * 1000);
  }

  // No input for a while at an event: back to the opening screen, playing itself
  function returnToStart() {
    idleTimer = null;
    if (mode !== 'manual') return;
    autoSince = now();
    setMode('auto');
    if (controller.state.index > 0) {
      here.captionDone = false;
      controller.restart();
    } else {
      schedule();
    }
  }

  return {
    get mode() { return mode; },
    get eventMode() { return eventMode; },

    // Start playing itself, from wherever the story is.
    start() {
      clearIdle();
      autoSince = now();
      const state = controller.state;
      here.index = state.index;
      here.busy = state.busy;
      here.captionDone = state.index === 0 && !state.busy; // the opening screen is already complete
      setMode('auto');
      schedule();
    },

    // Called whenever the step controller changes.
    stateChanged(state) {
      if (state.index !== here.index) {
        here.index = state.index;
        here.captionDone = false;
        clearDwell();
      }
      here.busy = state.busy;
      schedule();
    },

    // Called when everything on step `index` (tags, labels, caption) has appeared.
    captionComplete(index) {
      if (index !== here.index) return;
      here.captionDone = true;
      schedule();
    },

    // Called for anything the visitor does. `moved` is false for a pointer movement too small to count.
    input(kind, moved = true) {
      if (mode === 'auto') {
        // a short grace after starting, so moving the mouse away from the link does not undo it
        if (kind === 'pointermove' && (!moved || now() - autoSince < config.pointerGrace * 1000)) return;
        handOver();
      } else if (mode === 'manual' && eventMode) {
        armIdle();
      }
    },

    update(dt) {
      clock += dt;
    },

    // Where the virtual cursor is on the floor, or null when it is not out: only while playing itself, on a
    // step that reacts to the cursor, once everything on the step has appeared.
    virtualPoint(arena) {
      if (mode !== 'auto') return null;
      const step = steps[here.index];
      if (!step?.repel || here.busy || !here.captionDone) return null;
      return {
        x: Math.sin(clock * config.cursorSpeed) * 0.38 * arena.width,
        z: Math.sin(clock * config.cursorSpeed * 1.5 + 1) * 0.3 * arena.depth,
      };
    },
  };
}

// Pass the visitor's input to the kiosk. A pointer has to move a few pixels to count, because browsers
// send small synthetic movements when the page changes under a resting pointer.
export function listenForInput(kiosk, target = document) {
  let last = null;
  for (const kind of ['pointerdown', 'keydown', 'wheel', 'touchstart']) {
    target.addEventListener(kind, () => kiosk.input(kind), { capture: true, passive: true });
  }
  target.addEventListener('pointermove', (e) => {
    const moved = !last || Math.hypot(e.clientX - last.x, e.clientY - last.y) > 4;
    last = { x: e.clientX, y: e.clientY };
    kiosk.input('pointermove', moved);
  }, { capture: true, passive: true });
}
