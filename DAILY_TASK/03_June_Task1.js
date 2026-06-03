// ✅ String Reverse | Palindrome Program
// Given a string , Reverse it and print true if they are same.
// Madam is palindrome, pramod is not

let str = 'Hello'
let rev_str = ''

for (let i = str.length - 1; i >= 0; i--) {

    rev_str = rev_str + (str.charAt(i))
}
console.log(rev_str);

if (str.toLowerCase() == rev_str.toLowerCase()) {
    console.log(str + " String is Palindrom");
}
else {
    console.log(str + " String is not Palindrom");
}
