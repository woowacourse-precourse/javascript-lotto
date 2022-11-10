const { RANK } = require('./utils/constants');

class Statistic {
  #stat;

  constructor() {
    this.#stat = {
      [RANK.FIRST]: 0,
      [RANK.SECOND]: 0,
      [RANK.THIRD]: 0,
      [RANK.FOURTH]: 0,
      [RANK.FIFTH]: 0,
      [RANK.NOPRIZE]: 0,
    };
  }

  get stat() {
    return JSON.parse(JSON.stringify(this.#stat));
  }

  putInStat(winningLotto, bonusNumber, publishedLotto) {
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
    if (numberOfSame === 6) return RANK.FIRST;
    if (numberOfSame === 5 && isBonusNumberSame) return RANK.SECOND;
    if (numberOfSame === 5) return RANK.THIRD;
    if (numberOfSame === 4) return RANK.FOURTH;
    if (numberOfSame === 3) return RANK.FIFTH;
    return RANK.NOPRIZE;
  }

  increaseRankCount(rank) {
    this.#stat[rank] += 1;
  }
}

module.exports = Statistic;
