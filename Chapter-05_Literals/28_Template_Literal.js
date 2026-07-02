// Template literally. 

let firstName = 'Surabhi';
let fullName = `Hi ${firstName} Lodam`;
console.log(fullName);

let env = 'statging';
env = 'prod';
const userId = 12345;
const apiUrl = `http://api-${env}.tekion.com/user/${userId}`;
console.log(apiUrl);

//Playwright
const rowIndex = 3;
const columnName = 'email';
//await page.locator(`[data-row="${rowIndex}] [data-column = "${columnName}"]`).click();


// Logs
const testName = "Login Test";
const status = "FAILED";
const duration = 2.3;
console.log(`[${status}] ${testName} completed in ${duration}`);


const testCase = "checkout_flow";
const timestamp = Date.now();
//await page.screenshot({ path: `screenshots/${testCase}_${timestamp}.png` });

const username = 'Surabhi';
const role = 'admin';

const payload = `{
    'user': '${username}',
    'role':'${role}',
    'timestamp':${new Date().toISOString()}'
}`;

console.log(payload);


