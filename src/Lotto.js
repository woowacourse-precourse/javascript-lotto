const Vaildator = require('./Vaildator');
const error = require('./util/error');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!Vaildator.isRightLottoNumbers(numbers)) {
      throw new Error(error.INVALID_LOTTO_LENGTH);
    }
  }

  show() {
    return `[${this.#numbers.join(', ')}]`;
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
