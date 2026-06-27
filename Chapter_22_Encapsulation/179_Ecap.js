class BankAccount {
    #balance;

    deposite(amount) {
        if (amount > 0)
            this.#balance = + amount;

    }
    getBalance() {
        return this.#balance

    }

}

const account = new BankAccount();
account.deposite(100)
console.log(account.getBalance());
