const Validation = require('./Validation');
const Lotto = require('./Lotto');

class GetNumber {
    constructor() {
        this.Validation = new Validation();
        this.validate = new Lotto().validate();
    }
    toWin(numbers) {
        this.Validation(numbers);
        this.validate(numbers);
        numbers = numbers.split(',');
        console.log(numbers);
    };

    bonus(number) {
        this.Validation(numbers);
        console.log(number);
    }
}

module.exports = GetNumber;

