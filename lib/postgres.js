var pgp = require('pg-promise')();
var connection = pgp('postgres://postgres:postgres@localhost:5432/postgres');
exports.connection = connection;

function testConnection(callback) {
    connection.one("select version() AS version")
        .then(function (data) {
            callback(data.version);
        })
        .catch(function (error) {
            callback("Error! " + error);
        });
}
exports.testConnection = testConnection;
