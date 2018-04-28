var http = require('http');
var fs = require('fs'),
	path = require('path'),    
    filePath = path.join(__dirname, 'index.html');

function onRequest(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	fs.readFile(filePath, null, function(error, data) {
		if (error) {
			console.log('error :',error);
			response.writeHead(404);
			response.write('File Not Found');
		} else {
			response.write(data); 
		}
		response.end();
	});
}

http.createServer(onRequest).listen(8000);