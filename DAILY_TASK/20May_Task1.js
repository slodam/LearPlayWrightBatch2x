// Question 1 — HTTP Status Code Categorizer
// Problem: Given an HTTP status code, print which category it belongs to.
// 200–299 → Success
// 300–399 → Redirection
// 400–499 → Client Error
// 500–599 → Server Error
// Anything else → Invalid

let status = 499
if (status >= 200 && status <= 299) {
    console.log("Success")
}
else if (status >= 300 && status <= 399) {
    console.log("Resirection")
}
else if (status >= 400 && status <= 499) {
    console.log("Client Error")
}
else if (status >= 500 && status <= 599) {
    console.log("Server Error")
}
else {
    console.log("Invalid")
}