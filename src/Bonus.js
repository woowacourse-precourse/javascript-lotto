const { ERROR, LOTTO_RANGE_REGEX } = require('./lib/constants');

class Bonus {
  #bonus;

  constructor(bonus, winningNumbers) {
    this.validate(bonus, winningNumbers);
    this.#bonus = bonus;
  }

  validate(bonus, winningNumbers) {
    if (winningNumbers.includes(bonus)) {
      throw new Error(ERROR.DUPLICATE_BONUS_ERROR);
    }

    if (!LOTTO_RANGE_REGEX.test(bonus)) {
      throw new Error(ERROR.INCORRECT_RANGE_ERROR);
    }
  }

  getBonusNumber() {
    return this.#bonus;
  }
}

module.exports = Bonus;
