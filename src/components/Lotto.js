const {
  makeErrorMsg,
  invalidNumber,
  invalidInputNum,
  invalidDuplication,
  invalidRange,
} = require('../utils/index');
const { ERROR_MESSAGE, COUNT } = require('../constants/index');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validate(numbers);
    this.#numbers = numbers;
  }

  static #validate(numbers) {
    const { LOTTO_NUMBER, LOTTO_NUMBER_LENGTH, LOTTO_DUPLICATION, RANGE } =
      ERROR_MESSAGE;

    if (invalidNumber(numbers)) {
      throw new Error(makeErrorMsg(LOTTO_NUMBER));
    }

    if (invalidInputNum(numbers, COUNT.LOTTO_NUMBER)) {
      throw new Error(makeErrorMsg(LOTTO_NUMBER_LENGTH));
    }

    if (invalidDuplication(numbers)) {
      throw new Error(makeErrorMsg(LOTTO_DUPLICATION));
    }

    if (
      invalidRange(numbers, [COUNT.MIN_LOTTO_NUMBER, COUNT.MAX_LOTTO_NUMBER])
    ) {
      throw new Error(makeErrorMsg(RANGE));
    }
  }

  getQrCode() {
    this.#numbers.sort((a, b) => a - b);
    return this.#numbers;
  }
}

module.exports = Lotto;
