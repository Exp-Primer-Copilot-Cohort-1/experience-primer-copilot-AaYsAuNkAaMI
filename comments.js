//create web server
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    var ext = path.extname(pathname);
    var type = '';
    var data = '';
    switch (ext) {
        case '.html':
            type = 'text/html';
            data = fs.readFileSync(__dirname + pathname, 'utf-8');
            break;
        case '.js':
            type = 'text/javascript';
            data = fs.readFileSync(__dirname + pathname, 'utf-8');
            break;
        case '.css':
            type = 'text/css';
            data = fs.readFileSync(__dirname + pathname, 'utf-8');
            break;
        case '.jpg':
            type = 'image/jpeg';
            data = fs.readFileSync(__dirname + pathname);
            break;
        case '.png':
            type = 'image/png';
            data = fs.readFileSync(__dirname + pathname);
            break;
        case '.gif':
            type = 'image/gif';
            data = fs.readFileSync(__dirname + pathname);
            break;
        default:
            type = 'text/html';
            data = fs.readFileSync(__dirname + '/index.html', 'utf-8');
            break;
    }
    res.writeHead(200, {'Content-Type': type});
    res.write(data);
    res.end();
}).listen(1337, '