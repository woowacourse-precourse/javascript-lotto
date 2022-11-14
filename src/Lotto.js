const { ERROR_MSG, NEW_LINE } = require('./Constant');
const IO = require('./IO');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    IO.print(`[${this.#numbers.join(', ')}]`);
  }

  validate(numbers) {
    IO.validateNumbers(numbers);
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
