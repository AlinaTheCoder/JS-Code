// Function to add two numbers using the spread operator
let sumOne = function (num1, num2) {
    return num1 + num2;
};

// Example usage of sumOne
// console.log(sumOne(4, 7)); // Outputs: 11
// console.log(sumOne(4, 7, 3, 8)); // Outputs: 11 (ignores extra parameters)

// Array example to demonstrate the spread operator
let array = [4, 7, 9];
// console.log(sumOne(array)); // Outputs: NaN (4,7undefined)
// console.log(sumOne(...array)); // Outputs: 11 (spread operator, ignores 9)

// Function to sum multiple numbers using the rest operator
let sumTwo = function (...args) {
    let sum = 0;
    console.log(args);
    for (let arg of args) {
        sum += arg;
    }
    return sum;
};

// Example usage of sumTwo
console.log(sumTwo(3, 8, 10, 6, 90)); // Outputs: 117
