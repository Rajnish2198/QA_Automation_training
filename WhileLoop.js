let fruits = ["Apple", "Mango", "Banana", "Orange"];

// Task 2 - Using "while" Loop

// Print all fruits using a "while" loop.
let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}
// reverse array using new empty array

let reversedfruits = [];
for (let i= fruits.length-1; i >=0; i--){
    reversedfruits.push(fruits[i]);
    console.log(reversedfruits);
}