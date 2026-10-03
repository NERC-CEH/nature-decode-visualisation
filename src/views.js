// Camera views and how to move between them. A view is a point to look at (`target`), a distance
// from it, an angle above the horizontal (`elevation`, degrees) and a field of view (`fov`,
// degrees). Pure functions, no DOM.

const radians = (degrees) => (degrees * Math.PI) / 180;
const degrees = (rad) => (rad * 180) / Math.PI;

// The view a fraction `t` (0..1, already eased) of the way from one view to another.
//
// Where the field of view changes, the camera keeps the cube the same size on screen while it
// does: the size of what it sees (distance x tan(fov / 2)) moves steadily, and the field of view
// moves steadily in log scale, so as the view narrows the camera backs off. That is a dolly zoom,
// and it turns a perspective view into an almost flat one without the cube appearing to change.
export function interpolateView(from, to, t) {
  const tanFrom = Math.tan(radians(from.fov) / 2);
  const tanTo = Math.tan(radians(to.fov) / 2);
  const size = from.distance * tanFrom + (to.distance * tanTo - from.distance * tanFrom) * t;
  const tanNow = Math.exp(Math.log(tanFrom) + (Math.log(tanTo) - Math.log(tanFrom)) * t);
  return {
    target: {
      x: from.target.x + (to.target.x - from.target.x) * t,
      y: from.target.y + (to.target.y - from.target.y) * t,
      z: from.target.z + (to.target.z - from.target.z) * t,
    },
    distance: size / tanNow,
    elevation: from.elevation + (to.elevation - from.elevation) * t,
    fov: degrees(Math.atan(tanNow) * 2),
  };
}

// How much of the world, vertically, a view sees at its target: the size of the cube on screen
// is the size of the cube divided by this.
export function visibleHeight(view) {
  return 2 * view.distance * Math.tan(radians(view.fov) / 2);
}
