const { LOTTO, ERROR_MESSAGE } = require("../constants");

class Bonus {
  #bonus;

  constructor(bonus, winningNumber) {
    this.validate(bonus, winningNumber);
    this.#bonus = bonus;
    this.getBonus = this.getBonus.bind(this);
  }

  validate(bonus, winningNumber) {
    const str2num = Number(bonus);

    if (!Number.isInteger(str2num)) {
      throw new Error(ERROR_MESSAGE.NAN);
    }
    if (winningNumber.includes(str2num)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE);
    }
    if (str2num < LOTTO.MIN || str2num > LOTTO.MAX) {
      throw new Error(ERROR_MESSAGE.RANGE);
    }
    return true;
  }

  getBonus() {
    return this.#bonus;
  }
}

module.exports = Bonus;
