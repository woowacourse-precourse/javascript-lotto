const {
  ERROR_NOT_NUMBER,
  ERROR_NOT_BELONG,
  ERROR_LOWER_1000,
  ERROR_NOT_DIVIDE_1000,
  ERROR_INCLUDE,
} = require('./Constants');

class Validate {
  validateBonusNumber(bonusNumber, winningList) {
    if (isNaN(bonusNumber)) {
      throw new Error(ERROR_NOT_NUMBER);
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_NOT_BELONG);
    }
    if (winningList.includes(bonusNumber)) {
      throw new Error(ERROR_INCLUDE);
    }
  }

  validateMoney(money) {
    if (money < 1000) {
      throw new Error(ERROR_LOWER_1000);
    }
    if (money % 1000 !== 0) {
      throw new Error(ERROR_NOT_DIVIDE_1000);
    }
  }
}

module.exports = Validate;
