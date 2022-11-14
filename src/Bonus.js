const { ERROR } = require('./lib/constants');
const {
  checkWinningIncludeBonus,
  checkBonusRange,
} = require('./lib/utils/bonusUtils');

class Bonus {
  #bonus;

  constructor(bonus, winningNumbers) {
    this.validate(bonus, winningNumbers);
    this.#bonus = bonus;
  }

  validate(bonus, winningNumbers) {
    if (checkWinningIncludeBonus(winningNumbers, bonus)) {
      throw new Error(ERROR.DUPLICATE_BONUS_ERROR);
    }

    if (checkBonusRange(bonus)) {
      throw new Error(ERROR.INCORRECT_RANGE_ERROR);
    }
  }

  getBonusNumber() {
    return this.#bonus;
  }
}

module.exports = Bonus;
