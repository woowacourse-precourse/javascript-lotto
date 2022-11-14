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
    // if (numbers.some((number, index, array) => array.indexOf(number) !== index)) {
    //   throw new Error(ERROR_MESSAGE.LOTTO.NUMBER_DUPLICATED);
    // }
    if (bonus < LOTTO.MIN_NUMBER || bonus > LOTTO.MAX_NUMBER) {
      throw new Error(ERROR_MESSAGE.LOTTO.NUMBER_RANGE);
    }
  }
}

module.exports = Bonus;
