let fruits = ["Apple", "Mango", "Banana"];

// Print the first fruit.
console.log(fruits[0]);

//Print the last fruit.
console.log(fruits[fruits.length-1]);

// Add "Orange" at the end of the array.
fruits.push("Orange");
console.log(fruits);

// Add "Grapes" at the beginning of the array.
fruits.unshift("Grapes");
console.log(fruits);

// Check if "Mango" exists in the array.
console.log(fruits.includes("Mango"));

// Remove the first fruit.
fruits.shift();
console.log(fruits);

// Remove the last fruit.
fruits.pop();
console.log(fruits);

// Print the total number of fruits.
console.log(fruits.length);

// Print the final array.
console.log(fruits);