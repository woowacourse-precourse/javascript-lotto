const { ERROR_MESSAGE } = require('../constant');

class NumberValidator {
  static isValidNumber(input) {
    if (isNaN(input)) throw new Error(ERROR_MESSAGE.TYPE);
  }
}

class MoneyValidator extends NumberValidator {
  constructor(args) {
    super(...args);
  }

  static validate(input) {
    this.isValidMoney(input);
    this.isValidNumber(input);
  }

  static isValidMoney(input) {
    if (input % 1000) throw new Error(ERROR_MESSAGE.CURRENCY_UNIT);
  }
}

module.exports = { NumberValidator, MoneyValidator };
