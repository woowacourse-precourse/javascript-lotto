const { MESSAGES } = require('../constants');
const InputError = require('./Error');

class Validation {
  static isRightMoney(playerMoney) {
    if (playerMoney === 0) throw new InputError(MESSAGES.NO_MONEY);
    if (playerMoney % 1000 !== 0) throw new InputError(MESSAGES.NOT_ACCEPTABLE);
    return true;
  }

  static isRightInput(input) {
    if (input.length !== 6) throw new InputError(MESSAGES.WRONG_LENGTH);
    input.forEach((num, index) => {
      const number = this.isRightSingleNum(num);
      if (input.indexOf(number) !== index) {
        throw new InputError(MESSAGES.DUPLICATED_INPUT);
      }
    });
    return true;
  }

  static isRightBonus(numbers, bonus) {
    const bonusNum = this.isRightSingleNum(bonus);
    if (numbers.some((number) => number === bonusNum)) {
      throw new InputError(MESSAGES.DUPLICATED_INPUT);
    }
    return true;
  }

  static isRightSingleNum(bonus) {
    const number = Number(bonus);
    if (Number.isNaN(number)) throw new InputError(MESSAGES.NOT_A_NUMBER);
    if (number === 0) throw new InputError(MESSAGES.ZERO_VALUE);
    if (number < 1 || number > 45) throw new InputError(MESSAGES.WRONG_RANGE);
    return number;
  }
}

module.exports = Validation;
