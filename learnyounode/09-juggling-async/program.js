var http = require('http');
var bl = require('bl');

var done = after(3, function(data) {
    var sorted = data.sort(function(a, b) {
        return a.order - b.order;
    });
    sorted.forEach(function(s) {
        console.log(s.data);
    });
});

getData(process.argv[2], 1, done);
getData(process.argv[3], 2, done);
getData(process.argv[4], 3, done);

function getData(url, order, done) {
    http.get(url, function(resp) {
        resp.pipe(bl(function(err, data) {
            if (err)
                return console.error;
            done({order: order, data: data.toString()});
        }));
    });
}

function after(counter, callback) {

    var callCount = 1

    var argsArray = [];

    return function(args) {
        argsArray.push(args)
        if (callCount < counter) {
            callCount++;
        } else {
            callback(argsArray);
        }
    }
}