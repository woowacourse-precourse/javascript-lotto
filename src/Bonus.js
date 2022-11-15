const { EXCEPTION_MESSAGE_BONUS } = require("./constants/constants");

class Bonus {
  #bonus;
  #lottoNumbers;

  constructor(lottoNumbers, bonus) {
    this.#lottoNumbers = lottoNumbers;
    this.validate(bonus);
    this.#bonus = bonus;
  }

  validate(bonus) {
    if (!Number.isInteger(bonus)) {
      throw new Error(EXCEPTION_MESSAGE_BONUS.INPUT_INTEGER);
    }
    if (!(bonus >= 1 && bonus <= 45)) {
      throw new Error(EXCEPTION_MESSAGE_BONUS.INPUT_ERROR);
    }
    if (this.#lottoNumbers.includes(bonus)) {
      throw new Error(EXCEPTION_MESSAGE_BONUS.INPUT_OVERLAPPED);
    }
  }

  getBonus() {
    return this.#bonus;
  }
}

module.exports = Bonus;
