class Person {

    constructor() {

        console.log('I will be called when object is created!')
    }

    // Attributes
    name;
    email;
    salary;
    address;

    // Behaviour
    sleep() { }
    eat() { }
    walk() { }

}

let obj_Ref = new Person();
// obg_ref = Is called the object reference (address)
// new Person(); -> Is the object with the new keyword

// console.log(obj_ref);