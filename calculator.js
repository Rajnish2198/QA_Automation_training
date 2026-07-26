let calculator = "squ";
let a = 3
let b = 2

switch (calculator) {
    case "add":
        console.log("addition of 3+2: ",a+b);
        break;
    case "sub":
        console.log("subtraction of 3-2: ",a-b);
        break;
    case "multiply":
        console.log("multiplication of 3*2: ",a*b);
        break;
    case "div":
        console.log("division of 3/2: ",a/b);
        break;
    case "mod":
        console.log("mod of 3%2: ",a%b);
        break;
    case "sq":
        console.log("Square of 3**2: ",a**b);
        break;
    default:
        console.log("invalid option selected");
}