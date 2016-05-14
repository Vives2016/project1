var express = require('express');
var mustacheExpress = require('mustache-express');
var session = require('express-session');
var postgresDiagnostics = require('./postgres-diagnostics');
var git = require('./git');

function server() {
    var server = express();
    server.engine('html', mustacheExpress());
    server.set('view engine', 'html');
    server.set('views', __dirname + '/../views');
    server.use(session({ name: 'sid',
                         secret: 'crumbs',
                         resave: false,
                         saveUninitialized: true }));
    
    function captureArrival(req, res, next) {
        if (! req.session.arrival) {
            req.session.firstReferer = req.headers['referer'];
            req.session.arrival = Date.now();
        }
        req.session.last = Date.now();
        next();
    }
    
    server.use(captureArrival);

    server.get('/', function(req, res) {
        res.render('index', {});
    });

    server.get('/search', function(req, res) {
        res.render('search', {});
    });

    server.get('/diagnostics', function(req, res) {
        res.render('diagnostics', { sid: req.session.id,
                                    firstReferer: req.session.firstReferer,
                                    referer: req.headers['referer'],
                                    arrival: req.session.arrival,
                                    last: req.session.last });
    });

    server.get('/git-version', function(req, res) {
        git.currentHash(function(hash) {
            res.send(hash);
        });
    });

    server.get('/postgres-connection', function(req, res) {
        postgresDiagnostics.serverVersion(function(version) {
            res.send(version);
        });
    });
    
    server.use('/', express.static(__dirname + '/../public'));
    return server;
}
exports.server = server;
