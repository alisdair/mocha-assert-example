var assert = require('assert');
var delayedMap = require('../lib/delayed-map');

describe('delayedMap', function() {
  it('eventually returns the results', function(done) {
    var input = [1, 2, 3];
    var transform = function(x) { return x * 2; };

    delayedMap(input, transform, function(result) {
      assert.deepEqual(result, [2, 4, 6]);
      done();
    });
  });
});
