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
    if (this.isWinNumberLengthSix()) {
      throw new WinNumberError(WIN_NUMBER_ERROR_MESSAGE.not_valid_division);
    }
    return true;
  }

  isWinNumberLengthSix() {
    const winNumberArray = this.answer.split(',');
    return winNumberArray.length !== 6;
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
    if (this.isSizeSame()) {
      throw new WinNumberError(WIN_NUMBER_ERROR_MESSAGE.not_valid_overlap_number);
    }
    return true;
  }

  isSizeSame() {
    const winNumberArray = this.answer.split(',');
    const winNumberSet = new Set(winNumberArray);

    return winNumberArray.length !== winNumberSet.size;
  }
}

module.exports = WinNumbersValidation;
