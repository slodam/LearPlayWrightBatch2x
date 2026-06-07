const user = { name1: "John", age: 30, city: "NYC" };
console.log(user);

const { age } = user;
console.log(age);

//Basic destructuring
// const { name1, age } = user;
// console.log(name1);
// console.log(age);

// Rename variables
const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

// destructuring
const { age: userAge1 } = user;
console.log(userAge1);



// Default values
const { country = "USA" } = user;
console.log(country);
console.log(user);

const data = {
    user:
    {
        name: "John",
        address:
        {
            city: "NYC"
        },
        phone:
        {
            mobileNo:
            {
                gio: 9890992013
            }
        }
    }
}

const { user: { address: { city } } } = data;
console.log(data.user.address.city);

const { user: { phone: { mobileNo: { gio } } } } = data
console.log(data.user.phone.mobileNo.gio);



