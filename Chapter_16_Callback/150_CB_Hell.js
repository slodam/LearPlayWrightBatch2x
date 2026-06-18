// Real QA Scenario: End-to-End Login for the App.vwo.com 


// openbrowser()
// goToLoginPage()
// enterCredentials()
// clickLogin()

function openBrowser(callback) {
    setTimeout(function () {
        callback();
    }, 1000);
}

function goToLoginPage(callback) {
    setTimeout(function () {
        callback();
    }, 1000);
}

function enterCredentials(callback) {
    setTimeout(function () {
        callback();
    }, 1000);
}

function clickLogin(callback) {
    setTimeout(function () {
        callback();
    }, 1000);
}

openBrowser(function () {
    goToLoginPage(function () {
        enterCredentials(function () {
            clickLogin(function () {
                console.log('Login Successful');
            });
        });
    });
});
