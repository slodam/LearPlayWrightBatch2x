let rj_age = 10;
let will_rj_go_goa = rj_age >= 18 ? 'rj will go to goa' : 'No Goa';
console.log(will_rj_go_goa);

let a = 10;
a += 10;
// a =-10; this doen't 

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? 'Pass' : 'Fail';
console.log(testResult);

let environment = 'staging'
let baseUrl = environment === 'prod' ? 'https://api.example.com' : 'https://staging-api.example.com';
console.log(baseUrl);

let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mode");

let responseTime = 1850;  // ms
let sla = 1000;          // ms
let slastatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms - ${slastatus}`);

let conditon = true;
let isSKMale = conditon ? true : false;
console.log((isSKMale));

//  Nested Ternary

// Multiple Condition

let age = 26;
let is_pramod_goa = age > 26 ? "Yes, he will go" : "else he will not go";
console.log(is_pramod_goa);

let age_goa = 19;
let is_goa_on = age_goa > 18 ? (age_goa > 20 ? 'Can go to goa and Drinks allowed' : 'Can go to goa but Drinks not allowed') : 'Cant go to goa';
console.log(is_goa_on);

/// --------------------

let statuscode = 304;
let category =
    statuscode < 300 ? 'success' :
        statuscode < 400 ? 'Redirect' :
            statuscode < 500 ? 'Client Error' : 'Server Error';
console.log(category);

// ---- 

let temp = 20;
let feel =
    (temp >= 40) ? 'Very hot' :
        (temp >= 30) ? 'Hot' :
            (temp >= 20) ? 'Warm' :
                (temp >= 10) ? 'Cool' : 'Cold';

console.log(feel);                
