const { ERROR_MESSAGE, LOTTO } = require("./constants");
class Bonus {
  bonus;

  constructor(number) {
    this.validation(number);
    this.bonus = Number(number);
  }
  validation(number) {
    this.isBonusInRange(number);
  }

  isBonusInRange(bonus) {
    if (!(Number(bonus) >= LOTTO.MIN_RANGE && Number(bonus) <= LOTTO.MAX_RANGE))
      throw new Error(ERROR_MESSAGE.BONUS_RANGE);
  }
}

module.exports = Bonus;
