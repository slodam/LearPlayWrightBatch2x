// let unknown: unknown = 'Hello';

// if (typeof unknown === 'string') {
//     console.log("Hi");
// }

// let message: string = 'hello';

// let usename: string;
// let userId: number;

// // Function annotations
// function greet(name: string): string {
//     return `hello, ${name}!`;
// }

// //Arrow function annotation
// const Multiply = (a: number, b: number): number => a * b;

// //Object annotation
// let user: { name: string; age: number } = { name: 'John', age: 32 };


//---------------------------------------------------------------------------
let unknown: unknown = "hello";

if (typeof unknown === "string") {
    console.log("Hi");
}

let message: string = "Hello";

let username: string;
let userId: number;

// Function annotations
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Arrow function annotations
const multiply = (a: number, b: number): number => a * b;

// Object annotations
let user: { name: string; age: number } = {
    name: "John",
    age: 30
};