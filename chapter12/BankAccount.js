class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
            return;
        }

        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }
}

const account = new BankAccount(1000);

account.deposit(500);
account.withdraw(300);

console.log(account.getBalance());