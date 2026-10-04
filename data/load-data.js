// Loads the data file for the cube size in the address: index.html?size=7 loads data/data-cube-7.js.
// Sizes 5 to 12 exist; anything else, or no size, loads the default (data/data-cube.js, 9 per side).
// It writes a script tag, so it works from file:// as well as from a server, with no fetch.
(function () {
  var SIZES = [5, 6, 7, 8, 9, 10, 11, 12];
  var DEFAULT_SIZE = 9;

  function fileFor(search) {
    var match = /[?&]size=(\d+)(?:&|$)/.exec(search || '');
    var size = match ? Number(match[1]) : DEFAULT_SIZE;
    if (SIZES.indexOf(size) < 0) size = DEFAULT_SIZE;
    return size === DEFAULT_SIZE ? 'data/data-cube.js' : 'data/data-cube-' + size + '.js';
  }

  if (typeof document !== 'undefined' && typeof location !== 'undefined') {
    document.write('<script src="' + fileFor(location.search) + '"><\/script>');
  }
  if (typeof module !== 'undefined') module.exports = { fileFor: fileFor };
})();
