// Singleton --> constructor use 


// const appUser = new Object(); // Singleton object
const appUser = {}; // equival to above way of   creating object 

appUser.id = "abc123";
appUser.name = "Alina",
    appUser.isLoggedIn = false;

// console.log(appUser);
// make another user 
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Alina",
            lastName: "Mukhtar"
        }
    }
};
// console.log(regularUser.fullName.userFullName.firstName);
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const object3 = { ...obj1, ...obj2 }; // spread operator use for combining/merging objects --> easy ,modern way
/* // object.assign ko b use kro
const object3 = Object.assign(obj1,obj2);  */

/* // console.log(object3);
console.log(Object.keys(appUser));
console.log(Object.values(appUser));
console.log(Object.entries(appUser)); */

// hasOwnProperty method
console.log(appUser.hasOwnProperty("email")); // false
console.log(appUser.hasOwnProperty("name")); // true






 