console.log("\nprint numbers from 1 to 20");
for (let i=1;i<=20;i++){
    console.log(i);
}
console.log("\nprint numbers from 20 to 1");
for (let i=20;i>=1;i--){
    console.log(i);
}
console.log("\nprint all even numbers from 1 to 50");
for (let i=2;i<=50;i+=2) {
    console.log(i);
}
console.log("\nprint all odd numbers from 1 to 49");
for (let i=1;i<=50;i+=2) {
    console.log(i);
}
console.log("\nprint the table of 7");

for (let i=1;i<=10;i++)
{
    console.log(`7x${i}=${7*i}`);
}

console.log("\nprint the sum of numbers from 1 to 10");

let sum=0;
for (let i=1;i<=10;i++) {
 sum += i;
}
console.log(`Sum = ${sum}`);

console.log("\nprint the factorial of numbers from 1 to 5");
let a=1;
for (let i=1;i<=5;i++) {
 a *= i;
}
console.log(`Factorial = ${a}`);


console.log("\nNested Loop");
for (row=1;row<=5;row++) {
    let pattern ="";
    for (let star=1;star<=row;star++) {
        pattern += "*";
    }
    console.log(pattern);
}
