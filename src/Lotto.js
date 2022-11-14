const {
  makeErrorMsg,
  invalidNumber,
  invalidInputNum,
  invalidDuplication,
  invalidRange,
} = require('./utils');
const { ERROR_MESSAGE, COUNT } = require('./constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validate(numbers);
    this.#numbers = numbers;
  }

  static #validate(numbers) {
    if (invalidNumber(numbers)) {
      throw new Error(makeErrorMsg(ERROR_MESSAGE.NUMBER));
    }

    if (invalidInputNum(numbers, COUNT.LOTTO_NUMBER)) {
      throw new Error(makeErrorMsg(ERROR_MESSAGE.LOTTO_LENGTH));
    }

    if (invalidDuplication(numbers, COUNT.LOTTO_NUMBER)) {
      throw new Error(makeErrorMsg(ERROR_MESSAGE.DUPLICATION));
    }

    if (
      invalidRange(numbers, [COUNT.MIN_LOTTO_NUMBER, COUNT.MAX_LOTTO_NUMBER])
    ) {
      throw new Error(makeErrorMsg(ERROR_MESSAGE.RANGE));
    }
  }

  getQrCode() {
    this.#numbers.sort((a, b) => a - b);
    return this.#numbers;
  }
}

module.exports = Lotto;
