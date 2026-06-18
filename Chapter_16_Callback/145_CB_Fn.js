function cafe(item, callWhenTableIsReady) {
    console.log(`Finding1....`);
    console.log(`Finding2....`);
    console.log(`Finding3....`);
    console.log(item);
    callWhenTableIsReady();
}

function callWhenTableIsReady() {
    console.log("Table is ready!, calling 9876543210");
}

cafe("Pizza", callWhenTableIsReady);

cafe("Burger", function () {
    console.log("Table is ready!, calling 9876543210");
});

cafe("Pasta", () => {
    console.log("Table is ready!, calling 9876543210");
}); 