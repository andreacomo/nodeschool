var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/' + process.argv[2];

mongo.connect(url)
    .then(function (db) {

        db.collection(process.argv[3])
            .removeOne({
                _id: process.argv[4]
            })
            .then(function () {
                db.close();
            })
    })
    .catch(function (err) {
        console.error(err);
    });