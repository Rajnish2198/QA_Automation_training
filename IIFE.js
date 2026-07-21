console.log("Welcome to the IIFE program\n");

// Syntax of IIFE
// (function () {
//     console.log("Hello JavaScript!");
// })();

console.log("\nProgram 1");

(function (){
    let x = 10;
    console.log(x);
}) ()

// console.log(x); Here x can not be accesed from IIFE Block.

console.log("\nProgram 2");

(function (a, b){
    console.log("Total of a and b is " + (a+b));
}
)(10, 6);

console.log("\nProgram 3");
(function (name, ID){
    console.log("Name is " + name);
    console.log("ID is " + ID);
}) ("Rajeshwar", "I1433")

console.log("\nProgram 4");
(function (canMarry){
       if (canMarry >= 18){
        console.log("You can mary");
    } else {
        console.log("You can not marry")
    }

}) (25)

console.log("\nProgram 5");

(function(username, password){
    if(username === "Rajeshwar" && password === "12345"){
        console.log("Welcome");
    } else {
        console.log("Please login");
    }

})("Rajeshwar", "123456")
