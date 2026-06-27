// Grand Father -> Father -> Son
// BasePage -> AuthPape -> AdminPage
class BasePage {
    constructor(name) {
        this.name = name;
    }

    open() {

        console.log('[Open] ' + this.name);

    }
}

class AuthPage extends BasePage {
    login(user) {

        console.log('[Login] ' + user);


    }
}

class AdminPage extends AuthPage {
    constructor() {
        super('Admin Panel') //it will be passed to base class constructor (this.name)
    }

    manageUaser() {

        console.log('[Admin] Managing users');

    }
}

let admin = new AdminPage();
admin.open();
admin.login('SuperAdmin');
admin.manageUaser();