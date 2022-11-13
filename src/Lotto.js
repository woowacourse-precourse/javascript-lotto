const Message = require('./Message');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(Message.ERROR_LOTTO_NUMBERS_LENGTH);
    }
    const outOfRange = numbers.some((number) => (
      Number.isNaN(number) || !Number.isInteger(number) || number < 1 || number > 45
    ));
    if (outOfRange) {
      throw new Error(Message.ERROR_LOTTO_NUMBER_RANGE);
    }
    const numberSet = new Set(numbers);
    if (numbers.length !== numberSet.size) {
      throw new Error(Message.ERROR_LOTTO_NUMBER_DUPLICATE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
