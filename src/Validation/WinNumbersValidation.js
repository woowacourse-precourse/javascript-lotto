const { WIN_NUMBER_ERROR_MESSAGE } = require('../lib/Constants');

const Validation = require('./index');
const WinNumberError = require('../Error/WinNumberError');

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

  checkEmpty() {
    if (super.isEmpty()) {
      throw new WinNumberError(WIN_NUMBER_ERROR_MESSAGE.not_valid_answer);
    }
    return true;
  }

  checkValidDivision() {
    const winNumberArray = this.answer.split(',');
    if (winNumberArray.length !== 6) {
      throw new WinNumberError(WIN_NUMBER_ERROR_MESSAGE.not_valid_division);
    }
    return true;
  }

  checkRange() {
    const winNumberArray = this.answer.split(',');

    winNumberArray.forEach((number) => {
      if (Validation.isRangeNumber(number)) {
        throw new WinNumberError(WIN_NUMBER_ERROR_MESSAGE.not_valid_range_number);
      }
      return true;
    });
  }

  checkOverlap() {
    const winNumberArray = this.answer.split(',');
    const winNumberSet = new Set(winNumberArray);

    if (winNumberArray.length !== winNumberSet.size) {
      throw new WinNumberError(WIN_NUMBER_ERROR_MESSAGE.not_valid_overlap_number);
    }
    return true;
  }
}

module.exports = WinNumbersValidation;
