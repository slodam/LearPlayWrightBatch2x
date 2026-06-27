class BaseTest {

    setUp() {
        console.log("Base: Open Browser");

    }

}

class APITest extends BaseTest {

    // setUp() {
    //     console.log("APITest: Open Browser")
    // }
}

const test = new APITest();
test.setUp();