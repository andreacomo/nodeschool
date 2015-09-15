var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function (err, db) {

    if (err) {
        throw err;
    }

    var doc = {
        firstName: process.argv[2],
        lastName: process.argv[3]
    };

    console.log(JSON.stringify(doc));

    db.collection('docs')
        .insertOne(doc)
        .then(function () {
            db.close();
        })
});