class BasePage {
    verify() {
        console.log("Verifying the Base Page!");

    }
}
class LoginPage extends BasePage {
    verify() {
        console.log("Verify: UserName field exist");
        console.log("Verify: Password field exist");
        console.log("Verify: Login button is visible");

    }
}

class DashboardPage extends BasePage {
    verify() {

        console.log("Verify: Welcome tile is visible");
        console.log("Verify: Side menu is visible");

    }
}

class CartPage extends BasePage {
    verify() {
        console.log("Verify: Cart items are displayed!");
        console.log("Verify: Total price is correct");

    }
}

const pages = [new LoginPage(), new DashboardPage(), new CartPage()]

pages.forEach(function (test) {
    test.verify();
    console.log('----------------------');

})