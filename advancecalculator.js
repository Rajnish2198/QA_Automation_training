function calculator(a, b, action) {

    let result;

    if (action === "add") {
        result = a + b;
    }
    else if (action === "subtract") {
        result = a - b;
    }
    else if (action === "multiply") {
        result = a * b;
    }
    else if (action === "divide") {

        if (b === 0) {
            return "Cannot divide by zero";
        }

        result = a / b;
    }
    return result;
    
}

// Function Calls
console.log(calculator(10, 5, "add"));
console.log(calculator(10, 5, "subtract"));
console.log(calculator(10, 5, "multiply"));
console.log(calculator(10, 5, "divide"));