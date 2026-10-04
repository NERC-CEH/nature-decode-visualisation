// Assertions that the data supports the narration on the three face views of the cube.
// The viewer reads the faces, so the claims are checked on the faces (see technical-spec 8.1).

export const DENSITY_RANGE = [0.15, 0.28]; // share of the n^3 cells that hold a record

function ranks(values) {
  const order = values.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
  const out = Array(values.length);
  for (let i = 0; i < order.length; ) {
    let j = i;
    while (j + 1 < order.length && order[j + 1][0] === order[i][0]) j++;
    const rank = (i + j) / 2 + 1;
    for (let k = i; k <= j; k++) out[order[k][1]] = rank;
    i = j + 1;
  }
  return out;
}

export function spearman(xs, ys) {
  const rx = ranks(xs);
  const ry = ranks(ys);
  const mean = (a) => a.reduce((s, v) => s + v, 0) / a.length;
  const mx = mean(rx);
  const my = mean(ry);
  let num = 0;
  let dx = 0;
  let dy = 0;
  for (let i = 0; i < rx.length; i++) {
    num += (rx[i] - mx) * (ry[i] - my);
    dx += (rx[i] - mx) ** 2;
    dy += (ry[i] - my) ** 2;
  }
  return dx && dy ? num / Math.sqrt(dx * dy) : 0;
}

const sum = (a) => a.reduce((s, v) => s + v, 0);

// Returns [{ name, pass, detail }] for every assertion.
export function checkStory(cube) {
  const { size: n, habitatOf } = cube.meta;
  const { data, species } = cube;
  const third = Math.max(1, Math.floor(n / 3));
  const results = [];
  const add = (name, pass, detail) => results.push({ name, pass, detail });

  // Face projections
  const byTime = Array.from({ length: n }, (_, t) => sum(data.map((layer) => sum(layer[t]))));
  const byLocation = Array.from({ length: n }, (_, l) =>
    sum(data.map((layer) => sum(layer.map((row) => row[l])))));
  const speciesTotals = data.map((layer) => sum(layer.map(sum)));
  const occupied = data.map((layer) => {
    const set = new Set();
    for (const row of layer) row.forEach((v, l) => { if (v) set.add(l); });
    return set;
  });

  // Whole cube
  const total = sum(byTime);
  const density = total / n ** 3;
  add('cube count in range', density >= DENSITY_RANGE[0] && density <= DENSITY_RANGE[1],
    `${total} records, ${(density * 100).toFixed(1)}% of cells (want ${Math.round(DENSITY_RANGE[0] * 100)}-${Math.round(DENSITY_RANGE[1] * 100)}%)`);
  add('every species has records', speciesTotals.every((v) => v > 0),
    `records per species: ${speciesTotals.join(' ')}`);

  // Location x time face
  add('every time step and location has records', byTime.every((v) => v > 0) && byLocation.every((v) => v > 0),
    `per time: ${byTime.join(' ')}; per location: ${byLocation.join(' ')}`);
  const rho = spearman(Array.from({ length: n }, (_, t) => t), byTime);
  const first = sum(byTime.slice(0, third));
  const last = sum(byTime.slice(n - third));
  add('records rise over time', rho >= 0.9 && last >= 2 * first,
    `Spearman ${rho.toFixed(2)} (want >= 0.9); last third ${last} vs first third ${first} (want >= 2x)`);

  // The top view colours each cell of time x location by how many species have a record there, so the
  // rise has to show in every part of that picture, not only in the totals.
  const cells = Array.from({ length: n }, (_, t) => Array.from({ length: n }, (_, l) => sum(data.map((layer) => layer[t][l]))));
  const earlyAt = (l) => sum(cells.slice(0, third).map((row) => row[l]));
  const lateAt = (l) => sum(cells.slice(n - third).map((row) => row[l]));
  const locations = Array.from({ length: n }, (_, l) => l);
  const everyRises = locations.every((l) => lateAt(l) > earlyAt(l));
  const strongRises = locations.filter((l) => lateAt(l) >= 1.5 * earlyAt(l)).length;
  add('every location gets busier over time', everyRises && strongRises >= 0.7 * n,
    `locations with more records in the last third than the first: ${locations.filter((l) => lateAt(l) > earlyAt(l)).length} of ${n} (want all); at least 1.5x: ${strongRises} of ${n} (want >= ${Math.ceil(0.7 * n)})`);
  const deepest = Math.max(...cells.flat());
  const busyFloor = Math.max(3, deepest - 1);
  const busyTimes = [];
  cells.forEach((row, t) => row.forEach((c) => { if (c >= busyFloor) busyTimes.push(t); }));
  add('the busiest cells are all in the later years', busyTimes.length >= 3 && busyTimes.every((t) => t >= n / 2),
    `${busyTimes.length} cells hold >= ${busyFloor} records (want >= 3), the earliest at time ${busyTimes.length ? Math.min(...busyTimes) : 'none'} (want >= ${Math.ceil(n / 2)})`);

  // Species x location face
  const wideMin = Math.ceil((2 * n) / 3);
  const wide = species.filter((sp) => !sp.specialist && occupied[sp.id].size >= wideMin);
  add('at least two generalists occupy two-thirds of locations', wide.length >= 2,
    `${wide.length} generalists occupy >= ${wideMin} of ${n} locations`);
  const specialists = species.filter((sp) => sp.specialist);
  const bandOk = specialists.every((sp) => new Set([...occupied[sp.id]].map((l) => habitatOf[l])).size <= 1);
  add('specialists stay within one habitat band', bandOk,
    specialists.map((sp) => `species ${sp.id}: locations ${[...occupied[sp.id]].join(',') || 'none'}`).join('; '));

  // Species x time face
  if (specialists.length) {
    const specialistTime = (from, to) =>
      sum(specialists.map((sp) => sum(data[sp.id].slice(from, to).map(sum))));
    const early = specialistTime(0, third);
    const late = specialistTime(n - third, n);
    const earlyMin = Math.min(4, specialists.length * third);
    add('specialist records fall to zero', late === 0 && early >= earlyMin,
      `first third ${early} (want >= ${earlyMin}), last third ${late} (want 0)`);
  }
  return results;
}

export function storyPasses(cube) {
  return checkStory(cube).every((r) => r.pass);
}
