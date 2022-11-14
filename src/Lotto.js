const { validateTargetNumber } = require('./utils/validate');

class Lotto {
  #numbers;

  constructor(numbers) {
    validateTargetNumber(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
