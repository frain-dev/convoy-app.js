var fs = require('fs');

function readFile(name) {
	return new Promise((resolve, reject) => {
		fs.readFile(name, (err, data) => {
			if (err) {
				reject(err);
			}
			resolve(data);
		});
	});
}

Promise.all([readFile('./dist/index.html'), readFile('./src/modules/app-portal/pre-app-portal.ts')]).then(data => {
	var html = data[0].toString();
	var ts = data[1].toString();

	const newFile = ts.replace('<!-- html code here -->', html);
	fs.writeFile('./src/modules/app-portal/app-portal.ts', newFile, function (err) {
		if (err) {
			return console.log(err);
		}
		console.log('The file was saved!');
	});
});
