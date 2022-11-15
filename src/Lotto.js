const message = require('./Message');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(message.LOTTO_COUNT_ERROR);
    }
    this.validate_overlap(numbers);
  }

  validate_overlap(numbers) {
    const NUMBERS = new Set(numbers);
    if (NUMBERS.size != numbers.length) {
      throw new Error(message.LOTTO_OVERLAP_ERROR);
    }
  }

  order_lotto() {
    let NUMBERS = this.#numbers;
    NUMBERS = NUMBERS.sort((x, y) => x - y);
    return NUMBERS;
  }
}

module.exports = Lotto;
