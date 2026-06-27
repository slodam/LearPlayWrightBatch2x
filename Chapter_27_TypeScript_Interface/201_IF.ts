interface Testcase {
    id: number;
    name: string;
    status: string;
    duration: number;

}

let test1: Testcase = {
    id: 1,
    name: 'Login with valid credential',
    status: 'Pass',
    duration: 1500
}

let test2: Testcase = {
    id: 2,
    name: 'Login with invalid credentials',
    status: 'Fail',
    duration: 2000
}

console.log('TC_' + test1.id + ':' + test1.name + ' -> ' + test1.status + ':' + test1.duration);
console.log('TC_' + test2.id + ':' + test2.name + ' -> ' + test2.status + ':' + test2.duration);

