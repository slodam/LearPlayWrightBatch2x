class car {
    #engine;
    constructor(name, enginename) {
        this.name = name;
        this.#engine = enginename;
    }

    getEngine() {
        return this.#engine;
    }

    setEngine(nameEngine) {
        this.#engine = nameEngine;
    }
}


let tesla = new car("Tesla", "V8");
console.log(tesla.getEngine());
tesla.setEngine('V9');
console.log(tesla.getEngine());