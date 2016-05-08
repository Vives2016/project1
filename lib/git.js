var childProcess = require('child_process');

function currentHash() {
    return childProcess.execSync('git log -n 1 --format="%H"').toString();
}

exports.currentHash = currentHash;
