const Validate = require('./Validate');

class Lotto {
  #numbers;

  constructor(numbers) {
    Validate.lotto(numbers);
    this.#numbers = numbers;
  }

  show() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

module.exports = Lotto;
