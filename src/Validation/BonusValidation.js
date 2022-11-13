const { BONUS_NUMBER_ERROR_MESSAGE } = require('../lib/Constants');

const BonusNumberError = require('../Error/BonusNumberError');
const Validation = require('./index');

class BonusValidation extends Validation {
  winNumberList = [];

  constructor(answer, winNumberList) {
    super(answer);
    this.winNumberList = winNumberList;
  }

  validate() {
    this.checkEmpty();
    this.checkRange();
    this.checkOverlap();
  }

  checkEmpty() {
    if (super.isEmpty()) {
      throw new BonusNumberError(BONUS_NUMBER_ERROR_MESSAGE.not_valid_answer);
    }
    return true;
  }

  checkRange() {
    if (Validation.isRangeNumber(this.answer)) {
      throw new BonusNumberError(BONUS_NUMBER_ERROR_MESSAGE.not_valid_range_number);
    }
    return true;
  }

  checkOverlap() {
    if (this.isNumberIncludesWinNumberList()) {
      throw new BonusNumberError(BONUS_NUMBER_ERROR_MESSAGE.not_valid_overlap_number);
    }
    return true;
  }

  isNumberIncludesWinNumberList() {
    const answerNumber = Number(this.answer);
    return this.winNumberList.includes(answerNumber);
  }
}

module.exports = BonusValidation;
