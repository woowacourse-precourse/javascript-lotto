const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor (numbers) {
    this.#numbers = Validator.inputWinNumber(numbers);
  }

  getNumbers () {
    return this.#numbers;
  }
}

module.exports = Lotto;
