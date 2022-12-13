const Validator = require('./utils/Validator');

class Accounting {
  #money;
  #profitRate;

  setMoney(value) {
    if (Validator.isValidateMoney(value)) this.#money = value;
  }

  getProfitRate() {
    return this.#profitRate;
  }

  calcProfitRate(totalPrizeMoney) {
    const profit = (totalPrizeMoney / this.#money) * 100;
    this.#profitRate = parseFloat(Math.round(profit * 100) / 100).toFixed(1);
  }
}

module.exports = Accounting;
