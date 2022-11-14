const { ERROR_MESSAGE } = require('../constant');
const NumberValidator = require('./NumberValidator');

class MoneyValidator extends NumberValidator {
  constructor() {
    super();
  }

  static validate(input) {
    this.isValidMoneyRange(input);
    this.isValidMoney(input);
    this.isValidNumber(input);
  }

  static isValidMoney(input) {
    if (Number(input) % 1000) throw new Error(ERROR_MESSAGE.CURRENCY_UNIT);
  }

  static isValidMoneyRange(input) {
    if (!Number(input)) throw new Error(ERROR_MESSAGE.FALSY_INPUT);
  }
}

module.exports = MoneyValidator;
