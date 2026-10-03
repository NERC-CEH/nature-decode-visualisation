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
export function createFrame({ parent, edge, centreY, makeLabel }) {
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

  let amount = 0;
  let running = null;

  function apply() {
    group.visible = amount > 0.001;
    lineMaterial.opacity = amount;
    arrow.line.material.opacity = amount;
    arrow.cone.material.opacity = amount;
    for (const { element } of labels) element.style.opacity = String(amount);
  }

  return {
    group,
    labels,
    get amount() { return amount; },
    set amount(value) { amount = value; apply(); },
    // Fade to `target` (0 = hidden, 1 = shown) over `seconds`.
    fadeTo(target, seconds) {
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
  };
}
