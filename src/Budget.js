const { BUDGET_ERROR_MESSAGE, LOTTO_PRICE } = require("./util/Constant");

class Budget {
  #money;
  constructor(input) {
    this.#money = input;
    this.lottoToBuy = 0;
    this.isValidMoney();
  }
  isValidMoney() {
    if (isNaN(this.#money)) {
      throw new Error(BUDGET_ERROR_MESSAGE.NON_NUMBER);
    }
    if (this.#money < 1000) {
      throw new Error(BUDGET_ERROR_MESSAGE.SHORT_OF_MONEY);
    }
    if (this.#money % 1000 !== 0) {
      throw new Error(BUDGET_ERROR_MESSAGE.INDIVISIBLE);
    }
    this.calLottoToBuy();
  }
  calLottoToBuy() {
    this.lottoToBuy = this.#money / LOTTO_PRICE;
  }
}

module.exports = Budget;
