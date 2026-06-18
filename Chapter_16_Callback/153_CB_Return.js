function calculate(a, b, operation) {
    return operation(a, b);
}

let sum = calculate(2, 5, function (x, y) {
    return x + y;
});

console.log("Sum: " + sum);


function step1(callback) {
    console.log("Step 1: Open browser");
    callback();
}

function step2(callback) {
    console.log("Step 2: Navigate to login page");
    callback();
}

function step3(callback) {
    console.log("Step 3: Enter credentials");
    callback();
}

function step4(callback) {
    console.log("Step 4: Click login button");
    callback();
}

step1(function () {
    step2(function () {
        step3(function () {
            step4(function () {
                console.log("Login successful");
            });
        });
    });
});

