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
    }, 300);
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

function pmap(n, tasks, callback) {
    var results = [];
    var total = 0;
    tasks.forEach(function(task, i, tasks) {
        task(n, function(result) {
            results[i] = result;
            total += 1;
            if (total == tasks.length) {
                callback(results);
            }
        });
    });
}

pmap(0, [task1, task2, task3], console.log);
