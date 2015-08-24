var fancify = require(process.argv[2]);
var test = require('tape');

test('should return a string wrapped', function(t) {

    t.equal(fancify('Hello World'), '~*~Hello World~*~', 'should return a string wrapped in "~*~"');
    t.equal(fancify('Hello World', true), '~*~HELLO WORLD~*~', 'should return a string wrapped in "~*~" and uppercase');
    t.equal(fancify('Hello World', false, '!'), '~!~Hello World~!~', 'should return a string wrapped in "~!~"');

    t.end();
})