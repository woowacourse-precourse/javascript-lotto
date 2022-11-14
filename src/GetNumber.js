const Validation = require("./Validation");

class GetNumber {
    constructor() {
        this.validation = new Validation();
    }

    toWin(numbers) {
        numbers = numbers.split(',');
        this.validation.validate(numbers);
    }

    bonus(numbers, number) {
        this.validation.bonusValidate(numbers, number);
    }
}

module.exports = GetNumber;

