const { ERROR_MESSAGE } = require("./constant/message");

class Bonus {
  constructor(bonus, winningLotto) {
    this.bonus = bonus;
    this.winningLotto = winningLotto;
    this.validate(bonus);
  }
  validate(bonus) {
    this.validateType(bonus);
    this.validateRange(bonus);
    this.validateOverlapWithWinning(bonus, this.winningLotto);
  }
  validateType(bonus) {
    [...bonus].forEach((num) => {
      if (isNaN(num)) {
        throw new Error(ERROR_MESSAGE.NOT_NUMBER);
      }
    });
  }
  validateRange(bonus) {
    if (bonus < 1 || bonus > 45) {
      throw new Error(ERROR_MESSAGE.NOT_RANGE);
    }
  }
  validateOverlapWithWinning(bonus, winningLotto) {
    if (winningLotto.includes(bonus)) {
      throw new Error(ERROR_MESSAGE.OVERLAP);
    }
  }
  returnBonus() {
    return this.bonus;
  }
}
module.exports = Bonus;
