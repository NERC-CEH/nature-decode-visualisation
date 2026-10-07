// esbuild-wasm runs in a child process, and on some machines (seen with Node 26.10 on Windows) OpenSSL in
// that child refuses to give random numbers ("entropy source strength too weak"), which stops the build.
// The build tool only needs them to seed its hash tables, so fall back to Math.random if that happens.
// scripts/build.mjs passes this file to the child with NODE_OPTIONS=--require.
const original = globalThis.crypto;
Object.defineProperty(globalThis, 'crypto', { configurable: true, value: Object.assign(Object.create(original), { getRandomValues(view) {
  try {
    return original.getRandomValues(view);
  } catch {
    // OpenSSL refuses ("entropy source strength too weak"); only the build tool's hash seeding needs these
    const bytes = new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
    for (let i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256);
    return view;
  }
} }) });
