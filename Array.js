console.log("\nA little program on Arrays\n")

let fruits = ["Apple", "Mango", "Banana"];
console.log("Initial Array:");
console.log(fruits);


// 1. Print the first fruit
console.log("\n1. Print the first fruit");
console.log(fruits[0]);

// 2. Print the last fruit
console.log("\n2. Print the last fruit");
console.log(fruits[fruits.length-1]);

// 3. Add Orange at the end of the Array
console.log("\n3. Add Orange at the end of the Array");
fruits.push("Orange");
console.log(fruits);

// 4. Add Grapes at the beginning of the Array.
console.log("\n4. Add Grapes at the beginning of the Array")
fruits.unshift("Grapes");
console.log(fruits);

// 5. Check if "Mango" exists in the array.
console.log("\n5. Check if Mango exists in the array")
console.log(fruits.includes("Mango"));

// 6. Remove the first fruit.
console.log("\n6. Remove the first fruit")
fruits.shift();
console.log(fruits);

// 7. Remove the last fruit.
console.log("\n7. Remove the last fruit")
fruits.pop();
console.log(fruits);

// 8. Print the total number of fruits.
console.log("\n8. Print the total number of fruits")
console.log("Length of the Array is " + fruits.length);

// 9. Print the final Array
console.log("\n9. Print the final Array")
console.log("The Final Array:");
console.log(fruits);

console.log("\nEnd of the Program");


// NOTES
// | Method      | Action                    |
// | ----------- | ------------------------- |
// | `push()`    | Add at the end            |
// | `pop()`     | Remove from the end       |
// | `unshift()` | Add at the beginning      |
// | `shift()`   | Remove from the beginning |
// | `length`    | Number of elements        |
// | `splice`    | Cut/Paste (startIndex, EndIndex)| array.splice(startIndex, deleteCount, item1, item2, ...)
// | `slice`     | Returns a new array       |array.slice(startIndex, endIndex)|



