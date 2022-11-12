const { LOTTO, ERROR, WINNING_CRITERIA } = require('./constructor.js');
const { throwErrorMessage, checkIsNumber, checkIsOutOfRange } = require('./utils.js');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.map(number => parseInt(number));
  }

  validate(numbers) {
    if (numbers.length !== LOTTO.LENGTH) {
      throwErrorMessage(ERROR.OUT_OF_LOTTO_LENGTH);
    }

    const unduplicatedNums = new Set(numbers);
    if (unduplicatedNums.size != numbers.length) {
      throwErrorMessage(ERROR.DUPLICATE_NUMBERS);
    }

    numbers.map(number => checkIsNumber(number));
    numbers.map(number => checkIsOutOfRange(parseInt(number)));
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }

  isWin(criteria, count, bonusCount) {
    return criteria.equals === count && criteria.bonus === bonusCount;
  }

  checkRank(winnigNumbers, bonusNumber) {
    let count = 0;
    let bonus = this.#numbers.includes(bonusNumber) ? 1 : 0;
    
    for (const number of winnigNumbers) {
      if (this.#numbers.includes(number)) count += 1;
    }

    for (let key in WINNING_CRITERIA) {
      const criteria = WINNING_CRITERIA[key];
      if (this.isWin(criteria, count, bonus)) return criteria.rank;
    }
    return 0;
  }

  getNumbersToArrayFormat() {
    return `[${this.#numbers.join(', ')}]`
  }
}

module.exports = Lotto;
