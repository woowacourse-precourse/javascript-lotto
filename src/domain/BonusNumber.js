const { ERROR_MESSAGE } = require("../constants");

class BonusNumber {
  constructor(number) {
    this.number = number;
    this.bonusNumber = this.getBonusNumberWithoutSpace(number);
    this.validateInputBonusNumber(this.bonusNumber);
  }

  validateInputBonusNumber(number) {
    if (number < 1 || number > 45 || !new RegExp("^[0-9]+$").test(number)) {
      throw new Error(ERROR_MESSAGE.lottoRange);
    }
  }

  getBonusNumberWithoutSpace(number) {
    return number.replace(/\s/g, "").split(",");
  }
}

module.exports = BonusNumber;
