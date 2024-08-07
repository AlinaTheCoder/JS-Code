class BankAccount {
    #balance;
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

deposit(amount){
    this.#balance+=amount;
    console.log(`Rs ${amount} Deposited, New Balance: ${this.#balance}`);
}
withdraw(amount){
    if(amount>this.#balance){
        console.log(`Insufficient Funds for withdrawl!`)
    }
    else {
        this.#balance-=amount;
        console.log(`Rs ${amount} Withdrawn Successfully, New Balance: ${this.#balance}`);
    }
 
}
}

let myAccount = new BankAccount(2000);
myAccount.deposit(1000);
myAccount.withdraw(500);
myAccount.withdraw(5000); // insufficient funds 