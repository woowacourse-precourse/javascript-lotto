class AbstractPrinter {
  matchedNumberCount = '';
  winningMoney = '';
  matchedLottoCount = '';

  setLottoNumberCount(matchedNumberCount) {
    this.matchedNumberCount = matchedNumberCount;

    return this;
  }

  setWinningMoney(winningMoney) {
    this.winningMoney = winningMoney;

    return this;
  }

  setMatchedLottoCount(matchedLottoCount) {
    this.matchedLottoCount = matchedLottoCount;

    return this;
  }

  print() {}
}

module.exports = AbstractPrinter;
