class animal{
    #secret;
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.#secret = "Milictary dog"
    }

    ShowSecret()
    {
        console.log(this.#secret)
    }
}
const dog = new animal("dog",5)
console.log(dog.name);
console.log(dog.age);
//console.log(dog.#secret); private cannot be accessed outside of class
dog.ShowSecret();

