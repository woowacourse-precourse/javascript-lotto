const { isOutOfRange, hasDuplicate, generateRandomNumbers } = require('../src/utils/utils');
const {
  InvalidLottoNumberRangeError,
  DuplicatedLottoNumberError,
  InvalidLottoNumberCountError,
} = require('./lib/errors');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new InvalidLottoNumberCountError();
    }

    if (numbers.some(isOutOfRange)) {
      throw new InvalidLottoNumberRangeError();
    }

    if (hasDuplicate(numbers)) {
      throw new DuplicatedLottoNumberError();
    }
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  static createAutoLotto() {
    return new this(generateRandomNumbers());
  }
}

module.exports = Lotto;
