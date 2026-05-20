// Question 4 — Build Health Reporter
// Problem: Given the percentage of test cases passed in a CI build, report build health.
// 100% → Green Build
// 90–99% → Stable (investigate failures)
// 70–89% → Unstable
// Below 70% → Broken Build (block deployment)

let TC_Pass = 10
if (TC_Pass === 100) {
    console.log("Green Build")
}
else if (TC_Pass <= 99 && TC_Pass >= 90) {
    console.log("Stable - Investigate failure")
}
else if (TC_Pass <= 89 && TC_Pass >= 70) {
    console.log("Unstable")
}
else if (TC_Pass < 70) {
    console.log("Broken Build - block deployment")
}