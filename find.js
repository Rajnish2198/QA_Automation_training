//Syntax is same as map and filter

console.log("\nExercise 1: Basic Program")
let array = [2, 3, 4, 5, 10];
let result = array.find(num => num > 3)

console.log("Actual Array: ")
console.log(array)
console.log("Found Array: ")
console.log(result)

// -----------------------------------------------------
console.log("\nExercise 2: String")

array = ["Rajesh", "Goud", "KARA"];
result = array.find(name => name === "KARA")

console.log("Actual Array: ")
console.log(array)
console.log("Found Array: ")
console.log(result)

// -----------------------------------------------------
console.log("\nExercise 2: String")
const users = [
    { id: 1, name: "Raj" },
    { id: 2, name: "Ram" },
    { id: 3, name: "Ravi" }
];

const user = users.find(u => u.id === 2);

console.log("Actual Array: ")
console.log(users)
console.log("Found Element: ")
console.log(user)

// -----------------------------------------------------
console.log("\nExercise 2: String")
const numbers = [10, 20, 30];
result = numbers.find(num => num > 100);
console.log(result);
