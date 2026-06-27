class browser {

    constructor(name) {
        this.name = name;
        this.isOpen = true;
        console.log(this.name + " Launched!");
    }
    startBrowser() {
        console.log("Starting a browser!!");
    }

    closeBrowser() {
        console.log("Closing the Browser!!");
    }
}


const chrome = new browser('Chrome');
const firefox = new browser('FireFox');

chrome.startBrowser();


//Output
// Chrome Launched!  -> when object is created constructor is called
// FireFox Launched!  -> when object is created constructor is called
// Starting a browser!! -> method is called