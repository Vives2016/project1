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

function next(n, tasks, callback) {
    var task = tasks.shift();
    if (task) {
        task(n, function(i) {
            callback(i);
            next(i, tasks, callback);
        });
    }
}

next(0, [task1, task2, task3], console.log);
