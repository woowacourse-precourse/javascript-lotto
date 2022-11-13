const Validation = require('./index');
const { BONUS_NUMBER_ERROR_MESSAGE } = require('../lib/Constants');

class BonusValidation extends Validation {
  winNumberList = [];

  constructor(answer, winNumberList) {
    super(answer);
    this.winNumberList = winNumberList;
  }

  validate() {
    this.checkIsEmpty();
    this.checkIsRangeNumber();
    this.checkIsOverlapNumber();
  }

  checkIsEmpty() {
    if (super.isEmpty()) {
      throw new Error(BONUS_NUMBER_ERROR_MESSAGE.not_valid_answer);
    }
    return true;
  }

  checkIsRangeNumber() {
    const regExp = /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/;
    if (!regExp.test(this.answer)) {
      throw new Error(BONUS_NUMBER_ERROR_MESSAGE.not_valid_range_number);
    }
    return true;
  }

  checkIsOverlapNumber() {
    const answerNumber = Number(this.answer);
    if (this.winNumberList.includes(answerNumber)) {
      throw new Error(BONUS_NUMBER_ERROR_MESSAGE.not_valid_overlap_number);
    }
    return true;
  }
}

module.exports = BonusValidation;
