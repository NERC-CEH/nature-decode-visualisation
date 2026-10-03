// Drag to rotate the data cube, then spring back to the angle the current step wants. There is no
// zoom. The rotation is two angles, `yaw` about the vertical axis and `pitch` about the
// horizontal one, applied to a pivot object at the middle of the cube.

import { ROTATE } from './config.js';

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
  const release = () => { state.dragging = false; last = null; };
  element?.addEventListener('pointerup', release);
  element?.addEventListener('pointercancel', release);

  const rotation = {
    state,

    get enabled() { return state.enabled; },
    set enabled(value) {
      state.enabled = value;
      if (!value) release();
      if (element) {
        element.style.cursor = value ? 'grab' : '';
        element.style.touchAction = value ? 'none' : '';
      }
    },

    // The angles it springs back to.
    setTarget(target) {
      state.target = { yaw: target.yaw, pitch: target.pitch };
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
