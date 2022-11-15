const { BONUS_ERROR } = require('./constants/constants');

class Bonus {
  constructor(number, numbers) {
    this.validate(number, numbers);
    this.number = Number(number);
  }

  validate(bonus, numbers) {
    if (/[^0-9]/.test(bonus)) {
      throw new Error(BONUS_ERROR.NUMBER);
    }

    if (!(bonus >= 1 && bonus <= 45)) {
      throw new Error(BONUS_ERROR.DOMAIN);
    }

    if (numbers.includes(bonus)) {
      throw new Error(BONUS_ERROR.DUPLICATION);
    }
  }
}

module.exports = Bonus;
