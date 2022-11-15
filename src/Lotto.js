const ErrorChecker = require("./ErrorChecker");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  validate(numbers) {
    ErrorChecker.checkSixElementArray(numbers);
    ErrorChecker.checkDuplicatedElement(numbers, 6);
  }
}

module.exports = Lotto;
