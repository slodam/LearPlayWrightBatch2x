interface APIResponse {
    body: string;
    header?: object;
    responseTime?: number
}

let response1: APIResponse = {
    body: 'Hi'
}

let response2: APIResponse = {
    body: 'Hi',
    header: {},
    responseTime: 1000
}

