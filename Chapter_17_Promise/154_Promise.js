let order = new Promise(function (resolve, reject) {
    let foodReady = true;
    if (foodReady) {
        resolve("Food is ready! Let's eat.");
    } else {
        reject("Food is not ready yet. Please wait.");
    }
});
console.log(order);

