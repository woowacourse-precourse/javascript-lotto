class Statistic {
  #stat;

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
}

module.exports = Statistic;
