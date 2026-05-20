// Question 2 — Test Case Pass/Fail Verdict
// Problem: Compare actual result with expected result and print test verdict.

let expected = "Login Successful"
//let actual = "Login Successful"
let actual = "Invalid Credentials"
if (expected === actual) {
    console.log("✅ Test Passed")
}
else {
    console.log("❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials")
}