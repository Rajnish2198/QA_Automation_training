let operation = "multiply";

let a = 10;
let b = 20;

switch (operation) {
    case "add":
        console.log(a+b);
        break;
    case "multiply":
        console.log(a*b);
        break;
    default:
        console.log("invalid");
}