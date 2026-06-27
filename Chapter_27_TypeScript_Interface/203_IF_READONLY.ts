interface APIResponse {
    readonly Code: number;    //readonly - can't modify the readonly
    body: string;
    header?: object;           // ? - optional
    responseTime?: number
}

let response1: APIResponse = {
    Code: 200,
    body: '{"user":"admin"}',   //here user,admin should be in "" and not in ''
};

console.log("Status:", response1.Code);
console.log("Body:", response1.body);
console.log("Headers:", response1.header);

//response1.Code = 404;       //Cannot assign to 'Code' because it is a read-only property.
response1.body = "dasdadas";
console.log("Body:", response1.body);