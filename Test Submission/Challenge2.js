//Print a test report with total tests, counts, pass rate percentage, 
// and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).
//Total Tests : 8 Passed: 5 Failed: 2 Skipped: 1 Pass Rate: 62.50% VERDICT: Minor failures.
// Review before release.

let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]

console.log("Total Tests: ", testResults.length)
let passed = 0
let failed = 0
let skipped = 0
for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === 'pass') {
        passed++
    } else if (testResults[i] === 'fail') {
        failed++
    } else {
        skipped++
    }
}
console.log("Passed: ", passed)
console.log("Failed : ", failed)
console.log("Skipped: ", skipped)

let total = testResults.length
let percentOfPass = (passed / total) * 100
console.log("Pass Rate: ", percentOfPass + "%")

if (passed === total) {
    console.log("VERDICT: Ready for release")
} else if (failed <= 2) {
    console.log("VERDICT: Minor failures.Review before release")
} else if (failed > 2) {
    console.log("VERDICT: Block the realease")
}