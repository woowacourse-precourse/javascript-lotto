const { ERROR } = require('./utils/constants');
class Bonus {
  constructor(number, winningNumbers) {
    this.validateBonusNumber(number, winningNumbers);
  }

  validateBonusNumber(bonus, winningNumbers) {
    if (isNaN(bonus)) {
      throw new Error(ERROR.NOT_A_NUMBER);
    }

    if (winningNumbers.includes(bonus)) {
      throw new Error(ERROR.DUPLICATE);
    }

    if (bonus <= 0 || bonus > 45) {
      throw new Error(ERROR.OUT_OF_RANGE);
    }
  }
}
module.exports = Bonus;
