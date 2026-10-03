// Three.js renderer, camera, lights and floor. Returns null when WebGL is unavailable, so the
// page can fall back to text only (technical-spec 11).
//
// The camera has two views, each a point to look at, a distance and an angle above the horizontal:
//  - "floor": low and wide, with the whole floor in view and the floor a third of the way up the
//    screen, for the steps where cubes fall, scatter and pile up;
//  - "cube": higher, looking at the arranged data cube floating above the floor.
// setView() moves the camera smoothly from one to the other.

import * as THREE from 'three';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import { CAMERA, CUBE } from './config.js';
import { tween, ease } from './tween.js';

const toRadians = (degrees) => (degrees * Math.PI) / 180;
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

  // Axis titles are HTML laid over the canvas.
  const labelRenderer = new CSS2DRenderer();
  Object.assign(labelRenderer.domElement.style, { position: 'absolute', inset: '0', pointerEvents: 'none', overflow: 'hidden' });
  container.appendChild(labelRenderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 500);

  // Soft ambient light from above plus one key light that casts the shadows.
  scene.add(new THREE.HemisphereLight(0xffffff, 0xb0b0b0, 1.6));
  const sun = new THREE.DirectionalLight(0xffffff, 2.2);
  sun.position.set(-8, 22, 12);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.bias = -0.0005;
  scene.add(sun);

  // The floor is invisible apart from the shadows that fall on it.
  const SHADOW_OPACITY = 0.22;
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), new THREE.ShadowMaterial({ opacity: SHADOW_OPACITY, depthWrite: false }));
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);
  let shadowAmount = 1;
  let shadowFade = null;

  // The data cube turns about its middle. `pivot` sits at the middle of the cube and turns; the
  // cubes, the frame and the axis titles go in `cubeGroup`, which sits inside it at the opposite
  // offset, so everything inside uses ordinary world positions.
  const pivot = new THREE.Group();
  const cubeGroup = new THREE.Group();
  pivot.add(cubeGroup);
  scene.add(pivot);

  const views = { floor: null, cube: null };
  let arena = null;
  let frame = null; // { centreY, radius } of the arranged cube
  let spawnY = 20;
  let current = null; // the view the camera is at: { target, distance, elevation }
  let currentName = 'floor';
  let moving = null;
  const corner = new THREE.Vector3();

  function place({ target, distance, elevation }) {
    const up = toRadians(elevation);
    camera.position.set(target.x, target.y + Math.sin(up) * distance, target.z + Math.cos(up) * distance);
    camera.lookAt(target);
    camera.updateMatrixWorld();
  }
  const copyView = (v) => ({ target: v.target.clone(), distance: v.distance, elevation: v.elevation });

  // The floor view: the whole floor fits, and the floor sits a third of the way up the screen.
  function fitFloor() {
    const { width, depth } = arena;
    const corners = [];
    for (const x of [-width / 2, width / 2]) {
      for (const y of [0, 2]) {
        for (const z of [-depth / 2, depth / 2]) corners.push([x, y, z]);
      }
    }
    const view = { target: new THREE.Vector3(0, 0.5, 0), distance: 100, elevation: CAMERA.elevation };
    const visible = (distance) => {
      place({ ...view, distance });
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
    view.distance = far;

    // Raise the point the camera looks at until the middle of the floor sits CAMERA.floorHeight
    // of the way up the screen, leaving the sky free for the drop.
    const wanted = -1 + 2 * CAMERA.floorHeight;
    const baseY = view.target.y;
    let shiftLow = 0;
    let shiftHigh = far;
    for (let i = 0; i < 30; i++) {
      const mid = (shiftLow + shiftHigh) / 2;
      view.target.y = baseY + mid;
      place(view);
      corner.set(0, baseY, 0).project(camera);
      if (corner.y > wanted) shiftLow = mid; else shiftHigh = mid;
    }
    view.target.y = baseY + shiftHigh;
    place(view);

    // Release height: the lowest point of a cube released anywhere in the stream (a cube turned
    // any way reaches 0.87 below its centre) must be above the top of the view, with a margin of
    // a cube or two so a slow frame cannot bring one into view.
    const reach = arena.streamRadius ?? 0;
    const streamCorners = [[-reach, -reach], [-reach, reach], [reach, -reach], [reach, reach]];
    let low = 1;
    let high = view.distance * 4;
    for (let i = 0; i < 30; i++) {
      const mid = (low + high) / 2;
      const lowestEdge = Math.min(...streamCorners.map(([x, z]) => corner.set(x, mid - 1, z).project(camera).y));
      if (lowestEdge > 1.04) high = mid; else low = mid;
    }
    spawnY = high + 1.5;
    const half = Math.max(width, depth) * 0.75;
    Object.assign(sun.shadow.camera, { left: -half, right: half, top: half, bottom: -half, near: 1, far: 90 });
    sun.shadow.camera.updateProjectionMatrix();
    return view;
  }

  // The cube view: the sphere that holds the cube, and room round it for the axis titles, fits
  // in the view whatever its shape.
  function fitCube() {
    const radius = frame.lookRadius * CUBE.margin;
    const vertical = toRadians(camera.fov);
    const horizontal = 2 * Math.atan(Math.tan(vertical / 2) * camera.aspect);
    const distance = radius / Math.sin(Math.min(vertical, horizontal) / 2);
    return { target: new THREE.Vector3(0, frame.lookY, 0), distance, elevation: CUBE.elevation };
  }

  function refit() {
    if (arena) views.floor = fitFloor();
    if (frame) views.cube = fitCube();
    // keep the camera on its current view when the window changes, unless it is on the move
    if (!moving && views[currentName]) {
      current = copyView(views[currentName]);
      place(current);
    }
  }

  function resize() {
    const width = Math.max(1, container.clientWidth);
    const height = Math.max(1, container.clientHeight);
    renderer.setSize(width, height, false);
    labelRenderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    refit();
  }
  new ResizeObserver(resize).observe(container);
  resize();

  // Where the cursor is, in view coordinates (-1..1 across and up), if it is over the stage.
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
    pivot,
    cubeGroup,
    labelParent: labelRenderer.domElement,

    setArena(size) { arena = size; refit(); },
    // The size of the arranged cube, so the camera can be fitted to it.
    setCubeFrame(size) { frame = size; refit(); },
    get spawnY() { return spawnY; },
    setClearColour: (hex) => renderer.setClearColor(hex),

    // Move the camera to the "floor" or "cube" view over `seconds`.
    setView(name, seconds) {
      moving?.cancel();
      currentName = name;
      const to = views[name];
      if (!to || !current) return Promise.resolve();
      const from = copyView(current);
      moving = tween({
        duration: seconds,
        easing: ease.inOutCubic,
        onUpdate: (t) => {
          current = {
            target: from.target.clone().lerp(to.target, t),
            distance: from.distance + (to.distance - from.distance) * t,
            elevation: from.elevation + (to.elevation - from.elevation) * t,
          };
          place(current);
        },
      });
      return moving.finished.then((completed) => {
        if (completed) moving = null;
      });
    },

    // The strength of the shadows on the floor, 0..1.
    fadeShadow(target, seconds) {
      shadowFade?.cancel();
      const from = shadowAmount;
      if (from === target) return Promise.resolve();
      shadowFade = tween({
        duration: seconds,
        easing: ease.inOutQuad,
        onUpdate: (p) => {
          shadowAmount = from + (target - from) * p;
          floor.material.opacity = SHADOW_OPACITY * shadowAmount;
        },
      });
      return shadowFade.finished.then(() => undefined);
    },

    // The cursor in view coordinates, or null if it is off the stage.
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
      labelRenderer.render(scene, camera);
    },
  };
}
