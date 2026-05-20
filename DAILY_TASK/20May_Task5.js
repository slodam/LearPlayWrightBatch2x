// Question 5 — Login Lockout After Failed Attempts
// Problem: Track failed login attempts. Lock the account after 3 failed attempts.

let attempts = 0
if (attempts === 0) {
    console.log("Login successful")
}
else if (attempts === 1) {
    console.log("2 attempt left before lockout")
}
else if (attempts === 2) {
    console.log("1 attempt left before lockout")
}
else if (attempts === 3) {
    console.log("🔒 Account Locked — Contact support")
}
