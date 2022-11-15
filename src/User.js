const { LOTTO_PRICE, ERROR_MESSAGES } = require("./constants");

class User {
  #money;

  constructor() {
    this.#money = 0;
  }

  changeMoney(amount) {
    if (!this.validateMoney(amount)) {
      throw new Error(ERROR_MESSAGES.WRONG_UNIT_OF_MONEY);
    }
    this.#money += Number(amount);
  }

  validateMoney(amount) {
    return !(amount % LOTTO_PRICE !== 0 || amount < LOTTO_PRICE);
  }

  getMoney() {
    return this.#money;
  }
}

module.exports = User;
