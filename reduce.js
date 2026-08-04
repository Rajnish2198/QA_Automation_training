// Definition
// reduce() is used to reduce multiple array elements into a single value.
// That single value can be:
// ✅ Number (sum, product, average)
// ✅ String
// ✅ Object
// ✅ Array
// ✅ Boolean

// Syntax with Initial Value (Most Common & Recommended)
// array.reduce((accumulator, currentValue, index, array) => {
//     return updatedAccumulator;
// }, initialValue);
// Syntax without Initial Value
// array.reduce((accumulator, currentValue, index, array) => {
//     return updatedAccumulator;
// });

console.log("\nExercise 1: Sum of array elements");

const array = [10, 20, 30, 40, 50];
const result = array.reduce( (sum, num)=> {
    return sum + num;
}, 0)

console.log(result);
