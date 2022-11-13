const { RULE } = require('../utils/constants');

class Statistic {
  #counts;

  constructor() {
    this.#counts = {
      [RULE.FIRST.TYPE]: 0,
      [RULE.SECOND.TYPE]: 0,
      [RULE.THIRD.TYPE]: 0,
      [RULE.FOURTH.TYPE]: 0,
      [RULE.FIFTH.TYPE]: 0,
      [RULE.NOPRIZE.TYPE]: 0,
    };
  }

  get counts() {
    return JSON.parse(JSON.stringify(this.#counts));
  }

  get revenue() {
    return Object.values(RULE)
      .reduce((acc, ranking) => acc + this.#counts[ranking.TYPE] * ranking.PRIZE_MONEY, 0);
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
    if (numberOfSame === RULE.FIRST.NUMBER_OF_SAME) return RULE.FIRST.TYPE;
    if (numberOfSame === RULE.SECOND.NUMBER_OF_SAME && isBonusNumberSame) return RULE.SECOND.TYPE;
    if (numberOfSame === RULE.THIRD.NUMBER_OF_SAME) return RULE.THIRD.TYPE;
    if (numberOfSame === RULE.FOURTH.NUMBER_OF_SAME) return RULE.FOURTH.TYPE;
    if (numberOfSame === RULE.FIFTH.NUMBER_OF_SAME) return RULE.FIFTH.TYPE;
    return RULE.NOPRIZE.TYPE;
  }

  increaseRankCount(rank) {
    this.#counts[rank] += 1;
  }
}

module.exports = Statistic;
