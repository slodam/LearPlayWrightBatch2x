let apiCall = new Promise(function (resolve, reject) {

    resolve({

        status: 200, body: 'Userdata'

    })
});

apiCall.then(function (response) {
    console.log(response.status);
    console.log(response.body);
});
