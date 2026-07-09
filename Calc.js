function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return (a / b).toFixed(2); // Return result with 2 decimal places
}  

console.log("Addition: " + add(5, 3)); // Output: Addition: 8
console.log("Subtraction: " + subtract(5, 3));
console.log("Multiplication: " + multiply(5, 3));
console.log("Division: " + divide(5, 3));