// Function to add two numbers using the spread operator
let sumOne = function (num1, num2) {
    return num1 + num2;
};

// Example usage of sumOne
// console.log(sumOne(4, 7)); // Outputs: 11
// console.log(sumOne(4, 7, 3, 8)); // Outputs: 11 (ignores extra parameters)

// Spread operator is mostly used in function calls or for merging/joining objects or arrays
let array = [4, 7, 9];
// console.log(sumOne(array)); // Outputs: NaN (4,7undefined)
// console.log(sumOne(...array)); // Outputs: 11 (spread operator, ignores 9)

// Example of using the spread operator to merge arrays
const menu = [
    { id: 1, name: "Burger", price: 5 },
    { id: 2, name: "Fries", price: 3 }
];

const newItems = [
    { id: 3, name: "Soda", price: 2 },
    { id: 4, name: "Salad", price: 4 }
];

function updateMenu(menu, newItems) {
    // Using the spread operator to merge arrays
    return [...menu, ...newItems];
}

const updatedMenu = updateMenu(menu, newItems);
console.log(updatedMenu);
// Outputs: 
// [
//     { id: 1, name: "Burger", price: 5 },
//     { id: 2, name: "Fries", price: 3 },
//     { id: 3, name: "Soda", price: 2 },
//     { id: 4, name: "Salad", price: 4 }
// ]

// Function to sum multiple numbers using the rest operator
let sumTwo = function (...args) {
    let sum = 0;
    console.log(args); // Logs the array of arguments
    for (let arg of args) {
        sum += arg;
    }
    return sum;
};

// Example usage of sumTwo
console.log(sumTwo(3, 8, 10, 6, 90)); // Outputs: 117

// Rest operator is mostly used in function definitions for accepting multiple given arguments or parameters

// Example of using the rest operator in function definitions
const order = [
    { id: 1, name: "Burger", price: 5, quantity: 2 },
    { id: 2, name: "Fries", price: 3, quantity: 1 },
    { id: 4, name: "Salad", price: 4, quantity: 1 }
];

let calculateTotalPrice = function (...orderItems) {
    let totalPrice = 0;
    for (let item of orderItems) {
        totalPrice += item.price * item.quantity;
    }
    return totalPrice;
}

// Correctly spread the order array when passing to the function
console.log(`The total Bill is: ${calculateTotalPrice(...order)}`);
// Outputs: The total Bill is: 17
