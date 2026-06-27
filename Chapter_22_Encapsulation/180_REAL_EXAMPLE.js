class Person {

    #child1
    #child2
    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }

    getChild() {
        return this.#child1;
    }

    setChild(Change_name) {

        this.#child1 = Change_name;
    }
}

let p = new Person('abc', 'def', 'ghi')
console.log(p.name);
console.log(p.getChild());
//let cn = p.setChild('kjk');
p.setChild('kjk');
console.log(p.getChild());