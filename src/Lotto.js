const { ERROR } = require('./constants/message');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO_COUNT);
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR.NO_DUPLICATE);
    }

    if (Math.min(...numbers) < 1 || Math.max(...numbers) > 45) {
      throw new Error(ERROR.NUMBER_IN_RANGE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getMatchCount(winNumbers) {
    const winNumberSet = new Set(winNumbers);
    const matchNumbers = this.#numbers.filter((number) => winNumberSet.has(number));

    return matchNumbers.length;
  }

  hasWinBonus(winBonus) {
    return this.#numbers.includes(winBonus);
  }
}

module.exports = Lotto;
