// Exercise 1

function welcome(callback){
    console.log("Welcome to Javascript");
    callback();
}

function learn(){
    console.log("Let's learn Callbacks");
}

welcome(learn);
console.log(".........................")

// Exercise 2

function calculate(a, b, operation){
    operation(a,b);
}

function add(a,b){
    console.log(a+b);

}

function multiply(a,b){
    console.log(a*b);
    
}

calculate(10, 5, add);
calculate(10, 5, multiply);
console.log(".........................")

// Exercise 3

function repeat(callback){
    console.log("Start")
    callback();
    callback();

    console.log("End")
}
function work(){
    console.log("Working.....")
}

repeat(work);

console.log(".........................")

// Exercise 4

function calculate(a, b, operation){
return operation (a,b);
}

function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, substract));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));


