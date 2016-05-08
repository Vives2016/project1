var commandLineArgs = require('command-line-args');
var express = require('express');

var arguments = commandLineArgs([
                    { name: "help", type: Boolean, alias: "h" },
                    { name: "port", type: Number, alias: "p", default: 80 }]);
if (arguments.parse()["help"]) {
    console.log(arguments.getUsage());
    process.exit();
}
var port = arguments.parse()["port"];
var server = express();
server.use('/', express.static(__dirname + '/public'));

server.listen(port, function () {
  console.log('Started on port ' + port);
});
