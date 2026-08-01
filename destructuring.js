const user1 = {
    username: "Chander",
    password: "chan1234"
}

const user2 = {
    username: "Rahul",
    password: "rahul1234"
}
{
const {username,password} = user1;
console.log(username, password);
}
{
const {username,password} = user2;
console.log(username,password);
}

//destructure inside a loop

const employee = [
    {
    empname: "Chander",
    empdep: "QA"
},
{
    empname: "Rahul",
    empdep: "HR"
}
];

for (const x of employee) {
    console.log(x);
}

for (const { empname, empdep } of employee) {
    console.log( empname, empdep );
}