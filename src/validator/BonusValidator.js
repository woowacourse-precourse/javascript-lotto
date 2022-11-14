const { ERROR_MESSAGE } = require('../constant');
const NumberValidator = require('./NumberValidator');
const RangeMixin = require('./RangeMixin');

class BonusValidator extends RangeMixin(NumberValidator) {
  static validate(winning, input) {
    this.isValidNumber(input);
    this.isValidRange(input);
    this.isValidBonusNumber(winning, input);
  }

  static isValidBonusNumber(winning, bonus) {
    if (winning.includes(bonus)) throw new Error(ERROR_MESSAGE.DUPLICATION);
  }
}

module.exports = BonusValidator;
