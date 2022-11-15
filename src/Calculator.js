class Calculator {
  constructor() {
    this.amountOfLotto = 0;
    this.rateOfReturn = 0;
  }

  calculateAmountOfLotto(purchaseAmount) {
    this.amountOfLotto = purchaseAmount / 1000;
    return this.amountOfLotto;
  }

  calculateRateOfReturn(purchaseAmount, returns) {
    this.rateOfReturn = (returns / purchaseAmount) * 100;
    return this.rateOfReturn;
  }
}

module.exports = Calculator;
