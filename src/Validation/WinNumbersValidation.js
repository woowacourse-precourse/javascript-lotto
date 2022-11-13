const Validation = require('./index');
const { WIN_NUMBER_ERROR_MESSAGE } = require('../lib/Constants');

class WinNumbersValidation extends Validation {
  constructor(answer) {
    super(answer);
    this.answer = answer;
  }

  validate() {
    this.checkEmpty();
    this.checkValidDivision();
    this.checkRange();
    this.checkOverlap();
  }

  checkIsEmpty() {
    if (super.isEmpty()) {
      throw new Error(WIN_NUMBER_ERROR_MESSAGE.not_valid_answer);
    }
    return true;
  }

  checkValidDivision() {
    const winNumberArray = this.answer.split(',');
    if (winNumberArray.length !== 6) {
      throw new Error(WIN_NUMBER_ERROR_MESSAGE.not_valid_division);
    }
    return true;
  }

  checkRange() {
    const winNumberArray = this.answer.split(',');

    winNumberArray.forEach((number) => {
      if (Validation.isRangeNumber(number)) {
        throw new Error(WIN_NUMBER_ERROR_MESSAGE.not_valid_range_number);
      }
      return true;
    });
  }

  checkOverlap() {
    const winNumberArray = this.answer.split(',');
    const winNumberSet = new Set(winNumberArray);

    if (winNumberArray.length !== winNumberSet.size) {
      throw new Error(WIN_NUMBER_ERROR_MESSAGE.not_valid_overlap_number);
    }
    return true;
  }
}

module.exports = WinNumbersValidation;
