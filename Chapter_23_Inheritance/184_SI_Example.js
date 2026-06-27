class Animal {

    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating");

    }
    sleep() {
        console.log(this.name + " is sleeping");

    }
}

class Dog extends Animal {

    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(this.name + " is barking");
    }
}

let puppy = new Dog('Lucky', 'Pug');
puppy.eat();
puppy.sleep();
puppy.bark();

console.log(puppy.name + " is a " + puppy.breed);
