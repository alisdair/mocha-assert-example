module.exports = function promisedMap(array, transform) {
  return new Promise(function(resolve/*, _reject */) {
    setTimeout(function() {
      resolve(array.map(transform));
    }, 100);
  });
};
