console.log("Welcome to my Simple Calculator");

function calculator(a, b, action) {
    if (action === "add"){
        return a+b;
    } else if (action === "sub"){
        return a-b;
    } else if (action === "mul"){
        return a*b;
    } else if (action === "div"){
        return a/b;
    } else if ( action === "reminder"){
        return a%b;
    } else {
        console.log("Invalid Action")
    }
}

let output = calculator(20, 10, "reminder");
console.log("Your Output is " + output);