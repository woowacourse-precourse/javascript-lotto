const { ERROR_MESSAGE_BONUS } = require('../constants/constants');

class Bonus {
  #bonus;
  #numbers;

  constructor(numbers, bonus) {
    this.#numbers = numbers;
    this.validate(bonus);
    this.#bonus = bonus;
  }
  
  validate(bonus) {
    if (!(bonus >= 1 && bonus <= 45)) {
      throw new Error(ERROR_MESSAGE_BONUS.RANGE);
    }

    if (!Number.isInteger(bonus)) {
      throw new Error(ERROR_MESSAGE_BONUS.ISINTEGER);
    }

    if (this.#numbers.includes(bonus)) {
      throw new Error(ERROR_MESSAGE_BONUS.OVERLAP);
    }
  }

  getBonus() {
    return this.#bonus;
  }
}
  
module.exports = Bonus;