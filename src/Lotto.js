const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
    this.#numbers = numbers;
  }

  static validate(numbers) {
    new Validator().isValidLotto(numbers);
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
