// Abstract Class
class Animal {

    // Static Property
    static kingdom = "Animal";

    constructor(name, age) {

        // Prevent object creation of abstract class
        if (new.target === Animal) {
            throw new Error("Animal is an abstract class.");
        }

        // Public Property
        this.name = name;

        // Private Property
        this.#age = age;

        // Readonly Property
        Object.defineProperty(this, "animalId", {
            value: 101,
            writable: false
        });
    }

    // Private Property Declaration
    #age;

    // Public Method to access private property
    showAge() {
        console.log("Age:", this.#age);
    }

    // Abstract Method
    makeSound() {
        throw new Error("makeSound() must be implemented.");
    }

    // Static Method
    static showKingdom() {
        console.log("Kingdom:", Animal.kingdom);
    }
}

// Child Class
class Dog extends Animal {

    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed; // Public Property
    }

    // Implement Abstract Method
    makeSound() {
        console.log(`${this.name} says: Woof Woof!`);
    }

    showBreed() {
        console.log("Breed:", this.breed);
    }
}

// Static Method Call
Animal.showKingdom();


// Create Child Object
const dog1 = new Dog("Tommy", 3, "Labrador");

// Public Property
console.log("Name:", dog1.name);

// Readonly Property
console.log("Animal ID:", dog1.animalId);

// Private Property (Access through method)
dog1.showAge();

// Child Class Method
dog1.showBreed();

// Abstract Method Implementation
dog1.makeSound();


// Try to change Readonly Property
dog1.animalId = 500;

console.log("Animal ID After Change:", dog1.animalId);