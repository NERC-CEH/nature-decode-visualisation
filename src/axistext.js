// Axis titles drawn as flat text in the 3D scene, so that they lie along the edges of the data cube
// and turn with it, as part of the same object. The text is painted on a canvas and shown on a plane.

import * as THREE from 'three';

export const AXIS_GREY = '#808080'; // 50% grey, on the light page and the dark

// A plane showing `text`, `height` world units tall, starting transparent. Its material is returned
// as `mesh.material`, so a caller fades the title by changing `opacity`.
export function createAxisText(text, { height = 1.5 } = {}) {
  let map = null;
  let aspect = Math.max(2, text.length * 0.7);
  if (typeof document !== 'undefined') {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const font = 'bold 120px Arial, Helvetica, sans-serif';
    context.font = font;
    const pad = 24;
    canvas.width = Math.ceil(context.measureText(text).width) + 2 * pad;
    canvas.height = 170;
    context.font = font; // resizing a canvas resets its state
    context.fillStyle = AXIS_GREY;
    context.textBaseline = 'middle';
    context.fillText(text, pad, canvas.height / 2 + 6);
    map = new THREE.CanvasTexture(canvas);
    map.colorSpace = THREE.SRGBColorSpace;
    map.anisotropy = 8;
    aspect = canvas.width / canvas.height;
  }
  const material = new THREE.MeshBasicMaterial({
    map,
    color: map ? 0xffffff : AXIS_GREY,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    side: THREE.DoubleSide,
    toneMapped: false,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(height * aspect, height), material);
  mesh.userData.text = text;
  return mesh;
}
