const Lotto = require('./Lotto');

class GetNumber {
    constructor() {
        this.lotto = new Lotto();
    }

    toWin(numbers) {
        numbers = numbers.split(',');
        this.lotto.validate(numbers);
        console.log(numbers);
    }

    bonus(number) {
        this.Lotto.bonusValidate(number);
        console.log(number);
    }
}

module.exports = GetNumber;

