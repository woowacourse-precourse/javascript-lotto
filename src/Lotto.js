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

  checkSameNumber(numbers) {
    return this.#numbers.filter((number) => numbers.includes(number)).length;
  }
}

module.exports = Lotto;
