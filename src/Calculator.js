const { LOTTO_PRICE, WINNIG_PRIZE } = require('./constants/price');

class Calculator {
  #pay;
  #totalPrize;

  constructor(pay) {
    this.validate(pay);
    this.#pay = pay;
    this.#totalPrize = 0;
  }

  validate(pay) {}

  calcBuyCount() {
    return Math.ceil(this.#pay / LOTTO_PRICE);
  }

  addPrize(ranking) {
    this.#totalPrize += WINNIG_PRIZE[ranking];
  }

  calcProfitRate() {
    return ((this.#totalPrize / this.#pay) * 100).toFixed(1);
  }
}

module.exports = Calculator;
