const { DECIMAL_PLACES } = require('./constant');

class Profit {
  #amount;
  #matchInfo;

  constructor(purchaseInfo) {
    [this.#amount, this.#matchInfo] = purchaseInfo;
  }

  calculateProfit() {
    const profitRate = (this.calculateTotalAmount(this.#matchInfo) / parseInt(this.#amount)) * 100;
    return Math.round(profitRate * DECIMAL_PLACES) / DECIMAL_PLACES;
  }

  calculateTotalAmount(matchInfo) {
    return matchInfo.reduce((amount, { matchCount, matchMoney }) => {
      return amount + matchCount * parseInt(matchMoney);
    }, 0);
  }
}

module.exports = Profit;
