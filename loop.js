// Array of fruits
let fruits = ["Apple", "Mango", "Banana", "Orange"];

// ========================================
// Using function with for Loop 
// ========================================

function printUsingFor(arr) {

    console.log("Task 1 - Using for Loop");

    // Print all fruits
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    // Print total number of fruits
    console.log("Total Fruits:", arr.length);
}


// ========================================
// Using function with while Loop
// ========================================

function printUsingWhile(arr) {

    console.log("\nTask 2 - Using while Loop");

    let i = 0;

    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }
}


// ========================================
// Task 3 - Using do...while Loop
// ========================================

function printUsingDoWhile(arr) {

    console.log("\nTask 3 - Using do...while Loop");

    let i = 0;

    do {
        console.log(arr[i]);
        i++;
    } while (i < arr.length);
}


// ========================================
// Task 4 - Using for...of Loop
// ========================================

function printUsingForOf(arr) {

    console.log("\nTask 4 - Using for...of Loop");

    // Print only fruit names
    for (const fruit of arr) {
        console.log(fruit);
    }
}


// ========================================
// Task 5 - Using for...in Loop
// ========================================

function printUsingForIn(arr) {

    console.log("\nTask 5 - Using for...in Loop");

    // Print all indexes
    console.log("Indexes:");

    for (const index in arr) {
        console.log(index);
    }

    // Print index and fruit together
    console.log("\nIndex and Fruit:");

    for (const index in arr) {
        console.log(index + " : " + arr[index]);
    }
}


// ========================================
// Function Calls
// ========================================

printUsingFor(fruits);
printUsingWhile(fruits);
printUsingDoWhile(fruits);
printUsingForOf(fruits);
printUsingForIn(fruits);