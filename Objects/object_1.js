// 1. Object litterals

// Create a unique symbol
const mySym = Symbol("key1");
// console.log(typeof mySym); // Outputs: symbol

// Define an object with various properties and methods
const jsUser = {
    name: "hamza", // String key-value pair
    "full name": "Saith Hamza", // Key with spaces
    age: 24, // Number key-value pair
    [mySym]: "myKey1", // Using symbol as a key -> above symbol
    address: {
        country: "Pakistan", // Nested object
        city: "Gujrat"
    },
    isLoggedIn: false, // Boolean key-value pair
    lastLoginDays: ["Monday", "Wednesday"], // Array key-value pair

    // Method to print a greeting message
    sayHi: function () {
        console.log("hi, from Hamza");
    },

    // Method to simulate a login action
    logIn() {
        console.log("Successfully Logged In.");
    }
};

// Accessing the symbol property
// console.log(typeof jsUser[mySym]); // Outputs: number

// Accessing properties and methods of the object
// console.log(jsUser.name); // Outputs: hamza
// console.log(jsUser["full name"]); // Outputs: Saith Hamza
// console.log(jsUser["name"]); // Outputs: hamza

// Calling the sayHi method
// jsUser.sayHi(); // Outputs: hi, from Hamza

// Calling the logIn method
// jsUser.logIn(); // Outputs: Successfully Logged In.

// Modifying object properties
// jsUser.name = "alina";
// console.log(jsUser); // Outputs the updated object

// Adding a new property to the object
// jsUser.email = "hamza@gmail.com";
// jsUser.email = "alina@gmail.com"; // Updating the email property
// jsUser.email = "amanmukhtar@gmail.com"; // Another update

// Freezing the object to prevent modifications
Object.freeze(jsUser);
// jsUser.email = "hamza@gmail.com"; // Attempt to modify a frozen object (will not work)
//console.log(jsUser); // Outputs the object with previous email value

console.log(jsUser);
