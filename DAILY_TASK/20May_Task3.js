// Question 3 — Bug Severity Classifier
// Problem: Given a bug's impact score (1–10), classify the severity.
// 9–10 → Critical (block release)
// 7–8 → High
// 4–6 → Medium
// 1–3 → Low
// Anything else → Invalid score
let severity = 10
if (severity >= 9) {
    console.log("Critical - block release")
}
else if (severity === 7 || severity === 8) {
    console.log("High")
}
else if (severity >= 4 || severity === 6) {
    console.log("Medium")
}
else if (severity >= 1 || severity === 3) {
    console.log("Low")
}
else {
    console.log("Invalid score")
}