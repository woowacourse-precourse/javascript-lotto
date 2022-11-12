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
}

module.exports = WinNumbersValidation;
