class RateOfReturnCalculator {
  constructor(winningLottosQuantity, lottosQuantity) {
    this.winningLottosQuantity = winningLottosQuantity;
    this.lottosQuantity = lottosQuantity;
    this.rateOfReturn = this.calculateRateOfReturn();
  }

  calculateRateOfReturn() {
    let returns = [null, 2000000000, 30000000, 1500000, 50000, 5000];

    let totalProfit = 0;
    returns.forEach((profit, index) => {
      totalProfit += profit * this.winningLottosQuantity[index];
    });

    let rateOfReturn = (totalProfit / (this.lottosQuantity * 1000)) * 100;
    return rateOfReturn.toFixed(1);
  }

  getRateOfReturn() {
    return this.rateOfReturn;
  }
}

module.exports = RateOfReturnCalculator;
