var express = require('express');
var fs = require('fs');
var path = require('path');
var git = require('./git');
var postgres = require('./postgres');

function template(filename) {
    return path.join(__dirname, '../public', filename);
};

function server() {
    var server = express();
    var templates = path.join(__dirname, '../public');

    server.get('/location', function(req, res) {
        fs.createReadStream(template('index.html')).pipe(res);
    });

    server.get('/search', function(req, res) {
        fs.createReadStream(template('search.html')).pipe(res);
    });

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
