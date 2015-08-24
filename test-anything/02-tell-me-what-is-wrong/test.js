var isCoolNumber = require(process.argv[2]);
var assert = require('assert');

assert.equal(isCoolNumber(42), true, '42 should be a cool number');
