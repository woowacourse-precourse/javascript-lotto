const { ERROR } = require('../src/lib/constants/error');
const { LOTTO } = require('../src/lib/constants/lotto');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    switch (true) {
      case this.isNotLottoLength(numbers):
        throw new Error(ERROR.LOTTO.NOT_LOTTO_LENGTH);
      case this.hasDuplicate(numbers):
        throw new Error(ERROR.LOTTO.DUPLICATE);
      case this.hasOutOfBoundNumber(numbers):
        throw new Error(ERROR.LOTTO.OUT_OF_BOUND);
    }
  }

  isNotLottoLength(numbers) {
    return numbers.length !== LOTTO.NUMBER_COUNT;
  }

  hasDuplicate(numbers) {
    return numbers.length !== new Set(numbers).size;
  }

  hasOutOfBoundNumber(numbers) {
    return numbers.some(
      number =>
        number < LOTTO.MIN_NUMBER_LIMIT || number > LOTTO.MAX_NUMBER_LIMIT,
    );
  }

  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
