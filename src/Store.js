const { generateRandomNumbers } = require('./Toolbox');

class Store {
    #prizeList = [
        { text: '3개 미만 일치 (0원)', money: 0 },
        { text: '3개 일치 (5,000원)', money: 5000 },
        { text: '4개 일치 (50,000원)', money: 50000 },
        { text: '5개 일치 (1,500,000원)', money: 1500000 },
        { text: '5개 일치, 보너스 볼 일치 (30,000,000원)', money: 30000000 },
        { text: '6개 일치 (2,000,000,000원)', money: 2000000000 },
    ];
    constructor() {
        this.purchase;
        this.amount;
        this.generatedLottos = [];
        this.winningNumbers;
        this.bonusNumber;
        this.record = this.#prizeList;
        this.earning;
        this.earningRatio;
    }

    setStoreVars(number) {
        this.purchase = Number(number);
        this.amount = this.purchase / 1000;
        for (let i = 0; i < this.amount; i++) {
            let randomSixNumbers = generateRandomNumbers(1, 45, 6);
            this.generatedLottos.push(randomSixNumbers);
        }
    }

    setWinningNumbers(numbers) {
        this.winningNumbers = numbers.split(',').map(x => Number(x));
    }

    setBonusNumber(number) {
        this.bonusNumber = Number(number);
    }

    setEarning() {
        this.earning = this.record.map(x => x.money * x.numbers).reduce((i, j) => i + j);
    }

    setEarningRatio() {
        this.earningRatio = (100 * this.earning / this.purchase).toFixed(1);
    }

}

module.exports = Store;