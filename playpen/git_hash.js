var childProcess = require('child_process');

console.log(childProcess.execSync('git log -n 1 --format="%H"').toString());
