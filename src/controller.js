// Step controller: a linear state machine over the steps.
//
// Each step supplies enter(ctx, { from }) to play forward from the previous step, and
// reverse(ctx, { to, snapshot }) to play back to the previous step. Physics cannot be
// rewound, so on leaving a step forward the controller stores a snapshot of the scene
// (ctx.capture()), which reverse() eases back to. See technical-spec 6.
//
// `state.index` changes as a transition starts, so captions appear while the animation
// plays. `state.busy` stays true until the animation has finished.

export function createController({ steps, ctx, onChange = () => {} }) {
  const snapshots = new Map();
  const state = { index: 0, busy: false, error: null };

  const emit = () => onChange(snapshot());
  const snapshot = () => ({
    index: state.index,
    step: steps[state.index],
    busy: state.busy,
    error: state.error,
    canBack: !state.busy && state.index > 0,
    canNext: !state.busy && state.index < steps.length - 1,
    canRestart: !state.busy && state.index === steps.length - 1,
  });

  async function run(action) {
    state.busy = true;
    state.error = null;
    emit();
    try {
      await action();
    } catch (error) {
      console.error(error);
      state.error = error;
    } finally {
      state.busy = false;
      emit();
    }
  }

  return {
    get state() { return snapshot(); },
    snapshots,

    // Returns false if the press was ignored (busy or already at the end).
    async next() {
      if (state.busy || state.index >= steps.length - 1) return false;
      const from = steps[state.index];
      const to = steps[state.index + 1];
      snapshots.set(from.id, ctx.capture?.());
      state.index += 1;
      await run(() => to.enter(ctx, { from }));
      return true;
    },

    async back() {
      if (state.busy || state.index <= 0) return false;
      const from = steps[state.index];
      const to = steps[state.index - 1];
      state.index -= 1;
      await run(() => from.reverse(ctx, { to, snapshot: snapshots.get(to.id) }));
      return true;
    },

    // From the finale: ease everything back to the intro without reloading the page.
    async restart() {
      if (state.busy || state.index === 0) return false;
      state.index = 0;
      snapshots.clear();
      await run(() => ctx.reset?.());
      return true;
    },
  };
}
