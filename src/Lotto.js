const { ERROR } = require('./constants/message');
const SETTING = require('./constants/setting');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== SETTING.LOTTO_COUNT) {
      throw new Error(ERROR.LOTTO_COUNT);
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR.NO_DUPLICATE);
    }

    if (Math.min(...numbers) < SETTING.MIN_NUMBER || Math.max(...numbers) > SETTING.MAX_NUMBER) {
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
