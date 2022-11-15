class AbstractLottoWinning {
  lottoNumberCount;
  bonusNumberCount;
  winningMoney;
  printer;

  constructor(lottoResults) {
    this.lottoResults = lottoResults;
  }

  getResult() {
    return this.printer
      .setLottoNumberCount(String(this.lottoNumberCount.getLottoNumberCount()))
      .setWinningMoney(this.winningMoney.addSeperator())
      .setMatchedLottoCount(String(this.count()))
      .print();
  }

  getWinningMoney() {
    return this.winningMoney.multiply(this.count());
  }

  count() {
    return this.lottoResults.filter(this.isSatisfied.bind(this)).length;
  }

  isSatisfied(lottoResult) {
    return lottoResult.isWinning(this.lottoNumberCount, this.bonusNumberCount);
  }
}

module.exports = AbstractLottoWinning;
