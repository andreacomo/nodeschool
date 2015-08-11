var http = require('http');
var url = require('url');

var routes = {

    '/api/parsetime' : function(url, res) {
        var time = new Date(url.query.iso);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds()
        }));
    },

    '/api/unixtime' : function(url, res) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            unixtime : new Date(url.query.iso).getTime()
        }));
    }

};

var server = http.createServer(function (req, res) {

    dispatch(url.parse(req.url, true), res);

}).listen(process.argv[2]);


function dispatch(url, res) {
    if (url.query.iso) {
        routes[url.pathname](url, res);
    } else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({message: 'iso missing'}));
    }
}