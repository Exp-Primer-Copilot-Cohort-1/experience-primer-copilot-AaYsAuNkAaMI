//Create web server 
// 1. require http module
// 2. create server using http.createServer() method
// 3. listen to server on port 3000

const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3000;

const server = http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    if (path === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                res.writeHead(404, {
                    'Content-Type': 'text/html'
                });
                res.write('404: File Not Found');
                return res.end();
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            return res.end();
        });
    }
    if (path === '/comments') {
        fs.readFile('./comments.json', (err, data) => {
            if (err) {
                res.writeHead(404, {
                    'Content-Type': 'application/json'
                });
                res.write('404: File Not Found');
                return res.end();
            }
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.write(data);
            return res.end();
        });
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});