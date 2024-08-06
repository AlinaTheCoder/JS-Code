let myArray = [3, 4, 8, 5, 1, 34, 8, 12];
/* let a = myArray[0];
let b = myArray[1];
let [a,b] = myArray;
console.log(a);
console.log(b);
*/

// array destructing works based on the  particular index positions
/* let [, b, , d] = myArray;
console.log(b);
console.log(d); 
let [, b, , ...args] = myArray; //...args working as the spread operator
console.log(b);
console.log(args);
*/

// Object Destructing -> based on the key/property names
let person ={
    id:1,
    name:"Alina",
    age:30,
    address:{
        country:"Pakistan",
        state:"Gujrat, Punjab"
    }
}

let {id,name:firstName,address:{country}} = person;
console.log(id);
console.log(firstName);
// console.log(address);
console.log(country);
