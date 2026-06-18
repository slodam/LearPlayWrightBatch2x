let testRun = new Promise(function (resolve, reject) {
    let apiCalled = true;
    if (apiCalled) {
        resolve({ Status: 'Done!' })
    } else {
        reject('Assertion Failed');
    }
});

testRun.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log('I will always be executed');
});
