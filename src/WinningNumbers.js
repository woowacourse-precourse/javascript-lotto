const { ERROR_MESSAGES } = require("./constants");

class WinningNumbers {
  constructor() {
    this.winningNumbers = [];
    this.bonusNumber = null;
  }

  addWinningNumbers(numbers) {
    this.validateNumberDuplication(numbers);
    numbers.forEach((number) => {
      this.validateNumber(number);
      this.winningNumbers.push(number);
    });
  }

  addBonusNumber(number) {
    this.validateNumber(number);
    this.bonusNumber = Number(number);
  }

  validateNumber(number) {
    if (this.winningNumbers.includes(number)) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBER_DUPLICATE);
    }
    if (number < 1 || number > 45) {
      throw new Error(ERROR_MESSAGES.WRONG_WINNING_NUMBER_RANGE);
    }
    if (number % 1 !== 0) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBER_SHOULD_INTEGER);
    }
    if (typeof number !== "number") {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBER_SHOULD_NUMBER_TYPE);
    }
  }

  validateNumberDuplication(numbers) {
    const numberSet = new Set();
    numbers.forEach((number) => {
      numberSet.add(number);
    });
    if (numberSet.size !== 6) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBER_DUPLICATE);
    }
  }
}

module.exports = WinningNumbers;
