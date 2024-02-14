// create web server for comment
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/comment', function(req, res) {
    console.log(req.body);
    res.send(req.body);
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
```

## 4.2.3. Run server

Run the server by using the following command:

```
$ node comment.js
```

## 4.2.4. Test the server

Use the following command to test the server:

```
$ curl -X POST -H "Content-Type: application/json" -d '{"name": "John", "age": 30}' http://localhost:8081/comment
```

## 4.2.5. Result

The server will print the following result:

```
{ name: 'John', age: 30 }
```

# 4.3. RESTful API

RESTful API is an architectural style for an application programming interface (API) that uses HTTP requests to GET, PUT, POST and DELETE data.

## 4.3.1. Create a RESTful API server

Create a file named `restful.js` with the following content:

```js
// Path: restful.js
// create web server for RESTful API
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/user', function(req, res) {
    res.send('GET request to the homepage');
});

app.post('/user', function(req, res) {
    res.send('POST request to the homepage');
});

app.put('/user', function(req, res) {
    res.send('PUT request to the homepage');
});

app.delete('/user', function(req, res) {
    res.send('DELETE request to the homepage');
});

var server = app.listen(8082, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
```

## 4.3.2. Run server

Run the server by using the following command:

```
 
