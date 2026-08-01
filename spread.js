let fruits = ["Mango","Banana"];

let fruit = fruits;

fruit.push("Orange");

console.log(fruit);
console.log(fruits);

let fruit1 = [...fruits];

fruit.push("Apple");

console.log(fruit1);
console.log(fruit);

let user = {
    username: "Chander",
    password: "chan1234"
}

let user1 = {...user};
user.password = "new1234";

console.log(user);
console.log(user1);