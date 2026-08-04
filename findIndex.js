// findIndex()
// findIndex() returns the index of the first element that satisfies a condition.
// Think of it as:
// find() returns the element.
// findIndex() returns the position of that element.
// array.findIndex(function(value, index, array) {
//     return condition;
// });

console.log("\nExercise 1: Basic Program")
const array = [10, 20, 30, 40, 50];
// const result = array.findIndex(num => num > 40);
const result = array.findIndex(function (num){
    return num > 10;
})
const result1 = array.findIndex(num => num > 50);

console.log(result);
console.log(result1);

// -----------------------------------------------------
console.log("\nExercise 2: Using String")
const fruits = ["Raj", "Goud", "Kara"];
const result2 = fruits.findIndex(fruit => fruit === "Rajesh");
const result3 = fruits.findIndex(fruit => fruit === "Raj");

console.log(result2);
console.log(result3);

// -----------------------------------------------------
console.log("\nExercise 3: Using Objects")
const cart = [
    {id : 1, name : "phone", qty : 10},
    {id : 2, name : "earphones", qty : 20},
    {id : 3, name : "laptop", qty : 50}
]

const result4 = cart.findIndex(quantity => quantity.id === 2)
cart[result4].qty++;
console.log(cart);

