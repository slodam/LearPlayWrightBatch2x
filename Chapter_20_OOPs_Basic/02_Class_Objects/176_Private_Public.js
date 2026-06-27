class credentials {
    #apiKey;
    user;

    constructor(user, key) {

        this.user = user;
        this.#apiKey = key;
    }

    getAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}

const Cred = new credentials('admin', 'scret_Key_123');
console.log(Cred.user);
// console.log(Cred.key); //undefined
// console.log(Cred.#apiKey); //error

const token = Cred.getAuthHeader();
console.log(token)
