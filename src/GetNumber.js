const Lotto = require('./Lotto');

class GetNumber {
    constructor() {
        this.validate = new Lotto().validate();
        this.bonusValidate = new Lotto().bonusValidate();
    }
    toWin(numbers) {
        this.validate(numbers);
        numbers = numbers.split(',');
        console.log(numbers);
    };

    bonus(number) {
        this.bonusValidate(number);
        console.log(number);
    }
}

module.exports = GetNumber;

