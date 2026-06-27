class Car {
    //CAR Constructor
    constructor(name_give_during_object_creation) {
        this.name = name_give_during_object_creation;
    }
    //Attribute
    //Behavior
    drive() {

        console.log("I am driving ", this.name);
    }
}
const tesla = new Car('Model S');
tesla.drive();
const hyundai = new Car('Grand i10');
hyundai.drive();