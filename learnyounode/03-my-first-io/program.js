var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);
var newLines = file.toString().split('\n');
console.log(newLines.length - 1);
