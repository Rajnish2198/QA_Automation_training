let fruits = ["Apple", "Mango", "Banana", "Orange"];
 
// Task 4 - Using "for . . .of"
// Print only the fruit names.
for (let fruit of fruits) {
    console.log(fruit);
}

// Task 5 - Using "for . . .in"
// Print all indexes.
for (let index in fruits) {
    console.log(index);
}

// Print index and fruit name together.
for (let index in fruits) {
    console.log(index + ": " + fruits[index]);
}
