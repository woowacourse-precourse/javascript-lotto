const { LOTTO, ERROR_MESSAGE } = require('./constant/constant');

class Bonus {
  #bonus;

  constructor(bonus) {
    this.validate(bonus);
    this.#bonus = bonus;
  }

  getValue() {
    return this.#bonus;
  }

  validate(bonus) {
    if (bonus !== +bonus) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
    if (bonus < LOTTO.MIN_NUMBER || bonus > LOTTO.MAX_NUMBER) {
      throw new Error(ERROR_MESSAGE.LOTTO.NUMBER_RANGE);
    }
  }
}

module.exports = Bonus;
