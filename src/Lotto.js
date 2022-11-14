const {
  ERROR,
  LOTTO_NUMBERS_LENGTH,
  MIN_LOTTO_NUMBER,
  MAX_LOTTO_NUMBER,
} = require('./utils/constants.js');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = this.sortNumbersInAscendingOrder(numbers);
  }

  validate(numbers) {
    if (numbers.includes(NaN)) {
      throw ERROR.MUST_INPUT_ONLY_NUMBER;
    }
    if (numbers.length !== LOTTO_NUMBERS_LENGTH) {
      throw ERROR.MUST_HAVE_SIX_NUMBER;
    }
    if (
      numbers.some((num) => num < MIN_LOTTO_NUMBER || num > MAX_LOTTO_NUMBER)
    ) {
      throw ERROR.MUST_BE_WITHIN_RANGE;
    }
    if (numbers.length !== new Set(numbers).size) {
      throw ERROR.NOT_ALLOW_REPEATED_NUMBER;
    }
  }

  sortNumbersInAscendingOrder(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
