// function add(a, b){
//     console.log(a+b);
// }
// add(1, 2);

function sub(a, b, action){
    if (action === "sub") {
        return a-b;
    } else if (action === "add") {
        return a+b;
    } else {
        return "wrong input"

    }

}
let result = sub(2, 1, "mul");
console.log(result);
