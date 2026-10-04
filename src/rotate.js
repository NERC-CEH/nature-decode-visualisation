// Drag to rotate the data cube, then spring back to the angle the current step wants. There is no
// zoom. The rotation is two angles, `yaw` about the vertical axis and `pitch` about the
// horizontal one, applied to a pivot object at the middle of the cube.

import { ROTATE } from './config.js';
import { reducedMotion } from './motion.js';

const TWO_PI = Math.PI * 2;
// The shortest way round from one angle to another, so a cube turned more than half a turn
// springs back the short way and does not unwind.
const shortest = (angle) => angle - TWO_PI * Math.round(angle / TWO_PI);

// `element` receives the drag. `pivot` is a THREE.Object3D.
export function createRotation({ element, pivot, settings = ROTATE }) {
  const state = {
    yaw: 0,
    pitch: 0,
    yawSpeed: 0,
    pitchSpeed: 0,
    target: { yaw: 0, pitch: 0 },
    dragging: false,
    enabled: false,
  };
  let last = null;
  const waiting = [];
  const held = new Set(); // arrow keys being held, which turn the cube like a drag does
  const KEY_DIRECTION = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };

  const apply = () => pivot.rotation.set(state.pitch, state.yaw, 0, 'YXZ');

  element?.addEventListener('pointerdown', (e) => {
    if (!state.enabled || e.button > 0) return;
    state.dragging = true;
    last = { x: e.clientX, y: e.clientY };
    element.setPointerCapture?.(e.pointerId);
  });
  element?.addEventListener('pointermove', (e) => {
    if (!state.dragging || !last) return;
    rotation.drag(e.clientX - last.x, e.clientY - last.y);
    last = { x: e.clientX, y: e.clientY };
  });
  element?.addEventListener('keydown', (e) => {
    if (!state.enabled || e.ctrlKey || e.metaKey || e.altKey || !KEY_DIRECTION[e.key]) return;
    e.preventDefault();
    held.add(e.key);
  });
  element?.addEventListener('keyup', (e) => held.delete(e.key));
  element?.addEventListener('blur', () => held.clear());
  const release = () => { state.dragging = false; last = null; };
  element?.addEventListener('pointerup', release);
  element?.addEventListener('pointercancel', release);

  const rotation = {
    state,

    get enabled() { return state.enabled; },
    set enabled(value) {
      state.enabled = value;
      if (!value) { release(); held.clear(); }
      if (element) {
        element.style.cursor = value ? 'grab' : '';
        element.style.touchAction = value ? 'none' : '';
        // On the turning steps the canvas can be reached with Tab and turned with the arrow keys
        if (value) {
          element.setAttribute?.('tabindex', '0');
          element.setAttribute?.('role', 'application');
          element.setAttribute?.('aria-roledescription', 'turnable data cube');
        } else {
          element.removeAttribute?.('tabindex');
          element.setAttribute?.('role', 'img');
          element.removeAttribute?.('aria-roledescription');
        }
      }
    },

    // The angles it springs back to.
    // Under reduced motion the cube cuts to the new angles instead of turning.
    setTarget(target) {
      state.target = { yaw: target.yaw, pitch: target.pitch };
      if (reducedMotion()) rotation.jump();
    },

    // Go to the target angles at once.
    jump() {
      state.yaw = state.target.yaw;
      state.pitch = state.target.pitch;
      state.yawSpeed = 0;
      state.pitchSpeed = 0;
      apply();
      if (waiting.length) waiting.splice(0).forEach((resolve) => resolve());
    },

    // Turn by a drag of (dx, dy) pixels.
    drag(dx, dy) {
      state.yaw += dx * settings.sensitivity;
      state.pitch = Math.max(-settings.maxPitch, Math.min(settings.maxPitch, state.pitch + dy * settings.sensitivity));
      state.yawSpeed = 0;
      state.pitchSpeed = 0;
      apply();
    },

    // Every frame: while not being dragged, a critically damped spring pulls the angles back.
    update(dt) {
      if (state.dragging) return;
      if (held.size) {
        // arrow keys turn the cube while they are held; when they are let go it springs back
        for (const key of held) {
          const [x, y] = KEY_DIRECTION[key];
          state.yaw += x * settings.keySpeed * dt;
          state.pitch = Math.max(-settings.maxPitch, Math.min(settings.maxPitch, state.pitch + y * settings.keySpeed * dt));
        }
        state.yawSpeed = 0;
        state.pitchSpeed = 0;
        apply();
        return;
      }
      const w = settings.spring;
      for (const [angle, speed, goal] of [['yaw', 'yawSpeed', state.target.yaw], ['pitch', 'pitchSpeed', state.target.pitch]]) {
        let error = angle === 'yaw' ? shortest(state[angle] - goal) : state[angle] - goal;
        // exact solution for a critically damped spring over dt, so any frame length is stable
        const e = Math.exp(-w * dt);
        const v = state[speed];
        const nextError = (error + (v + w * error) * dt) * e;
        state[speed] = (v - w * (v + w * error) * dt) * e;
        error = nextError;
        state[angle] = goal + error;
      }
      apply();
      if (waiting.length && rotation.atRest) waiting.splice(0).forEach((resolve) => resolve());
    },

    // Resolves once the cube has come to rest at its target (or after `timeout` seconds).
    arrive(timeout = 4) {
      return new Promise((resolve) => {
        waiting.push(resolve);
        setTimeout(resolve, timeout * 1000);
      });
    },

    // True when the cube is at its resting angles.
    get atRest() {
      return !state.dragging
        && Math.abs(shortest(state.yaw - state.target.yaw)) < 1e-3
        && Math.abs(state.pitch - state.target.pitch) < 1e-3;
    },
  };
  return rotation;
}
