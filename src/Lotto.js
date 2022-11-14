const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    const validator = new Validator();

    validator.validateLotto(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
