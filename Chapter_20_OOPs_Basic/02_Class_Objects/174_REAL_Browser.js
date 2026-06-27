class TestCases {

    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display() {

        console.log(this.name, " -> " + this.status, " -> " + this.priority);

    }
}

const Login_Tc = new TestCases('Login Test', 'Pass', 'P0');
const Singup_Tc = new TestCases('Signup Test', 'Fail', 'P1');

Login_Tc.display();
Singup_Tc.display();