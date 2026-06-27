class BaseTest {

    setUp() {
        console.log("Base: Open browser");

    }

    tearDown() {
        console.log("Base: Close browser");

    }
}

class UITest extends BaseTest {

    setUp() {
        super.setUp();
        console.log("UITest: Open Browser");

    }
    tearDown() {
        console.log("UITest: Close Browser");
        super.tearDown();
    }
}

const test = new UITest();
test.setUp();
test.tearDown();