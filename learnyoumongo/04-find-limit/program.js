var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function (err, db) {

    if (err) {
        throw err;
    }

    db.collection('parrots')
        .find(
        {
            age: {$gt: parseInt(process.argv[2])}
        },
        {
            name: true, // not mandatory
            age: true,  // not mandatory
            _id: false
        })
        .toArray(function (err, documents) {
            if (err) {
                throw err;
            }
            console.log(documents);
            db.close();
        });
});