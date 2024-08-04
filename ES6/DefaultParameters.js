// if you don't define/value the variables just declare them them by default there value is undefined

function guestUser(name = "unKnown", courseCount = 0) {
    console.log(`Hello ${name}, You're registered in ${courseCount} courses.`)
}
// guestUser(); 
guestUser("Alina", 1);