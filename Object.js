console.log("\nObejects");

let myself = {

    name : "Rajeshwar",
    age : 33,
    phone : 7032575011,
    ID : 1

};

console.log(myself)
console.log(myself.name);
console.log(myself.age);
console.log(myself.phone);
console.log(myself.ID);

// Objects within Object

let family = {
    father : {
        name : "Narsa Goud",
        age : 60,
        phone : 1234567890
    },
    mother : {
        name : "Kalavathi",
        age : 55,
        phone : 9987654321
    },
    sister : {
        name : "Radhika",
        age : 40,
        phone : 1234567890
    }
}

console.log(family.father);
console.log(family.mother);
console.log(family.sister);

console.log(family.mother.phone);

family.mother.phone = 909090909;

console.log(family.mother.phone);


