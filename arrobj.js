let employees = [
    {
        name: "Rahul",
        department: "QA"
    },
    {
        name: "Chander",
        department: "AutomationQA"
    },
    {
        name: "Sanjay",
        department: "QA"
    }
];

console.log(employees);
console.log(employees[0]);
console.log(employees[0].name);

for (let x of employees) {
    console.log(x.name);
}