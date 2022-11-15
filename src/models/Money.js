const { PRICE } = require('../constants/Lotto');
const { ERROR_MESSAGES } = require('../constants/index');

class Money {
  #money;

  constructor(number) {
    this.#validateMoney(number);
    this.#money = number;
  }

  get inputMoney() {
    return this.#money;
  }

  #validateMoney(money) {
    if (!money) {
      throw new Error(ERROR_MESSAGES.NOT_INPUT_MONEY);
    }
    if (money % PRICE !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_MONEY_UNIT);
    }
  }
}

module.exports = Money;
