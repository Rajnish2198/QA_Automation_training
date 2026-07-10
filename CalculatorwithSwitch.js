function calculator (a,b,num){

switch(num){
case 0:
    return a+b;
case 1:
    return a-b;
case 2:
    return a*b;
case 3:
    return a/b;
case 4:
    return a%b;
default:
     return "Invalid Operation";
}
}
console.log(calculator(10,5,0));
console.log(calculator(10,5,1));
console.log(calculator(10,5,2));
console.log(calculator(10,5,3));
console.log(calculator(10,5,4));
console.log(calculator(10,5,14));
