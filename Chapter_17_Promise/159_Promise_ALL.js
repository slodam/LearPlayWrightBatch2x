let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB Ok");
let checkCache = Promise.resolve("Cache Ok");

Promise.all([checkAuth, checkDB, checkCache]).then(function (result) {
    console.log('All checks are fine!')
});


Promise.all([
    Promise.resolve("Auth Ok"),
    Promise.reject("DB Failed"),
    Promise.resolve("Cache Ok")
]).then(function (r) {
    console.log(r);
}).catch(function (err) {
    console.log('Failed: ' + err);
});


Promise.allSettled([
    Promise.resolve('Test A Passed'),
    Promise.reject('Test B Failed'),
    Promise.resolve('Test C Passed'),
    Promise.reject('Test D Aborted'),
    Promise.reject('Test E Skipped')
]).then(function (result) {
    result.forEach(function (r, i) {
        console.log('Test ' + (i + 1) + ': ' + r.status, '-', r.value || r.reason);
    });
});

