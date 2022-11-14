const { ERROR_MESSAGE } = require('../constants');

class WinnerNumber {
  constructor(number) {
    this.number = number;
    this.numberWithoutSpace = this.getNumberWithoutSpace();
    this.validateRange();
  }

  getNumberWithoutSpace() {
    return this.number.replace(/\s/g, '').split(',');
  }

  validateRange() {
    this.validateFromOneToFourtyFiveNumber();
    this.validateSixNumberByComma();
    this.validateNumberWithoutDuplicate();
  }

  validateFromOneToFourtyFiveNumber() {
    this.numberWithoutSpace.map((number) => {
      if (number < 1 || number > 45 || !new RegExp('^[0-9]+$').test(number)) {
        throw new Error(ERROR_MESSAGE.winnerNumberRange);
      }
    });
  }

  validateSixNumberByComma() {
    if (this.number.split(',').length !== 6) {
      throw new Error(ERROR_MESSAGE.winnerNumberCountOnlySix);
    }
  }

  validateNumberWithoutDuplicate() {
    if (new Set(this.numberWithoutSpace).size !== 6) {
      throw new Error(ERROR_MESSAGE.numberWithoutDuplicate);
    }
  }
}

module.exports = WinnerNumber;
