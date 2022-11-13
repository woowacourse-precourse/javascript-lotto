const Validation = require("./Validation");

class GetNumber {
    constructor() {
        this.validation = new Validation();
    }

    toWin(numbers) {
        numbers = numbers.split(',');
        this.validation.validate(numbers);
        console.log(numbers);
    }

    bonus(numbers, number) {
        this.validation.bonusValidate(numbers, number);
        console.log(number);
    }
}

module.exports = GetNumber;

