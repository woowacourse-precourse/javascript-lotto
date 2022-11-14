const makeErrorMsg = require('./utils');
const { ERROR_MSG, NUM } = require('./constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validate(numbers);
    this.#numbers = numbers;
  }

  static #validate(numbers) {
    if (numbers.filter((number) => Number.isNaN(number)).length > 0) {
      throw new Error(makeErrorMsg(ERROR_MSG.LOTTO.NUMBER));
    }

    if (numbers.length !== NUM.LOTTO) {
      throw new Error(makeErrorMsg(ERROR_MSG.LOTTO.LENGTH));
    }

    if (new Set(numbers).size !== NUM.LOTTO) {
      throw new Error(makeErrorMsg(ERROR_MSG.LOTTO.DUPLICATION));
    }
  }

  getQrCode() {
    this.#numbers.sort((a, b) => a - b);
    return this.#numbers;
  }
}

module.exports = Lotto;
