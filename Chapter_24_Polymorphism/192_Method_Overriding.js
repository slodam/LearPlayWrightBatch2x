class BaseTest {

    Setup() {
        console.log("Base: Open Browser");

    }
}

class ApiTest extends BaseTest {

    Setup() {
        console.log("Api Test: Open Browser");

    }
}

let test = new ApiTest();
test.Setup();
