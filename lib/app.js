function server() {
    var express = require('express');
    var git = require('./git');
    var postgres = require('./postgres');
    
    var server = express();
    
    server.get('/git-version', function(req, res) {
        git.currentHash(function(hash) {
            res.send(hash);
        });
    });
    
    server.get('/postgres-connection', function(req, res) {
        postgres.testConnection(function(data) {
            res.send(data);
        });
    });
    
    server.use('/', express.static(__dirname + '/../public'));
    
    return server;
}
exports.server = server;
