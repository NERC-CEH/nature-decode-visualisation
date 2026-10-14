// What the page is running on. The phone test itself lives in data/load-data.js (it has to run before
// the data file is chosen) and leaves its answer on window.UKCEH_PHONE. The functions take the window
// so tests can pass a stand-in.

export const isPhone = (env = globalThis) => Boolean(env.UKCEH_PHONE);

export function isPortrait(env = globalThis) {
  const query = env.matchMedia?.('(orientation: portrait)');
  return query ? query.matches : (env.innerHeight ?? 0) > (env.innerWidth ?? 0);
}

// The animation is landscape only: a phone held upright is asked to turn.
export const needsTurn = (env = globalThis) => isPhone(env) && isPortrait(env);

// Calls `onChange(needed)` when a phone is turned upright or on its side, and once now. Returns a stop function.
export function watchTurn(onChange, env = globalThis) {
  let shown = null;
  const check = () => {
    const needed = needsTurn(env);
    if (needed !== shown) onChange(shown = needed);
  };
  env.addEventListener?.('resize', check);
  env.addEventListener?.('orientationchange', check);
  check();
  return () => {
    env.removeEventListener?.('resize', check);
    env.removeEventListener?.('orientationchange', check);
  };
}

// Where the browser allows it (usually only in full screen), keep a phone in landscape. Never throws.
export async function lockLandscape(env = globalThis) {
  try {
    await env.screen?.orientation?.lock?.('landscape');
  } catch {
    // not allowed here: the prompt to turn the phone is the fallback
  }
}
