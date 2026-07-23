class BankAccount {

    // Static Property
    static bankName = "State Bank";

    // Private Property
    #balance;

    constructor(owner, accountNumber, balance) {

        // Public Properties
        this.owner = owner;
        this.accountNumber = accountNumber;

        // Readonly Property
        Object.defineProperty(this, "branchCode", {
            value: "SBI001",
            writable: false
        });

        this.#balance = balance;
    }

    deposit(amount) {

        this.#balance += amount;

        console.log(`₹${amount} deposited.`);
    }

    withdraw(amount) {

        if (amount > this.#balance) {
            console.log("Insufficient Balance");
            return;
        }

        this.#balance -= amount;

        console.log(`₹${amount} withdrawn.`);
    }

    showBalance() {
        console.log("Current Balance :", this.#balance);
    }

    static bankInformation() {
        console.log("Welcome to", BankAccount.bankName);
    }
}


// Child Class

class SavingsAccount extends BankAccount {

    constructor(owner, accountNumber, balance, interestRate) {

        super(owner, accountNumber, balance);

        this.interestRate = interestRate;

    }

    showInterest() {

        console.log("Interest Rate :", this.interestRate + "%");

    }

}

//BankAccount.bankInformation();

const user1 = new SavingsAccount(
    "Mahima",
    123456,
    10000,
    6.5
);

console.log(user1.owner);

console.log(user1.accountNumber);

console.log(user1.branchCode);

user1.deposit(5000);

user1.withdraw(2000);

user1.showBalance();

user1.showInterest();

console.log(BankAccount.bankName);
