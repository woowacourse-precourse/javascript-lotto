const { ERROR, NUMBER } = require('../data/constants');
const { checkMatchNum, checkBonus } = require('../utils/utils');

const {
  isNotUnique,
  isMatchLength,
  isAllExceedRange,
} = require('../utils/validate');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!isMatchLength(numbers, NUMBER.LENGTH_LOTTO)) {
      throw new Error(ERROR.LENGTH);
    }
    if (!isNotUnique(numbers)) throw new Error(ERROR.NOT_UNIQUE);
    if (!isAllExceedRange(numbers, NUMBER.START_LOTTO, NUMBER.END_LOTTO))
      throw new Error(ERROR.RANGE);
  }

  getLottoNum() {
    return this.#numbers;
  }

  checkWinning(winningNum, bonusNum) {
    let result = checkMatchNum(this.#numbers, winningNum);
    if (result === 5 && checkBonus(this.#numbers, bonusNum)) {
      return 'bonus';
    }
    return result;
  }
}

module.exports = Lotto;
