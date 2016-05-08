var express = require('express');
var server = express();

server.use('/', express.static(__dirname + '/public'));

server.listen(80, function () {
  console.log('Started on port 80');
});
