const Validation = require('./Validation');

class GetNumber {
  constructor() {
    this.validation = new Validation();
  }

  toWin(numbers) {
    const lotto = numbers.split(',');
    this.validation.validate(lotto);
  }

  bonus(numbers, number) {
    this.validation.bonusValidate(numbers, number);
  }
}

module.exports = GetNumber;
