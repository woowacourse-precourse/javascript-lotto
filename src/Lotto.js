const { ERROR_MESSAGE } = require('./constant/constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO.NUMBER_COUNT);
    }
    if (numbers.some((number, index, array) => array.indexOf(number) !== index)) {
      throw new Error(ERROR_MESSAGE.LOTTO.NUMBER_DUPLICATED);
    }
  }
}

module.exports = Lotto;
