class AbstractLottoWinning {
  lottoNumberCount;
  winningMoney;
  printer;

  constructor(lottoResults) {
    this.lottoResults = lottoResults;
  }

  printCount() {
    this.printer
      .setLottoNumberCount(String(this.lottoNumberCount.getLottoNumberCount()))
      .setWinningMoney(this.winningMoney.addSeperator())
      .setMatchedLottoCount(String(this.count()))
      .print();
  }

  getTotalWinningMoney() {
    return this.winningMoney.multiply(this.count());
  }

  count() {
    return this.lottoResults.filter(this.isSatisfied.bind(this)).length;
  }

  isSatisfied(lottoResult) {}
}

module.exports = AbstractLottoWinning;
