const { DECIMAL_PLACES } = require('./constant');

class Profit {
  #amount;
  #matchInfo;

  constructor (purchaseInfo) {
    [this.#amount, this.#matchInfo] = purchaseInfo;
  }

  calculateProfit () {
    const rate = this.calculateTotalAmount(this.#matchInfo) / parseInt(this.#amount, 10) * 100;
    return Math.round(rate * DECIMAL_PLACES) / DECIMAL_PLACES;
  }

  calculateTotalAmount (matchInfo) {
    return matchInfo.reduce((amount, { matchCount, matchMoney }) => {
      const plus = amount + (matchCount * parseInt(matchMoney, 10));
      return plus;
    }, 0);
  }
}

module.exports = Profit;
