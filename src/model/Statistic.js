const { RULE } = require('../utils/constants');

class Statistic {
  #counts;

  constructor() {
    this.#counts = {
      [RULE.FIRST.RANK]: 0,
      [RULE.SECOND.RANK]: 0,
      [RULE.THIRD.RANK]: 0,
      [RULE.FOURTH.RANK]: 0,
      [RULE.FIFTH.RANK]: 0,
      [RULE.NOPRIZE.RANK]: 0,
    };
  }

  get counts() {
    return JSON.parse(JSON.stringify(this.#counts));
  }

  get revenue() {
    const firstRevenue = this.#counts[RULE.FIRST.RANK] * RULE.FIRST.WINNING_AMOUNT;
    const secondRevenue = this.#counts[RULE.SECOND.RANK] * RULE.SECOND.WINNING_AMOUNT;
    const thirdRevenue = this.#counts[RULE.THIRD.RANK] * RULE.THIRD.WINNING_AMOUNT;
    const fourthRevenue = this.#counts[RULE.FOURTH.RANK] * RULE.FOURTH.WINNING_AMOUNT;
    const fifthRevenue = this.#counts[RULE.FIFTH.RANK] * RULE.FIFTH.WINNING_AMOUNT;
    return firstRevenue + secondRevenue + thirdRevenue + fourthRevenue + fifthRevenue;
  }

  putInCounts(winningLotto, bonusNumber, publishedLotto) {
    const judgeResult = this.judgeLotto(winningLotto, bonusNumber, publishedLotto);
    const rank = this.judgeRank(judgeResult);
    this.increaseRankCount(rank);
  }

  judgeLotto(winningLotto, bonusNumber, publishedLotto) {
    return publishedLotto.reduce((judgeResult, number) => {
      if (winningLotto.includes(number)) {
        judgeResult.numberOfSame += 1;
      }

      if (bonusNumber === number) {
        judgeResult.isBonusNumberSame = true;
      }

      return judgeResult;
    }, {
      numberOfSame: 0,
      isBonusNumberSame: false,
    });
  }

  judgeRank({ numberOfSame, isBonusNumberSame }) {
    if (numberOfSame === RULE.FIRST.NUMBER_OF_SAME) return RULE.FIRST.RANK;
    if (numberOfSame === RULE.SECOND.NUMBER_OF_SAME && isBonusNumberSame) return RULE.SECOND.RANK;
    if (numberOfSame === RULE.THIRD.NUMBER_OF_SAME) return RULE.THIRD.RANK;
    if (numberOfSame === RULE.FOURTH.NUMBER_OF_SAME) return RULE.FOURTH.RANK;
    if (numberOfSame === RULE.FIFTH.NUMBER_OF_SAME) return RULE.FIFTH.RANK;
    return RULE.NOPRIZE.RANK;
  }

  increaseRankCount(rank) {
    this.#counts[rank] += 1;
  }
}

module.exports = Statistic;
