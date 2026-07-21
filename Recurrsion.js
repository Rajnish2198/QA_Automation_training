// Syntax of Recurssion
// function functionName(parameters) {
//     // Base condition
//     if (condition) {
//         return value;
//     }

//     // Recursive call
//     return functionName(modifiedParameters);
// }

console.log("Example 1: Print numbers from 1 to 5\n");

function numbers(i){
    if (i > 5){
        return;
    }

    console.log(i);
    numbers(i+1);
}
console.log("The numbers are: ")
numbers(1);

console.log("\nExample 2: Factorial");

function factorial(i){
    if (i === 1){
    return 1;
    }
    return i * factorial(i-1);
}

console.log(factorial(10));

console.log("\nExample 3: Print Index");

function names(array, index){
    if (index === array.length){
    return;
}
console.log(array[index]);
names(array, index+1);

}

names (["Rajesh", "Ramesh", "Suresh"], 0)

console.log("\nExapmple 4: Print Table 2");

function table(i, n){
        if (n > 10){
        return;
    }

    console.log(i + "X" + n +  "=" + i*n);
    return table(i, n+1)
}

table (3, 1)




