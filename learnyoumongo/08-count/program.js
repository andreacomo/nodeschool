var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url)
    .then(function (db) {

        db.collection('parrots')
            .count({
                age: {$gt: +process.argv[2]}
            })
            .then(function (count) {
                console.log(count);
                db.close();
            })
    })
    .catch(function (err) {
        console.error(err);
    });