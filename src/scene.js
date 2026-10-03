// Three.js renderer, camera and sizing. Returns null when WebGL is unavailable, so the page
// can fall back to text only (technical-spec 11).
//
// M0 draws a placeholder: the data cube's bounding box, turning slowly. The cubes, floor and
// labels arrive with the step milestones.

import * as THREE from 'three';
import { EDGE_COLOUR } from './config.js';

const PITCH = 1.25; // distance between cube centres in the arranged cube (technical-spec 7.2)

export function createScene(container, { size }) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true });
  } catch {
    return null;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 500);
  const edge = size * PITCH;
  const box = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(edge, edge, edge)),
    new THREE.LineBasicMaterial({ color: EDGE_COLOUR }));
  scene.add(box);

  // Fit the bounding sphere of the cube in view at any aspect ratio.
  function resize() {
    const width = Math.max(1, container.clientWidth);
    const height = Math.max(1, container.clientHeight);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    const vertical = (camera.fov * Math.PI) / 180;
    const horizontal = 2 * Math.atan(Math.tan(vertical / 2) * camera.aspect);
    const radius = edge * 0.87 * 1.15;
    const distance = radius / Math.sin(Math.min(vertical, horizontal) / 2);
    camera.position.set(0.6, 0.5, 0.75).normalize().multiplyScalar(distance);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(container);
  resize();

  return {
    setClearColour: (hex) => renderer.setClearColor(hex),
    render(dt) {
      box.rotation.y += dt * 0.2;
      renderer.render(scene, camera);
    },
  };
}
