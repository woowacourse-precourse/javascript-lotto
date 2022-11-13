const Validation = require('./index');
const { BONUS_NUMBER_ERROR_MESSAGE } = require('../lib/Constants');

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
      throw new Error(BONUS_NUMBER_ERROR_MESSAGE.not_valid_answer);
    }
    return true;
  }

  checkRange() {
    if (Validation.isRangeNumber(this.answer)) {
      throw new Error(BONUS_NUMBER_ERROR_MESSAGE.not_valid_range_number);
    }
    return true;
  }

  checkOverlap() {
    const answerNumber = Number(this.answer);
    if (this.winNumberList.includes(answerNumber)) {
      throw new Error(BONUS_NUMBER_ERROR_MESSAGE.not_valid_overlap_number);
    }
    return true;
  }
}

module.exports = BonusValidation;
