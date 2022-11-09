const { RANK } = require('./utils/constants');

class Statistic {
  #stat;

  constructor() {
    this.#stat[RANK.FIRST] = 0;
    this.#stat[RANK.SECOND] = 0;
    this.#stat[RANK.THIRD] = 0;
    this.#stat[RANK.FOURTH] = 0;
    this.#stat[RANK.FIFTH] = 0;
    this.#stat[RANK.NOPRIZE] = 0;
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
}

module.exports = Statistic;
