var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url)
    .then(function (db) {

        db.collection('prices')
            .aggregate([
                {$match: {size: process.argv[2]}},
                {$group: {
                    _id: '1',
                    avg: {
                        $avg: '$price'
                    }

                }}
            ])
            .toArray()
            .then(function (result) {
                console.log(Number(result[0].avg).toFixed(2));
                db.close();
            })
    })
    .catch(function (err) {
        console.error(err);
    });