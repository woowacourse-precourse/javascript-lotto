const { Random } = require('@woowacourse/mission-utils');
const { validate, areLottoNumbers } = require('./Validator');
const { LOTTO_BASE, LOTTO_RANKINGS } = require('./constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    validate(numbers, areLottoNumbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  static generateTicket() {
    const { MIN_NUMBER, MAX_NUMBER, SIZE } = LOTTO_BASE;
    return new Lotto(
      Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, SIZE),
    );
  }

  getRank(winningNumbers, bonusNumber) {
    const hasBonusNumber = this.#numbers.includes(bonusNumber);
    const matchCount = this.countMatchingNumbers(winningNumbers);
    return Lotto.getComputedRank(matchCount, hasBonusNumber);
  }

  countMatchingNumbers(winningNumbers) {
    return this.#numbers.filter(number => winningNumbers.includes(number))
      .length;
  }

  static getComputedRank(matchCount, hasBonusNumber) {
    switch (matchCount) {
      case 6:
        return LOTTO_RANKINGS.FIRST;
      case 5:
        return hasBonusNumber ? LOTTO_RANKINGS.SECOND : LOTTO_RANKINGS.THIRD;
      case 4:
        return LOTTO_RANKINGS.FOURTH;
      case 3:
        return LOTTO_RANKINGS.FIFTH;
      default:
        return null;
    }
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

module.exports = Lotto;
