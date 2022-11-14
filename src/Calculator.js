class Calculator {
  #moneyCount;
  constructor() {
    this.#moneyCount;
  }
  ofPurchaseLottoCount(moneyValue) {
    return Number((this.#moneyCount = moneyValue / 1000));
  }
}

module.exports = Calculator;