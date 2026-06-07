// ✅ Java Anagrams

let str1 = 'red'
let str2 = 'dare'

let arr1 = Array.from(str1)
console.log(arr1);
let arr2 = Array.from(str2)
console.log(arr2);

arr1.sort()
console.log(arr1);
arr2.sort()
console.log(arr2);

if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log("Java Anagram");
}
else {
    console.log("Not Java Anagram");
}