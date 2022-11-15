const { validLottoNumber } = require('./validation');
const { WINNING_AMOUNT } = require('./Constant');
const { getIntersectionList } = require('./utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    validLottoNumber(numbers);
  }

  getWinningDetail(winningNumber, bonusNumber) {
    const isMatchBonus =
      this.#numbers.findIndex((num) => num === bonusNumber) !== -1;

    const matchCount = getIntersectionList(this.#numbers, winningNumber).length;

    const rank = this.#getWinningRank(matchCount, isMatchBonus);
    const money = this.#getWinningAmount(rank);

    return { rank, money };
  }

  #getWinningAmount(rank) {
    return rank !== -1 ? WINNING_AMOUNT[rank] : 0;
  }

  #getWinningRank(matchCount, isMatchBonus) {
    switch (matchCount) {
      case 6:
        return 1;
      case 5:
        return isMatchBonus ? 2 : 3;
      case 4:
        return 4;
      case 3:
        return 5;
      default:
        return -1;
    }
  }

  print() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

module.exports = Lotto;
