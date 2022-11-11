const { ERROR_MESSAGE } = require("./constants");
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
    if (!(Number(bonus) >= 1 && Number(bonus) <= 45))
      throw new Error(ERROR_MESSAGE.BONUS_RANGE);
  }
}

module.exports = Bonus;
