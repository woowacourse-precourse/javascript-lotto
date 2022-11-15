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
        this.generatedSixNumbers = [];
        this.winningNumber;
        this.bonusNumber;
        this.record = this.#prizeList;
        this.earning;
        this.earningRatio;
    }

    setStoreVariables(number) {
        this.purchase = Number(number);
        this.amount = this.purchase / 1000;
        for (let i = 0; i < this.amount; i++) {
            let randomSixNumbers = generateRandomNumbers(1, 45, 6);
            this.generatedSixNumbers.push(randomSixNumbers);
        }
    }

    setWinningNumber(numbers) {
        this.winningNumber = numbers.split(',').map(x => Number(x));
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

    isValidUnit(number) {
        if (number % 1000 !== 0) {
            throw new Error('[ERROR] 구입금액은 1000단위만 입력 가능합니다.');
        }
        return true;
    }

    isValidNumber(number) {
        if (String(number)[0] === '0') {
            throw new Error('[ERROR] 입력값은 0으로 시작할 수 없습니다.');
        }
        return true;
    }

    isValidCharacter(number) {
        if (/[^0-9]/g.test(number)) {
            throw new Error("[ERROR] 숫자만 입력 가능합니다.");
        }
        return true;
    }

    isValidLotto(numbersArr) {
        if (numbersArr.length !== 6) {
            throw new Error("[ERROR] 6개의 숫자가 필요합니다.");
        }
        if (/[^0-9]/g.test(numbersArr.join(''))) {
            throw new Error("[ERROR] 숫자와 콤마(,)만 입력 가능합니다.");
        }
        if (numbersArr.includes(0)) {
            throw new Error("[ERROR] 0 또는 공백이 포함되어 있습니다.");
        }
        if (numbersArr.includes(undefined)) {
            throw new Error("[ERROR] 누락된 숫자가 있습니다.");
        }
        if (numbersArr.filter(x => x < 1 || x > 45).length !== 0) {
            throw new Error("[ERROR] 1~45 사이의 정수만 입력가능합니다.");
        }
        if (new Set(numbersArr).size !== 6) {
            throw new Error("[ERROR] 서로 중복되지 않는 숫자들만 입력 가능합니다.");
        }
        return true;
    }

    isValidBonus(number) {
        if (this.winningNumber.includes(number)) {
            throw new Error("[ERROR] 당첨 번호와 중복되는 숫자는 허용되지 않습니다.");
        }
        return true;
    }
}

module.exports = Store;