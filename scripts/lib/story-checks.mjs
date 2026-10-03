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
  add('records rise over time', rho >= 0.8 && last >= 1.5 * first,
    `Spearman ${rho.toFixed(2)} (want >= 0.8); last third ${last} vs first third ${first} (want >= 1.5x)`);

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
