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
  }

  checkIsEmpty() {
    if (this.answer === null || this.answer === undefined || this.answer === '') {
      throw new Error(BONUS_NUMBER_ERROR_MESSAGE.not_valid_answer);
    }
    return true;
  }
}

module.exports = BonusNumberValidation;
