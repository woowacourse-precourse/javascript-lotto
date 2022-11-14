const {
  isCorrectLength,
  isOnlyNumber,
  isDuplicate,
  isOverFlow,
} = require("./Validation");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    isCorrectLength(numbers);
    isOnlyNumber(numbers);
    isDuplicate(numbers);
    isOverFlow(numbers);
  }
}

module.exports = Lotto;
