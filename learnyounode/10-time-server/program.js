var net = require('net');
var strftime = require('strftime')

net.createServer(function (socket) {

    var dateTime = strftime('%Y-%m-%d %H:%M');
    socket.end(dateTime);

}).listen(process.argv[2]);