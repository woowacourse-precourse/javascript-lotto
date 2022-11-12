const Validation = require('./index');
const { BONUS_NUMBER_ERROR_MESSAGE } = require('../lib/Constants');

class BonusNumberValidation extends Validation {
  winNumberList = [];

  constructor(answer, winNumberList) {
    super(answer);
    this.winNumberList = winNumberList;
  }

  validate() {
    this.checkIsEmpty();
    this.checkIsRangeNumber();
  }

  checkIsEmpty() {
    if (this.answer === null || this.answer === undefined || this.answer === '') {
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
}

module.exports = BonusNumberValidation;
