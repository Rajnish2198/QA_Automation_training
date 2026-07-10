let operation = "multiply";
let a = 10;
let b = 5;

switch (operation) {

    case "add":
        console.log(a + b);
        break;

    case "subtract":
        console.log(a - b);
        break;

    case "multiply":
        console.log(a * b);
        break;

    case "divide":
        console.log(a / b);
        break;

    default:
        console.log("Invalid Operation");
}