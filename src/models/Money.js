const { LOTTO_COST } = require("../utils/Constants");
const { MONEY_ERROR_MESSAGE, NUMBER_ERROR_MESSAGE } = require("../utils/Message");

class Money {
  #money;

  constructor(money) {
    this.validMoney(money);
    this.#money = money;
  }

  get money() {
    return this.#money;
  }

  validMoney(money) {
    this.validFormat(money);
    this.validRange(money);
    this.validMultiple(money);
  }
  
  validFormat(money) {
      const reg = /^[0-9]+$/;
      if (!reg.test(money)) {
        throw new Error(NUMBER_ERROR_MESSAGE.numberFormat);
      }
    }

  validRange(money) {
    if (money <= 0) {
      throw new Error(NUMBER_ERROR_MESSAGE.numberRange);
    }
  }

  validMultiple(money) {
    if (money % LOTTO_COST.cost !== 0) {
      throw new Error(MONEY_ERROR_MESSAGE.moneyMultiple);
    }
  }
}

module.exports = Money;
