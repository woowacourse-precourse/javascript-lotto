const { ERROR } = require('./lib/constants');

class Purchase {
  #money;

  constructor(money) {
    this.validate(money);
    this.#money = Number(money);
  }

  validate(money) {
    const numberMoney = Number(money);

    if (isNaN(numberMoney)) {
      throw new Error(ERROR.PURCHASE_MONEY_NAN);
    }

    if (numberMoney % 1000 !== 0) {
      throw new Error(ERROR.PURCHASE_MONEY_NOT_DIVISIBLE);
    }

    if (numberMoney < 1000) {
      throw new Error(ERROR.PURCHASE_MONEY_LESS_STANDARD);
    }
  }

  getNumberTypeMoney() {
    return this.#money;
  }

  getPurchaseAccount() {
    return this.#money / 1000;
  }
}

module.exports = Purchase;
