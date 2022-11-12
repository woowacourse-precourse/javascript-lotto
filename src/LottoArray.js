class LottoArray {
  constructor(cash) {
    this.amount = this.countAmount(cash);
    this.lottoArray = this.purchaseLotto(this.amount);
  }

  countAmount(cash) {
    const amount = Math.floor(cash / 1000);
    return amount;
  }

  purchaseLotto(amount) {}
}

module.exports = LottoArray;
