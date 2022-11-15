const { ERROR } = require('./Message');

class Validate {
  static validateInput(number) {
    if (!this.isNumber(number)) throw new Error(ERROR.INPUT_NUMBER_ERROR);

    if (!this.isInputUnit(number)) throw new Error(ERROR.INPUT_UNIT_ERROR);

    return true;
  }

  static validateLottoNumber(number) {
    if (!this.isSixCount) throw new Error(ERROR.COUNT_ERROR);

    if (!this.isSingleNumbers) throw new Error(ERROR.DUPLICATION_ERROR);

    number.forEach((num) => this.validateNumber(num));
  }

  static validateNumber(number) {
    if (!this.isNumber(number)) throw new Error(ERROR.NUMBER_ERROR);

    if (!this.isRange(number)) throw new Error(ERROR.RANGE_ERROR);
  }

  static isNumber(number) {
    return /^[1-9][0-9]*$/.test(number);
  }

  static isInputUnit(number) {
    return number % 1000 === 0;
  }

  static isSixCount(numbers) {
    return numbers.length === 6;
  }

  static isSingleNumbers(numbers) {
    return numbers.length === new Set(numbers).size;
  }

  static isRange(number) {
    return number >= 1 && number <= 45;
  }
}

module.exports = Validate;
