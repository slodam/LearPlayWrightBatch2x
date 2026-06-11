let n = 5; // You can change this value to print more or fewer rows

for (let i = n; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    //console.log(row);
    process.stdout.write(row + "\n");
}

//print pyramid pattern
//    *
//   * *
//  * * *
// * * * *
//* * * * *
for (let i = 1; i <= n; i++) {
    let row = ' '.repeat(n - i); // Add spaces for left padding
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}   