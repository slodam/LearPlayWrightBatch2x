let scores = [
    [85, 90, 78],   // student 0 , 253
    [60, 45, 70],   // student 1,  175
    [95, 88, 92]    // student 2, 275
];

let rowSums = scores.map(row => row.reduce((a, b) => a + b, 0));
console.log(rowSums);

let columnSums = scores[0].map((_, colIndex) => scores.reduce((sum, row) => sum + row[colIndex], 0));
console.log(columnSums);

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

let passedTests = suiteResults.flat().filter(test => test.endsWith('pass'));
console.log("Passed tests: " + passedTests.length);

let failedTests = suiteResults.flat().filter(test => test.endsWith('fail'));
console.log("Failed tests: " + failedTests.length);

// for (let i = 0; i < suiteResults.length; i++) {
//     for (let j = 0; j < suiteResults[i].length; j++) {
//         if (suiteResults[i][j].endsWith('pass')) {
//             console.log("Passed test: " + suiteResults[i][j]);
//         }
//         else if (suiteResults[i][j].endsWith('fail')) {
//             console.log("Failed test: " + suiteResults[i][j]);
//         }
//     }
// }

for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {
        if (suiteResults[i][j].includes('fail')) {
            console.log("Failed test: " + suiteResults[i][j]);
        }
    }
}

let array_2d = [
    [1, 2, 3],
    [4, 5],
    [6]
]
console.log(array_2d); // Output: 
for (row of array_2d) {
    for (cell of row) {
        console.log(cell);
    }
}

array_2d.forEach(row => {
    row.forEach(cell => {
        console.log(cell);
    });
});