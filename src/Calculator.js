class Calculator {
  constructor() {
    this.amountOfLotto = 0;
  }

  calculateAmountOfLotto(purchaseAmount) {
    this.amountOfLotto = purchaseAmount / 1000;
    return this.amountOfLotto;
  }
}

module.exports = Calculator;
