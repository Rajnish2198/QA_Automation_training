// filter() creates a new array containing only the elements that pass a condition.
// Everyone is checked, but only those who satisfy the condition are allowed into the new array.

// Syntax
// array.filter(function(currentValue, index, array) {
//    return condition;});

// array.filter((currentValue, index, array) => {
//    return condition;});

console.log("\nExercise 1: Even Numbers")
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = array.filter(num => {
    return num%2 === 0;
})

console.log("Actual Array: ")
console.log(array)
console.log("Filtered Array: ")
console.log(result)

// -----------------------------------------------------
console.log("\nExercise 2: Truthy & Falsy Return")

const result2 = array.filter(num => {
    return num%2; // Retuns the elements that has a value not equal to 0
})
console.log("Actual Array: ")
console.log(array)
console.log("Filtered Array: ")
console.log(result2)

// -----------------------------------------------------
console.log("\nExercise 3: Truthy & Falsy Return")
const arr = [0, 1, 2, "", "Hello", null, undefined, false, true];
const result3 = arr.filter(value => value); // return is omitted if {} is removed

console.log("Actual Array: ")
console.log(arr)
console.log("Filtered Array: ")
console.log(result3)

// -----------------------------------------------------
console.log("\nExercise 4: map vs filter")

const arr2 = [1, 2, 3, 4, 5];
const result4 = arr2.map(num => num>2)
const result5 = arr2.filter(num => num>2)

console.log(result4)
console.log(result5)

// -----------------------------------------------------
console.log("\nExercise 5: filter returns only the original elements")

const arr3 = [10, 20, 30, 40, 50]
const result6 = arr3.filter(num => {
    return num+100;
})

console.log("Actual Array: ")
console.log(arr3)
console.log("Filtered Array: ")
console.log(result6)

// -----------------------------------------------------
console.log("\nExercise 6: Objects")

const arr4 = [
    {name : "Raj", active : true},
    {name : "Goud", active : false},
    {name : "Kara", active : true}
]
const result7 = arr4.filter(user => {
    return user.active;
})

arr4[0].name = "RAJESH";
console.log(arr4);
console.log(result7)

