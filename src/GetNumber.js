const Validation = require('./Validation');

class GetNumber {
  constructor() {
    this.validation = new Validation();
  }

  static toWin(numbers) {
    Validation.validate(numbers.split(','));
  }

  static bonus(numbers, number) {
    Validation.bonusValidate(numbers, number);
  }
}

module.exports = GetNumber;
