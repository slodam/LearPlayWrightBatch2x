let n = 7
if (n % 2 === 0) {
    console.log("number is even")
}
else {
    console.log("number is odd")
}


//Problem: Take marks (0–100) and print the grade based on these rules:
//- 90 and above → A
//- 80–89 → B
//- 70–79 → C
//- 60–69 → D
//- Below 60 → Fail

let marks = 52
if (marks >= 90) {
    console.log("Grade A")
}
else if (marks >= 80 && marks <= 89) {
    console.log("Grade B")
}
else if (marks >= 70 && marks <= 79) {
    console.log("Grade B")
}
else if (marks >= 60 && marks <= 69) {
    console.log("Grade C")
}
else {
    console.log("Fail")
}

let studentMarks = 88;
if (studentMarks >= 90) {
    console.log("Grade: A");
} else if (studentMarks >= 80) {
    console.log("Grade: B");
} else if (studentMarks >= 70) {
    console.log("Grade: C");
} else if (studentMarks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: Fail");

    // Question 3 — Leap Year Check
    // Problem: Take a year and check if it's a leap year.
    // Rules:
    // Divisible by 4 AND not divisible by 100 → Leap year
    // OR divisible by 400 → Leap year
    // Else → Not a leap year

    let year = 2026
    if ((year % 4 === 0 && year !== 0) || year % 400 === 0) {
        console.log("year is leap year")
    }
    else {
        console.log("Not a leap year")
    }