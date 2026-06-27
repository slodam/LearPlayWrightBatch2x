class Bug {
    constructor(title, severity) {
        this.title = title;
        this.severity = severity;

    }

    display() {

        console.log('[' + this.title + '] ' + this.severity);

    }
}

let b1 = new Bug('Login Test', 'Critical');
let b2 = new Bug('Singup test', 'Medium');

b1.display();
b2.display();