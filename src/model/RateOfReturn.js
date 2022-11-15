class RateOfReturn {
  #rateOfReturn;

  constructor(winningLottosQuantity, lottosQuantity) {
    this.winningLottosQuantity = winningLottosQuantity;
    this.lottosQuantity = lottosQuantity;
    this.#rateOfReturn = this.calculateRateOfReturn();
    this.#rateOfReturn = this.addThousandsComma(this.#rateOfReturn);
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

  addThousandsComma(number) {
    return number.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  getRateOfReturn() {
    return this.#rateOfReturn;
  }
}

module.exports = RateOfReturn;
