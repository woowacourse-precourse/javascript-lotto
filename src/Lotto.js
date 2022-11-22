const { Console } = require('@woowacourse/mission-utils');
const { ERROR_MESSAGE } = require('./Constants.js');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_LENGTH);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_DUPLICATE);
    }
    if (numbers.map(Number).includes(NaN)) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT_NOT_NUM);
    }
    if (numbers.find(number => number < 1 || number > 45)) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_RANGE);
    }
  }

  print() {
    Console.print(`[${this.#numbers.sort((a, b) => a - b).join(', ')}]`);
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
