//Primitive types

let name: string = 'John';
let a: number = 123;
let pi: number = 3.14;
let dist: number = 4789123471987254;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

//Arrays
let numbers: number[] = [1, 2, 3, 4];
let name1: Array<string> = ['arun', 'atul'];

// Any (avoid when possible)
let anything: any = 'Hello';

// Unknown (safer than any)
let Unknown: unknown = 'Hello';

let message: string = "Hello Typescript!";
let count: number = 42;

console.log("Message:", message);
console.log("Count:", count);
console.log("Is Active:", isActive);