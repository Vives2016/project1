var express = require('express');
var mustache = require('mustache-express');
var git = require('./git');
var postgres = require('./postgres');

function server() {
    var server = express();
    server.engine('mustache', mustache());
    server.set('view engine', 'mustache');
    server.set('views', __dirname + '/views');

    server.get('/', function(req, res) {
        res.render('index', {});
    });

    server.get('/search', function(req, res) {
        res.render('search', {});
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
