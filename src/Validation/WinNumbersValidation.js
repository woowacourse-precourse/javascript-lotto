const Validation = require('./index');
const { WIN_NUMBER_ERROR_MESSAGE } = require('../lib/Constants');

class WinNumbersValidation extends Validation {
  constructor(answer) {
    super();
    this.answer = answer;
  }

  validate() {
    this.checkIsEmpty();
    this.checkIsValidDivision();
    this.checkIsRangeNumber();
  }

  checkIsEmpty() {
    if (this.answer === null || this.answer === undefined || this.answer === '') {
      throw new Error(WIN_NUMBER_ERROR_MESSAGE.not_valid_answer);
    }
    return true;
  }

  checkIsValidDivision() {
    const winNumberArray = this.answer.split(',');
    if (winNumberArray.length !== 6) {
      throw new Error(WIN_NUMBER_ERROR_MESSAGE.not_valid_division);
    }
    return true;
  }

  checkIsRangeNumber() {
    const winNumberArray = this.answer.split(',');
    const regExp = /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/;

    winNumberArray.forEach((number) => {
      if (!regExp.test(number)) {
        throw new Error(WIN_NUMBER_ERROR_MESSAGE.not_valid_range_number);
      }
      return true;
    });
  }
}

module.exports = WinNumbersValidation;
