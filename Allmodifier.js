class animal{
    name; //public property
    #secret; //private property
    constructor(name,age){
        this.name = name;
        this._age = age; //protected property
        this.#secret = "Hiddensecret";
    }
    publicmethod()
    {
        console.log("This is a public method");
        
    }

    showAge()
    {
        console.log(this._age);        
    }

    showSecret()
    {
        console.log(this.#secret);
    }
}

const dog = new animal("Rocky",5);

console.log(dog.name); //public

console.log(dog._age); //protected

dog.publicmethod();

dog.showAge();

dog.showSecret();