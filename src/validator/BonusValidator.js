const { ERROR_MESSAGE } = require('../constant');
const NumberValidator = require('./NumberValidator');

class BonusValidator extends NumberValidator {
  static validate(winning, bonus) {
    this.isValidNumber([...winning, bonus]);
    this.isValidRange([...winning, bonus]);
    this.isBonusDuplication(winning, bonus);
  }

  static isBonusDuplication(winning, bonus) {
    if (winning.includes(bonus)) throw new Error(ERROR_MESSAGE.DUPLICATION);
  }
}

module.exports = BonusValidator;
