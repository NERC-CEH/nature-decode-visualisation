// The data files for every supported cube size. The default size lives in data/data-cube.* and the
// others in data/data-cube-N.*, so the page can pick one with ?size=N (data/load-data.js).

export const SIZES = [5, 6, 7, 8, 9, 10, 11, 12];
export const DEFAULT_SIZE = 9;

export function dataPath(size, folder = 'data') {
  return size === DEFAULT_SIZE ? `${folder}/data-cube.json` : `${folder}/data-cube-${size}.json`;
}
