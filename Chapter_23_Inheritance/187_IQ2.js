class Test {
    execute() {
        console.log("Running generic test!!");

    }
}

class UnitTest extends Test {
    execute() {
        console.log("Running unit test — checking one function")
    }
}

class APITest extends Test {
    execute() {
        console.log("Running API test — sending HTTP request")
    }
}

class E2ETest extends Test {
    execute() {
        console.log("Running E2E test — open browser")
    }
}

let tests = [new APITest(), new UnitTest(), new E2ETest()];

tests.forEach(function (a) {
    a.execute();
}) 