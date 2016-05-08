var commandLineArgs = require('command-line-args');
var app = require('./lib/app');

var arguments = commandLineArgs([
                    { name: "help", type: Boolean, alias: "h" },
                    { name: "port", type: Number, alias: "p", default: 80 }]);
if (arguments.parse()["help"]) {
    console.log(arguments.getUsage());
    process.exit();
}
var port = arguments.parse()["port"];

app.server().listen(port, function () {
    console.log('Started on port ' + port);
});
