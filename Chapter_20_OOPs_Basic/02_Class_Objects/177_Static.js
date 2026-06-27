class student {

    constructor(name, age, phNumber) {
        this.name = name;
        this.age = age;
        this.phNumber = phNumber;
    }

    static Course_name = 'PlayWright2X';
    static Mentor_name = 'Pramod Dutta';

    static display() {

        console.log('I am comman function!')
    }
}

const s1 = new student('Nhihira', 8, '987654321');
const s2 = new student('Chinu', 5, '897654321');

console.log(s1.name);
console.log(s2.name);

console.log(student.Mentor_name);
console.log(student.Course_name);
student.display();

//-----------------------------------------------------------------------------------------
// class Student {
//     constructor(name_student, age, phoneNo) {
//         this.name_student = name_student;
//         this.age = age;
//         this.phoneNo = phoneNo;
//     }
//     static name = "Playwright2x";
//     static mentor_name = "PrrammodDutta";

//     static display() {
//         console.log("Hi, I am commoin f(n)");
//     }

// }

// const s1 = new Student("Yasho", 32, "9876543210");
// const s2 = new Student("Sharad", 30, "8210910909");

// console.log(s1.name_student);
// console.log(s2.name_student);

// console.log(Student.name);
// console.log(Student.mentor_name);

// Student.display();

