var http = require('http');
var concat = require('concat-stream');

http.get(process.argv[2], function(resp) {
    resp.setEncoding('utf8');

    resp.pipe(concat(function(data) {
            console.log(data.length);
            console.log(data);
        }));
});