// async function sayHello() {
//     return "Hello, QA!";
// }

// sayHello().then(function (msg) {
//     console.log(msg);
// });

// async function getStatus() {
//     let status = await Promise.resolve(200);
//     console.log("Status code:", status);
// }

// getStatus();


async function testFlow() {

    let Step1 = await Promise.resolve("Open Browser");
    console.log(Step1);

    let Step2 = await Promise.resolve("Cliked Login");
    console.log(Step2);

    let Step3 = await Promise.resolve("Verified Dashboard");
    console.log(Step3);
}

testFlow();
