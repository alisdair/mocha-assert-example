var assert = require('assert');
var maybeFirst = require('../lib/maybe-first');

describe('maybeFirst', function() {
  it('returns the first element of an array', function() {
    var result = maybeFirst([1, 2, 3]);

    assert.equal(result, 1, 'maybeFirst([1, 2, 3]) is 1');
  });

  it('returns undefined if array is empty', function() {
    var result = maybeFirst([]);

    assert.strictEqual(result, undefined, 'maybeFirst([]) is undefined');
  });

  it('returns undefined if null is passed', function() {
    var result = maybeFirst(null);

    assert.strictEqual(result, undefined, 'maybeFirst(null) is undefined');
  });

  it('returns undefined if no argument given', function() {
    var result = maybeFirst();

    assert.strictEqual(result, undefined, 'maybeFirst() is undefined');
  });
});
