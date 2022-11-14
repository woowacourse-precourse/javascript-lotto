const { ERROR_MESSAGE } = require('../constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.sortLotto(numbers);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.lottoCountOnlySix);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.numberWithoutDuplicate);
    }

    if (!numbers.every((number) => number >= 1 && number <= 45)) {
      throw new Error(ERROR_MESSAGE.lottoRange);
    }
  }

  sortLotto(numbers) {
    numbers.sort((a, b) => {
      return a - b;
    });
    return numbers;
  }
}

module.exports = Lotto;
