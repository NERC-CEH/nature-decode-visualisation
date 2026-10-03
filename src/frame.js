// The frame round the arranged data cube: a fine light-grey wireframe box, an arrow for the
// direction of time, and the three axis titles. It fades in once the cubes are in their cells and
// turns with the cube. The three axis titles are flat text lying along the edges of the cube; the two
// upright titles for a face view are HTML placed at points in the 3D scene. There are no species or location names and no tick numbers, because the data is
// simulated.

import * as THREE from 'three';
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { EDGE_COLOUR } from './config.js';
import { tween, ease } from './tween.js';
import { createAxisText } from './axistext.js';

const ARROW_COLOUR = '#4D4D4D';

// `parent` is the group the cubes are in; `makeLabel(text)` returns a DOM element for a title.
export function createFrame({ parent, staticParent = null, edge, centreY, makeLabel, makeAxisText = createAxisText }) {
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

  // The three axis titles lie along edges of the cube, in the same planes as the faces, so they turn
  // with the cube: time under the arrow along the front, species up the left edge of the front, and
  // location along the bottom of the right side.
  const lift = Math.PI / 2;
  const labels = [
    { text: 'Time', axis: 'time', position: [0, below - 1.9, half], rotation: [0, 0, 0] },
    { text: 'Species', axis: 'species', position: [-half - 1.3, centreY, half], rotation: [0, 0, lift] },
    { text: 'Location', axis: 'location', position: [half + 1.3, below, 0], rotation: [0, lift, 0] },
  ].map(({ text, axis, position, rotation }) => {
    const mesh = makeAxisText(text);
    mesh.position.set(...position);
    mesh.rotation.set(...rotation);
    group.add(mesh);
    return { mesh, text, axis };
  });

  // The two titles for a face view (the Insights) stay upright whatever angle the cube is at, so they
  // are placed outside the turning group, beside and below the face as seen from the front.
  const faceTitles = ['horizontal', 'vertical'].map((role) => {
    const element = makeLabel('');
    element.style.opacity = '0';
    if (role === 'vertical') element.className += ' is-vertical';
    const object = new CSS2DObject(element);
    object.position.set(...(role === 'horizontal' ? [0, centreY - half - 1.0, 0] : [-half - 1.6, centreY, 0]));
    staticParent?.add(object);
    return { role, element, object, text: '' };
  });

  // Each axis (its title, and for time the arrow too) can be held back while the rest of the frame
  // shows, to be brought in by showAxis. 1 = free to show.
  const axisAmount = { time: 1, species: 1, location: 1 };
  const axisRunning = {};
  let amount = 0; // the box and, with the titles, the whole frame
  let titles = 0; // the arrow and the three axis titles
  let running = null;
  let titleRunning = null;
  let faceRunning = null;

  function apply() {
    group.visible = amount > 0.001 || titles > 0.001;
    lineMaterial.opacity = amount;
    arrow.line.material.opacity = titles * axisAmount.time;
    arrow.cone.material.opacity = titles * axisAmount.time;
    for (const { mesh, axis } of labels) mesh.material.opacity = titles * axisAmount[axis];
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
    // Hold all the axes back (0), or let them all show (1), at once.
    setAxes(value) {
      for (const axis of Object.keys(axisAmount)) { axisRunning[axis]?.cancel(); axisAmount[axis] = value; }
      apply();
    },
    // Fade one axis ('time', 'species' or 'location') in, with its title (and the arrow, for time).
    showAxis(axis, seconds) {
      axisRunning[axis]?.cancel();
      const from = axisAmount[axis];
      axisRunning[axis] = tween({
        duration: seconds,
        easing: ease.inOutQuad,
        onUpdate: (p) => { axisAmount[axis] = from + (1 - from) * p; apply(); },
      });
      return axisRunning[axis].finished.then(() => undefined);
    },
    // Fade only the arrow and the three axis titles, leaving the box. The face views use this, and
    // showing them brings back every axis.
    fadeTitlesTo(target, seconds) {
      if (target > 0) this.setAxes(1);
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
