let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

// How many test cases have we executed? 
// How many test cases are passed? 
// What is the status code that you have got for the fail? 

// for (let i = 0; i < testMatrix.length; i++) {
//     for (let j = 0; j < testMatrix[i].length; j++) {
//         if (testMatrix[i][j] === 'pass') {
//             console.log("Passed test case: " + testMatrix[i]);
//             //break;
//         }
//         else if (testMatrix[i][j] === 'fail') {
//             console.log("Status code for failed test: " + testMatrix[i][2]);
//         }
//     }
// }

for (let row of testMatrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ")
    }
    console.log();
}

// forEach
testMatrix.forEach(row => {
    row.forEach(
        cell => process.stdout.write(cell + " ")
    );
    console.log();
});