function print() {
    console.log("This is Normal Function, which is called by print() function");
}

function placeorder(item, callback) {
    console.log(`Order received for ${item}. Processing...`);
    callback();
}

//First way to call the function
placeorder("Pizza", print);

//Second way to call the function
placeorder("Burger", function () {
    console.log("This is Anonymous Function, which is called by placeorder() function");
});

//Third way to call the function
placeorder("Pasta", () => {
    console.log("This is Arrow Function, which is called by placeorder() function");
});