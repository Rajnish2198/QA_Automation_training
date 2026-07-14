console.log("Welcome\n");
console.log("Initial Array")
let fruits = ["Apple", "Mango", "Banana", "Orange"];
console.log(fruits);

console.log("\nPrint the array using Loops");
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log("\nPrint the total number of fruits\n" + "Total number of fruits is " + fruits.length + "\n");

// Task 2 - Using "while" Loop
console.log("Print the Array using While");
let i = 0;
while(i<fruits.length){
    console.log(fruits[i]);
    i++;
}

console.log("\nPrint the Array using Do-While");
let j = 0;
do{
    console.log(fruits[j]);
    j++;
}while(j<fruits.length);

console.log("\nPrint the Array Using FOR OF");
for(let k of fruits){
    console.log(k);
}

console.log("\nPrint the Array Index Using FOR IN");
for(let l in fruits){
    console.log(l);
}

console.log("\nEnd of the Program")