const { LOTTO_PRICE, WINNIG_PRIZE } = require('./constants/price');
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
    return ((this.#totalPrize / this.#pay) * 100).toFixed(1);
  }
}

module.exports = Calculator;
