const {
  isCorrectLength,
  isOnlyNumber,
  isDuplicate,
  isOverFlow,
} = require("./Validation");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateWinningNumber(numbers);
    this.#numbers = numbers;
  }

  validateWinningNumber(numbers) {
    isCorrectLength(numbers);
    numbers.forEach((number) => {
      isOnlyNumber(number);
    });
    isDuplicate(numbers);
    isOverFlow(numbers);
  }

  validateBonusNumber(number) {
    isOnlyNumber([number]);
    isOverFlow([number]);
  }

  setBonusNumber(number) {
    this.validateBonusNumber(number);
    this.#numbers.push(number);
    isDuplicate(this.#numbers);
  }
  getNumber() {
    return this.#numbers;
  }
}

module.exports = { Lotto };
