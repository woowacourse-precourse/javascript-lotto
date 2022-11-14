const { LOTTO_PRICE, WINNIG_PRIZE } = require('./constants/number');
const Validator = require('./Validator');

class Calculator {
  #pay;
  #totalPrize;

  constructor(pay) {
    Validator.checkPay(pay);
    this.#pay = pay;
    this.#totalPrize = 0;
  }

  calcBuyCount() {
    return Math.ceil(this.#pay / LOTTO_PRICE);
  }

  addPrize(ranking) {
    this.#totalPrize += WINNIG_PRIZE[ranking];
  }

  calcProfitRate() {
    const profit = this.#totalPrize / this.#pay;
    return (profit * 100).toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

module.exports = Calculator;
