function greetTester(name, callback) {
    console.log("Welcome! " + name);
    callback();
}

greetTester("Dev", function () {
    console.log("Let's start testing with normal function.");
});

console.log("--------------------------------------------------");

greetTester("Dev", () => {
    console.log("Let's start testing with arrow function.");
});

// // Callback with Parameters

function runTests(testName, callback) {
    let status = 'Pass';
    callback(testName, status);
}

runTests('Login Test', function (testName, status) {
    console.log(testName + " -> " + status);
});

runTests('Signup Test', (testName, status) => {
    console.log(testName + " -> " + status);
});


//  Sync Callback — forEach
let bugs = ["UI glitch", "API timeout", "Wrong redirect"];

bugs.forEach(function (bug, index) {
    console.log("Bug " + (index + 1) + "-> " + bug);
});

bugs.forEach((bug, index) => {
    console.log("Bug " + (index + 1) + "-> " + bug);
}); 
