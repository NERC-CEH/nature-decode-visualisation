// The frame round the arranged data cube: a fine light-grey wireframe box, an arrow for the
// direction of time, and the three axis titles. It fades in once the cubes are in their cells and
// turns with the cube. Axis titles are HTML (so they stay sharp and readable) placed at points in
// the 3D scene. There are no species or location names and no tick numbers, because the data is
// simulated.

import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { EDGE_COLOUR } from './config.js';
import { tween, ease } from './tween.js';

const ARROW_COLOUR = '#4D4D4D';

// `parent` is the group the cubes are in; `makeLabel(text)` returns a DOM element for a title.
export function createFrame({ parent, staticParent = null, edge, centreY, makeLabel }) {
  const group = new THREE.Group();
  group.visible = false;
  parent.add(group);

  const lineMaterial = new THREE.LineBasicMaterial({ color: EDGE_COLOUR, transparent: true, opacity: 0 });
  const box = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(edge, edge, edge)), lineMaterial);
  box.position.set(0, centreY, 0);
  group.add(box);

  // Time runs left to right along the front, just below the bottom edge.
  const half = edge / 2;
  const below = centreY - half - 1.3;
  const front = half + 1.3;
  const arrow = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(-half, below, front), edge, ARROW_COLOUR, 1.1, 0.6);
  for (const part of [arrow.line, arrow.cone]) {
    part.material.transparent = true;
    part.material.opacity = 0;
    part.material.depthWrite = false;
  }
  group.add(arrow);

  const labels = [
    { text: 'Time', position: [0, below - 1.2, front] },
    { text: 'Species', position: [-half - 1.3, centreY, front - 0.2] },
    { text: 'Location', position: [half + 1.8, below - 0.3, 0] },
  ].map(({ text, position }) => {
    const element = makeLabel(text);
    element.style.opacity = '0';
    const object = new CSS2DObject(element);
    object.position.set(...position);
    group.add(object);
    return { element, object };
  });

  // The two titles for a face view (the Insights) stay upright whatever angle the cube is at, so they
  // are placed outside the turning group, beside and below the face as seen from the front.
  const faceTitles = ['horizontal', 'vertical'].map((role) => {
    const element = makeLabel('');
    element.style.opacity = '0';
    const object = new CSS2DObject(element);
    object.position.set(...(role === 'horizontal' ? [0, centreY - half - 1.0, 0] : [-half - 1.6, centreY, 0]));
    staticParent?.add(object);
    return { role, element, object, text: '' };
  });

  let amount = 0; // the box and, with the titles, the whole frame
  let titles = 0; // the arrow and the three axis titles
  let running = null;
  let titleRunning = null;
  let faceRunning = null;

  function apply() {
    group.visible = amount > 0.001 || titles > 0.001;
    lineMaterial.opacity = amount;
    arrow.line.material.opacity = titles;
    arrow.cone.material.opacity = titles;
    for (const { element } of labels) element.style.opacity = String(titles);
  }

  return {
    group,
    labels,
    faceTitles,
    get amount() { return amount; },
    set amount(value) { amount = value; titles = value; apply(); },
    get titles() { return titles; },
    // Fade the whole frame (box, arrow and titles) to `target` (0 = hidden, 1 = shown).
    fadeTo(target, seconds) {
      running?.cancel();
      titleRunning?.cancel();
      const from = amount;
      const titlesFrom = titles;
      if (from === target && titlesFrom === target) return Promise.resolve();
      running = tween({
        duration: seconds,
        easing: ease.inOutQuad,
        onUpdate: (p) => {
          amount = from + (target - from) * p;
          titles = titlesFrom + (target - titlesFrom) * p;
          apply();
        },
      });
      return running.finished.then(() => undefined);
    },
    // Fade only the box, leaving the arrow and titles as they are.
    fadeBoxTo(target, seconds) {
      running?.cancel();
      const from = amount;
      if (from === target) return Promise.resolve();
      running = tween({
        duration: seconds,
        easing: ease.inOutQuad,
        onUpdate: (p) => { amount = from + (target - from) * p; apply(); },
      });
      return running.finished.then(() => undefined);
    },
    // Fade only the arrow and the three axis titles, leaving the box. The face views use this.
    fadeTitlesTo(target, seconds) {
      titleRunning?.cancel();
      const from = titles;
      if (from === target) return Promise.resolve();
      titleRunning = tween({
        duration: seconds,
        easing: ease.inOutQuad,
        onUpdate: (p) => { titles = from + (target - from) * p; apply(); },
      });
      return titleRunning.finished.then(() => undefined);
    },
    // Show the two upright titles for a face view, changing them if they are already showing
    // something else. Pass null for either to leave that one hidden.
    async showFaceTitles(horizontal, vertical, seconds = 0.4) {
      faceRunning?.cancel();
      const wanted = { horizontal, vertical };
      const fades = faceTitles.map((title) => {
        const text = wanted[title.role];
        const from = Number(title.element.style.opacity) || 0;
        const change = text !== title.text;
        const down = change && from > 0 ? seconds / 2 : 0;
        return (async () => {
          if (change && from > 0) {
            await tween({ duration: down, easing: ease.inOutQuad, onUpdate: (p) => { title.element.style.opacity = String(from * (1 - p)); } }).finished;
          }
          title.text = text ?? '';
          title.element.textContent = title.text;
          if (!text) { title.element.style.opacity = '0'; return; }
          const start = Number(title.element.style.opacity) || 0;
          await tween({ duration: seconds, easing: ease.inOutQuad, onUpdate: (p) => { title.element.style.opacity = String(start + (1 - start) * p); } }).finished;
        })();
      });
      await Promise.all(fades);
    },
    hideFaceTitles(seconds = 0.3) {
      return this.showFaceTitles(null, null, seconds);
    },
  };
}
