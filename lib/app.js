function server() {
    var express = require('express');
    var git = require('./git');
    
    var server = express();
    
    server.get('/git-hash', function(req, res) {
        res.send(git.currentHash());
    });
    
    server.use('/', express.static(__dirname + '/../public'));
    
    return server;
}

exports.server = server;
