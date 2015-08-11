var fs = require('fs');

fs.readdir(process.argv[2], function(err, list){
	if (err)
		throw err;
	list.forEach(function(file) {
		if (file.match('\\.' + process.argv[3] + '$')) {
			console.log(file)
		}
	});
});
