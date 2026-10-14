// Loads the data file for the cube size in the address: index.html?size=7 loads data/data-cube-7.js.
// Sizes 5 to 12 exist; anything else, or no size, loads the default (data/data-cube.js, 9 per side),
// or 7 per side on a phone, which has less to draw with.
// It writes a script tag, so it works from file:// as well as from a server, with no fetch.
(function () {
  var SIZES = [5, 6, 7, 8, 9, 10, 11, 12];
  var DEFAULT_SIZE = 9;
  var PHONE_SIZE = 7;
  var PHONE_MAX_SIDE = 500; // CSS pixels: the short side of a phone's screen, in either orientation

  // A phone is a touch screen whose short side is small. `env` is the window, so tests can pass a stand-in.
  function isPhone(env) {
    if (!env || !env.screen || !env.matchMedia) return false;
    var coarse = env.matchMedia('(pointer: coarse)').matches;
    return coarse && Math.min(env.screen.width, env.screen.height) <= PHONE_MAX_SIDE;
  }

  function fileFor(search, phone) {
    var match = /[?&]size=(\d+)(?:&|$)/.exec(search || '');
    var size = match ? Number(match[1]) : (phone ? PHONE_SIZE : DEFAULT_SIZE);
    if (SIZES.indexOf(size) < 0) size = phone ? PHONE_SIZE : DEFAULT_SIZE;
    return size === DEFAULT_SIZE ? 'data/data-cube.js' : 'data/data-cube-' + size + '.js';
  }

  if (typeof document !== 'undefined' && typeof location !== 'undefined') {
    var phone = isPhone(window);
    window.UKCEH_PHONE = phone; // the page script reads this (src/device.js)
    document.write('<script src="' + fileFor(location.search, phone) + '"><\/script>');
  }
  if (typeof module !== 'undefined') module.exports = { fileFor: fileFor, isPhone: isPhone };
})();
