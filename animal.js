"use strict";
/*
===========================================
Assignment
Access Specifiers
Readonly Property
Static Member
===========================================
*/
class Animal {
    // Public Property
    name;
    // Private Property
    weight;
    // Protected Property
    animalType;
    // Readonly Property
    animalId;
    // Static Property
    static totalAnimals = 0;
    constructor(name, weight, animalType, animalId) {
        this.name = name;
        this.weight = weight;
        this.animalType = animalType;
        this.animalId = animalId;
        // Increase count whenever an object is created
        Animal.totalAnimals++;
    }
    // Public Method
    showDetails() {
        console.log("Animal Name :", this.name);
        console.log("Weight :", this.weight);
        console.log("Animal Type :", this.animalType);
        console.log("Animal ID :", this.animalId);
    }
    // Public Method
    eat() {
        console.log(`${this.name} is eating.`);
    }
    // Private Method
    showWeight() {
        console.log("Weight :", this.weight);
    }
    // Public Method calling Private Method
    displayWeight() {
        this.showWeight();
    }
}
// Object Creation
const animal1 = new Animal("Lion", 180, "Wild", 101);
// Public Property
console.log(animal1.name);
// Public Methods
animal1.eat();
animal1.showDetails();
animal1.displayWeight();
// Readonly Property (Can Read)
console.log("Animal ID :", animal1.animalId);
// Static Property
console.log("Total Animals :", Animal.totalAnimals);
/*
===========================================
Try These (Uncomment One by One)
===========================================
*/
// ❌ Private Property
// console.log(animal1.weight);
// ❌ Protected Property
// console.log(animal1.animalType);
// ❌ Readonly Property
// animal1.animalId = 200;
// ❌ Static Property
// console.log(animal1.totalAnimals);
