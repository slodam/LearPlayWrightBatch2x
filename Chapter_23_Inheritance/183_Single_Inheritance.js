import { log } from "node:console"

class BasePage {

    constructor(pageName) {
        this.pageName = pageName
    }

    openPage() {
        console.log("Opening Page");

    }

    closePage() {
        console.log("Closing Page");

    }
}

class LoginPage extends BasePage {

}

const page = new LoginPage()
page.openPage()
page.closePage()
