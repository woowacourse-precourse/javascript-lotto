const { ERROR } = require('./lib/constants');

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

    if (!/^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/.test(bonus)) {
      throw new Error(ERROR.INCORRECT_RANGE_ERROR);
    }
  }

  getBonusNumber() {
    return this.#bonus;
  }
}

module.exports = Bonus;
