const DataChecker = require('./DataChecker');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    DataChecker.isValidSixNumbers(numbers);
  }

  calculateResult() {}

  printResult() {}
}

module.exports = Lotto;
