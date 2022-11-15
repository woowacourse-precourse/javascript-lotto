const IO = require('./IO');
const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    IO.print(`[${this.#numbers.join(', ')}]`);
  }

  validate(numbers) {
    Validator.validateNumbers(numbers);
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
