const { ERROR_MESSAGE } = require('../constant');
const NumberValidator = require('./NumberValidator');
const RangeMixin = require('./RangeMixin');

class LottoValidator extends RangeMixin(NumberValidator) {
  static validate(input) {
    this.isValidNumber(input);
    this.isValidRange(input);
    this.isValidLength(input);
    this.isNoneDuplication(input);
  }

  static isValidLength(input) {
    if (input.length !== 6) throw new Error(ERROR_MESSAGE.LENGTH);
  }

  static isNoneDuplication(input) {
    if ([...new Set(input)].length !== 6)
      throw new Error(ERROR_MESSAGE.DUPLICATION);
  }
}

module.exports = LottoValidator;
