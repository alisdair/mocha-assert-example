module.exports = function delayedMap(array, transform, callback) {
  setTimeout(function() {
    callback(array.map(transform));
  }, 100);
};
