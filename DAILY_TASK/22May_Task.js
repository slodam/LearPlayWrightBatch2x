// Triangle Classifier:
// Write a program that classifies a triangle based on its side lengths.
// Given three input values representing the lengths of the sides, 
// determine if the triangle is equilateral (all sides are equal), 
// isosceles (exactly two sides are equal), or scalene (no sides are equal).
//Use an if-else statement to classify the triangle.

let a = 10, b = 8, c = 1
if (a == b && b == c && c == a) {
    console.log("It is an Equilateral Trainagle")
}
else if (a == c || a == b) {
    console.log("It is an Isosceles Trainagle")
}
else {
    console.log("It is an Scalene Trainagle")
}