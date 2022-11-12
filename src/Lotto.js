const { Messages } = require('./constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(Messages.ERROR_LOTTO_NUMBERS_LENGTH);
    }
    const isOutOfRange = numbers.some((number) => number < 1 || number > 45);
    if (isOutOfRange) {
      throw new Error(Messages.ERROR_LOTTO_NUMBER_RANGE);
    }
    const numberSet = new Set(numbers);
    if (numbers.length !== numberSet.size) {
      throw new Error(Messages.ERROR_LOTTO_NUMBER_DUPLICATE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
