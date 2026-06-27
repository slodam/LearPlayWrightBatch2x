class counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        return this;

    }

    decrement() {
        this.count--;
        return this;

    }

    display() {
        console.log("Count: " + this.count);
        return this;

    }
}

new counter().increment().increment().increment().increment().display();
new counter().decrement().display();
new counter().decrement().increment().increment().increment().decrement().increment().display();