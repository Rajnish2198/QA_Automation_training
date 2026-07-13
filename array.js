//create an array of fruits
let fruits = ["Apple", "Mango", "Banana"];
// 1. Print the first fruit (index starts from 0)
console.log("First Fruit: " , fruits[0]);
// 2. Print the last fruit using the length property
console.log("Last Fruit : " ,fruits [fruits.length-1]);
// 3. Add "Orange" at the end of the array using push()
fruits.push("Orange");
console.log("Adding Orange in the end : ", fruits);
// 4. Add "Grapes" at the beginning of the array using unshift()
fruits.unshift("Grapes");
console.log("Adding Grapes in start : ", fruits);
// 5. Check if "Mango" exists in the array using includes()
console.log("Does Mango exist?",fruits.includes("Mango"));
// 6. Remove the first fruit using shift()
fruits.shift();
console.log("Removing the first fruit : ", fruits);
// 7. Remove the last fruit using pop()
fruits.pop();
console.log("Removing the last fruit: ", fruits);
// 8. Print the total number of fruits using length
console.log("Total number of fruits: ", fruits.length);
// 9. Print the final array
console.log("Final Array: ", fruits);