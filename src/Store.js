const { generateRandomNumbers } = require('./Toolbox');

class Store {
    constructor() {
        this.purchase;
        this.amount;
        this.generatedLottos = [];
    }

    setStoreVars(number) {
        this.purchase = Number(number);
        this.amount = this.purchase / 1000;
        for (let i = 0; i < this.amount; i++) {
            let randomSixNumbers = generateRandomNumbers(1, 45, 6);
            this.generatedLottos.push(randomSixNumbers);
        }
    }
}

module.exports = Store;