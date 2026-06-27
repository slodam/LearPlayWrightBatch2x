class ICICI {
    #balance

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balnce, isChashier) {
        if (isChashier) {
            this.#balance = balnce;
        }
        else {
            console.log('Not Allowed')
        }
    }

}

let bankAcc1 = new ICICI('Nihira', 100000)
console.log(bankAcc1.getBalance())
bankAcc1.setBalance(3000000, false)
console.log(bankAcc1.getBalance())

let bankAcc2 = new ICICI('Surabhi', 10000000)
console.log(bankAcc2.getBalance())
bankAcc2.setBalance(300000000, true)
console.log(bankAcc2.getBalance())