//Objects via constructor

const BTB = new Object()
console.log(BTB);

BTB.id = "123abc"
BTB.name = "Prishu"
BTB.IsLoggedIn = false

console.log(BTB)

const BTB2 = {
    email : "btb@gmail.com",
    Fullname: {
        userfullname: {
            firstname: "Harsh",
            Lastname: "Jain"
        }
    }
}

console.log(BTB2.Fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj4 = {5:"a", 6: "b"}

//const obj3 = Object.assign({}, obj1, obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3)