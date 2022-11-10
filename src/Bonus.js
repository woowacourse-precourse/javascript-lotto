const { LOTTO_ERROR_MESSAGE, VARIABLE_LOTTO } = require('../utils/constants');

class Bonus {
  #number;

  constructor(number) {
    this.#number = number;
    this.validate(number);
  }

  validate(number) {
    this.#validateLottoRange(number);
  }

  getNumber() {
    return +this.#number;
  }

  #validateLottoRange(number) {
    if (!VARIABLE_LOTTO.regex.test(number)) {
      throw new Error(LOTTO_ERROR_MESSAGE.range);
    }

    return this;
  }
}

module.exports = Bonus;
