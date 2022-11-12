class LottoArray {
  constructor(cash) {
    this.amount = this.countAmount(cash);
    this.lottoArray = this.purchaseLotto(this.amount);
  }

  countAmount(cash) {}

  purchaseLotto(amount) {}
}

module.exports = LottoArray;
