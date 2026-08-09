function createBankAccount(initial) {
  let balance = initial;

  return {
    deposit(amount) {
      balance += amount;
    },

    getBalance() {
      return balance;
    }
  };
}


const account = createBankAccount(100);

account.deposit(50);

console.log(account.getBalance()); 