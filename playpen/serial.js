function task1(n, callback) {
    console.log("Entering 1");
    setTimeout(function() {
        callback(n + 1);
        console.log("Completing 1")
    }, 200);
    console.log("Leaving 1");
}

function task2(n, callback) {
    console.log("Entering 2");
    setTimeout(function() {
        callback(n + 2);
        console.log("Completing 2")
    }, 100);
    console.log("Leaving 2");
}

function task3(n, callback) {
    console.log("Entering 3");
    setTimeout(function() {
        callback(n + 3);
        console.log("Completing 3")
    }, 100);
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
