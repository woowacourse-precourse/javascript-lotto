const { checkValidWinningNumberInput } = require('./util/CheckValidInput.js');
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    checkValidWinningNumberInput(numbers);
  }
}

module.exports = Lotto;
