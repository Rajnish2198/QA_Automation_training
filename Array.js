let fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);

console.log(fruits.length);

fruits[1] = "Kiwi";

console.log(fruits);
console.log(fruits[1]);

for (i=0;i<fruits.length;i++) {
    console.log(fruits[i]);
}

fruits.push ("Coconut");
console.log(fruits);

fruits.push("Mango", "Cherry", "Papaya");
console.log(fruits);
console.log(fruits.length);

let count = fruits.push("Dragonfruit");
console.log(count);

removed = fruits.pop();
console.log(fruits);
console.log(removed);
console.log(fruits.length);

fruits.splice(2,1,"Grapes");
console.log(fruits);

fruits.splice(2,0,"Banana");
console.log(fruits);

Removed1 = fruits.shift();
console.log(Removed1);
console.log(fruits);

Count1 = fruits.unshift("Apple");
console.log(Count1);
console.log(fruits);

console.log(fruits.includes("Dragonfruit"));
console.log(fruits.includes("Orange"));

console.log(fruits.indexOf("Dragonfruit"));
console.log(fruits.indexOf("Orange"));

for (i=0;i<fruits.length;i++) {
    console.log(fruits[i]);
}

for (let x of fruits) {
    console.log(x);
}

let a = 0;
while (a<fruits.length) {
    console.log(fruits[a]);
    a++;
}