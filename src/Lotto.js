const { LOTTO, ERROR_MESSAGE } = require('./constant/constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  getValue() {
    return this.#numbers;
  }

  validate(numbers) {
    if (numbers.length !== numbers.filter((number) => number === +number).length) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
    if (numbers.length !== LOTTO.INPUT_COUNT) {
      throw new Error(ERROR_MESSAGE.LOTTO.NUMBER_COUNT);
    }
    if (numbers.some((number, index, array) => array.indexOf(number) !== index)) {
      throw new Error(ERROR_MESSAGE.LOTTO.NUMBER_DUPLICATED);
    }
    if (
      numbers.length !==
      numbers.filter((number) => number >= LOTTO.MIN_NUMBER && number <= LOTTO.MAX_NUMBER).length
    ) {
      throw new Error(ERROR_MESSAGE.LOTTO.NUMBER_RANGE);
    }
  }
}

module.exports = Lotto;
