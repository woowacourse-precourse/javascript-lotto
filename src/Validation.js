const { UNIT, ERROR_MESSAGE } = require("./constant/constant");

class Validation {
  static validateMoney(money) {
    if (money % UNIT.money !== 0) {
      throw new Error(ERROR_MESSAGE.wrongUnit);
    }
  }

  static validateNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.wrongQuantity);
    }

    if (!numbers.every((number) => number >= 1 && number <= 45)) {
      throw new Error(ERROR_MESSAGE.notInRange);
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR_MESSAGE.hasRepeat);
    }
  }

  static validateBonusNumber(winningNumbers, number) {
    if (number < 1 || number > 45) {
      throw new Error(ERROR_MESSAGE.notInRange);
    }

    if (winningNumbers.includes(number)) {
      throw new Error(ERROR_MESSAGE.hasRepeat);
    }
  }
}

module.exports = Validation;
