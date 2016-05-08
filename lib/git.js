var childProcess = require('child_process');

function currentHash(callback) {
    childProcess.exec('git log -n 1 --format="%H"', {}, function(error, stdout, stderr) {
        if (error === null) {
            callback(stdout);
        } else {
            callback("Error! " + stderr);
        }
    });
}
exports.currentHash = currentHash;
