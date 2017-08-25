/*function func() {
    // base case

    // recursive case
}*/

// factorial function
function factorial(num) {
    if (num === 1) {
        return num;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(21));