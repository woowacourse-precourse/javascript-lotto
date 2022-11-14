const { ERROR_MESSAGE } = require('../constants');

class BonusNumber {
  constructor(number) {
    this.number = number;
    this.bonusNumber = this.getBonusNumberWithoutSpace();
    this.validateInputBonusNumber(this.bonusNumber);
  }

  getBonusNumberWithoutSpace() {
    return this.number.replace(/\s/g, '').split(',');
  }

  validateInputBonusNumber(number) {
    if (number < 1 || number > 45 || !new RegExp('^[0-9]+$').test(number)) {
      throw new Error(ERROR_MESSAGE.lottoRange);
    }
  }
}

module.exports = BonusNumber;
