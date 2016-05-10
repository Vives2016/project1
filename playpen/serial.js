function task1(n, callback) {
    console.log("Entering 1");
    callback(n + 1);
    console.log("Leaving 1");
}

function task2(n, callback) {
    console.log("Entering 2");
    callback(n + 2);
    console.log("Leaving 2");
}

function task3(n, callback) {
    console.log("Entering 3");
    callback(n + 3);
    console.log("Leaving 3");
}

var taskList = [task1, task2, task3];

function next(n) {
    var task = taskList.shift();
    if (task) {
        task(n, function(i) {
            next(i);
        });
    }
}

next();
