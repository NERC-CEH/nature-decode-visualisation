// Three.js renderer, camera, lights and floor. Returns null when WebGL is unavailable, so the
// page can fall back to text only (technical-spec 11).

import * as THREE from 'three';
import { CAMERA } from './config.js';

const angle = (CAMERA.elevation * Math.PI) / 180;
const ELEVATION = new THREE.Vector3(0, Math.sin(angle), Math.cos(angle)); // from the target towards the camera
const FIT = { x: 0.94, y: 0.9 }; // the arena fills this much of the view

export function createScene(container) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true });
  } catch {
    return null;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 500);
  const target = new THREE.Vector3(0, 0.5, 0);

  // Soft ambient light from above plus one key light that casts the shadows.
  scene.add(new THREE.HemisphereLight(0xffffff, 0xb0b0b0, 1.6));
  const sun = new THREE.DirectionalLight(0xffffff, 2.2);
  sun.position.set(-8, 22, 12);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.bias = -0.0005;
  scene.add(sun);

  // The floor is invisible apart from the shadows that fall on it.
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.ShadowMaterial({ opacity: 0.22, depthWrite: false }));
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  let arena = null;
  let spawnY = 20;
  const corner = new THREE.Vector3();

  // The distance (along the viewing direction) at which the whole arena just fits in view.
  function fit() {
    if (!arena) return;
    target.set(0, 0.5, 0);
    const { width, depth } = arena;
    const corners = [];
    for (const x of [-width / 2, width / 2]) {
      for (const y of [0, 2]) {
        for (const z of [-depth / 2, depth / 2]) corners.push([x, y, z]);
      }
    }
    const place = (distance) => {
      camera.position.copy(target).addScaledVector(ELEVATION, distance);
      camera.lookAt(target);
      camera.updateMatrixWorld();
    };
    const visible = (distance) => {
      place(distance);
      return corners.every((c) => {
        corner.set(...c).project(camera);
        return Math.abs(corner.x) <= FIT.x && Math.abs(corner.y) <= FIT.y;
      });
    };
    let near = 5;
    let far = 400;
    for (let i = 0; i < 30; i++) {
      const mid = (near + far) / 2;
      if (visible(mid)) far = mid; else near = mid;
    }
    place(far);

    // Lower the floor in the frame: raise the point the camera looks at until the middle of the
    // floor sits CAMERA.floorHeight of the way up the screen, leaving the sky free for the drop.
    const wanted = -1 + 2 * CAMERA.floorHeight;
    const baseY = target.y;
    let shiftLow = 0;
    let shiftHigh = far;
    for (let i = 0; i < 30; i++) {
      const mid = (shiftLow + shiftHigh) / 2;
      target.y = baseY + mid;
      place(far);
      corner.set(0, baseY, 0).project(camera);
      if (corner.y > wanted) shiftLow = mid; else shiftHigh = mid;
    }
    target.y = baseY + shiftHigh;
    place(far);

    // Release height: the lowest point of a cube released anywhere in the stream (a cube turned
    // any way reaches 0.87 below its centre) must be above the top of the view, with a margin of
    // a cube or two so a slow frame cannot bring one into view.
    const reach = arena.streamRadius ?? 0;
    const streamCorners = [[-reach, -reach], [-reach, reach], [reach, -reach], [reach, reach]];
    let low = 1;
    let high = camera.position.distanceTo(target) * 4;
    for (let i = 0; i < 30; i++) {
      const mid = (low + high) / 2;
      const lowestEdge = Math.min(...streamCorners.map(([x, z]) => corner.set(x, mid - 1, z).project(camera).y));
      if (lowestEdge > 1.04) high = mid; else low = mid;
    }
    spawnY = high + 1.5;
    const half = Math.max(width, depth) * 0.75;
    Object.assign(sun.shadow.camera, { left: -half, right: half, top: half, bottom: -half, near: 1, far: 90 });
    sun.shadow.camera.updateProjectionMatrix();
  }

  function resize() {
    const width = Math.max(1, container.clientWidth);
    const height = Math.max(1, container.clientHeight);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    fit();
  }
  new ResizeObserver(resize).observe(container);
  resize();

  // Where the cursor meets the plane through the cubes' centres, or null if it is off the stage.
  const pointer = new THREE.Vector2();
  let pointerOver = false;
  container.addEventListener('pointermove', (e) => {
    const rect = container.getBoundingClientRect();
    pointer.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
    pointerOver = true;
  });
  container.addEventListener('pointerleave', () => { pointerOver = false; });
  const raycaster = new THREE.Raycaster();
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -0.5);
  const hit = new THREE.Vector3();

  return {
    scene,
    camera,
    setArena(size) { arena = size; fit(); },
    get spawnY() { return spawnY; },
    setClearColour: (hex) => renderer.setClearColor(hex),
    // The cursor in view coordinates (-1..1 across and up), or null if it is off the stage.
    pointerNdc() {
      return pointerOver ? { x: pointer.x, y: pointer.y } : null;
    },
    floorPoint() {
      if (!pointerOver) return null;
      raycaster.setFromCamera(pointer, camera);
      return raycaster.ray.intersectPlane(plane, hit) ? { x: hit.x, z: hit.z } : null;
    },
    render() {
      renderer.render(scene, camera);
    },
  };
}
