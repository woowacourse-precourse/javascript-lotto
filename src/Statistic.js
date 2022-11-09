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

  judgeRank({ numberOfSame, isBonusNumberSame }) {
    if (numberOfSame === 6) return '1ST';
    if (numberOfSame === 5 && isBonusNumberSame) return '2ND';
    if (numberOfSame === 5) return '3RD';
    if (numberOfSame === 4) return '4TH';
    if (numberOfSame === 3) return '5TH';
    return 'NOPRIZE';
  }
}

module.exports = Statistic;
