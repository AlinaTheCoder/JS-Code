let myArray = [3, 4, 8, 5, 1, 34, 8, 12];

/*
// Basic array destructuring
let a = myArray[0];
let b = myArray[1];
let [a, b] = myArray;
console.log(a); // Outputs: 3
console.log(b); // Outputs: 4
*/

// Array destructuring based on index positions
/*
let [, b, , d] = myArray;
console.log(b); // Outputs: 4
console.log(d); // Outputs: 5
let [, b, , ...args] = myArray; // ...args works as the rest operator
console.log(b); // Outputs: 4
console.log(args); // Outputs: [5, 1, 34, 8, 12]
*/

// Object destructuring based on key/property names
let person = {
    id: 1,
    name: "Alina",
    age: 21,
    address: {
        country: "Pakistan",
        state: "Gujrat, Punjab"
    }
};

let { id, name: firstName, address: { country } } = person;
console.log(id); // Outputs: 1
console.log(firstName); // Outputs: Alina
// console.log(address); // Uncomment to output the address object
console.log(country); // Outputs: Pakistan
