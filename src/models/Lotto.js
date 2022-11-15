const SixNumbersChecker = require('../services/SixNumbersChecker');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate();
  }

  #validate() {
    SixNumbersChecker.checkSixNumbers(this.#numbers);
  }
}

module.exports = Lotto;
