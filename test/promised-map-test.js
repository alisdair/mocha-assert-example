var assert = require('assert');
var promisedMap = require('../lib/promised-map');

describe('promisedMap', function() {
  it('eventually returns the results', function() {
    var input = [1, 2, 3];
    var transform = function(x) { return x * 2; };

    return promisedMap(input, transform).then(function(result) {
      assert.deepEqual(result, [2, 4, 6]);
    });
  });
});
