var url = require('url');
var fs = require('fs');
var path = require('path');

function renderHTML(filepath, response) {
	fs.readFile(filepath, null, function(error, data) {
		if (error) {
			response.writeHead(404);
			response.write('File Not Found');
		} else {
			response.write(data); 
		}
		response.end();
	});
}

module.exports = {
	handleRequest: function(request, response) {
		response.writeHead(200, {'Content-Type': 'text/html'});
		var urlpath = url.parse(request.url).pathname;
		switch (urlpath) {
			case '/':
				var indexFilePath = path.join(__dirname, 'index.html');
				renderHTML(indexFilePath, response);
				break;
			case '/login':
				var loginFilePath = path.join(__dirname, 'login.html');
				renderHTML(loginFilePath, response);
				break;
			default:
				response.writeHead(404);
				response.write('File Not Found');
				response.end();
		}
	}
}