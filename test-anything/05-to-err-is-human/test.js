var feedCat = require(process.argv[2]);
var test = require('tape');

test('should throw error if fed with chocolate', function(t) {

    t.plan(2);

    t.equal(feedCat('fish'), 'yum', 'should feed cat');

    t.throws(function() {
        feedCat('chocolate');
    }, 'should throw error because of chocolate');

});