const { ERROR } = require('./constants/constants.js');
class Bonus {
  #bonus;
  #numbers;

  constructor(numbers, bonus) {
    this.#numbers = numbers;
    this.#bonus = bonus;
    this.validate(bonus);
  }

  validate(bonus) {
    this.validateBonusRange(bonus);
    this.validateUniqueBonus(bonus);
    this.validateIntegerBonus(bonus);
  }

  validateBonusRange(bonus) {
    if (!(bonus >= 1 && bonus <= 45)) {
      throw new Error(ERROR.BONUS.OUT_OF_RANGE);
    }
  }

  validateUniqueBonus(bonus) {
    if (this.#numbers.includes(bonus)) {
      throw new Error(ERROR.BONUS.DUPLICATE_NUMBER);
    }
  }

  validateIntegerBonus(bonus) {
    if (isNaN(bonus)) {
      throw new Error(ERROR.BONUS.NOT_INTEGER);
    }
  }

  getBonus() {
    return this.#bonus;
  }
}

module.exports = Bonus;
