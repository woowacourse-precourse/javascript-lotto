const Validation = require('./components/Validation');

class Lotto {
  #numbers;

  constructor(numbers) {
    Validation.validateLotto(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#sortNumbers(this.#numbers);
  }

  #sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

module.exports = Lotto;
