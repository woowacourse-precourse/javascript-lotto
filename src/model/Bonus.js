const { LOTTO, ERROR_MESSAGE } = require("../constants");

class Bonus {
  #bonus;

  constructor(bonus) {
    this.validate(bonus);
    this.#bonus = bonus;
  }

  validate(bonus) {
    const str2num = Number(bonus);

    if (!Number.isInteger(str2num)) {
      throw new Error(ERROR_MESSAGE.NAN);
    }
    if (str2num < LOTTO.MIN || str2num > LOTTO.MAX) {
      throw new Error(ERROR_MESSAGE.RANGE);
    }
    return true;
  }
}

module.exports = Bonus;
