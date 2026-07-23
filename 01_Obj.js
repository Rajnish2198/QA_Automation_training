

//Objects literals
const mySym = Symbol("Key1")

const Jsobj = {
    name: "Hitesh",
    age: 18,
    [mySym]: "MyKey1",
    Email: "Hitesh@google.com",
    Location:"Pune",
    IsLoggenIn: false,
    LastLoggedDays: ["Monday","Saturday"]
}

console.log(Jsobj["Email"]);
console.log(Jsobj[mySym]);

//updating email
Jsobj.Email = "Hitesh@ig.com"
console.log(Jsobj["Email"]);

//Freezing values of Jsobj
//Object.freeze(Jsobj)
//Jsobj.Email = "Hitesh@india.com"
//console.log(Jsobj["Email"]);

Jsobj.greeting = function(){
    return "Hello js user"
}

Jsobj.greeting2= function(){
    return `Hello Js User, ${this.name}`
}

console.log(Jsobj.greeting());
console.log(Jsobj.greeting2());