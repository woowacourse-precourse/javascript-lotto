const {
  LOTTO_COUNT_ERROR,
  LOTTO_DUPLICATE_ERROR
} = require('./constants/errors/lotto');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.winningCount = 0;
    this.bonusCount = 0;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_COUNT_ERROR);
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error(LOTTO_DUPLICATE_ERROR);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  plusWinningCount() {
    this.winningCount += 1;
  }

  plusBonusCount() {
    this.bonusCount += 1;
  }
}

module.exports = Lotto;
