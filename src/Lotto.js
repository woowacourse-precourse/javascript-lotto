const Validator = require('./validator');

class Lotto {
  #numbers;

  validator = new Validator();

  constructor(numbers) {
    this.validator.validateLotto(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
