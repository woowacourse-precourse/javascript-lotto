const { WIN_NUMBER_ERROR_MESSAGE, COMMON_ERROR_MESSAGE } = require('../lib/Constants');

const Validation = require('./index');
const WinNumberError = require('../Error/WinNumberError');
const { isOneToFourtyFiveRangeNumber } = require('../lib/Utils');

class WinNumbersValidation extends Validation {
  constructor(answer) {
    super(answer);
    this.answer = answer;
  }

  validate() {
    super.checkEmpty();
    this.checkValidDivision();
    this.checkRange();
    this.checkOverlap();
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
      if (isOneToFourtyFiveRangeNumber(number)) {
        throw new WinNumberError(COMMON_ERROR_MESSAGE.not_valid_range_number);
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
