let apiCall = new Promise(function (resolve, reject) {
    reject("500 Error");
});

apiCall.then(function (data) {
    console.log('Success Or Resolve');
}).catch(function (error) {
    console.log('Error');
});

let apiCall2 = new Promise(function (resolve, reject) {
    resolve({
        status: 200, body: 'Userdata'
    })
});

apiCall2.then(function (response) {
    console.log(response.status);
    console.log(response.body);
}).catch(function (error) {
    console.log('Error in API call');
});
