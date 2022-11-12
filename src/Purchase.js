const { ERROR, VALUE } = require('./lib/constants');

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

    if (numberMoney % VALUE.LOTTO_PRICE !== 0) {
      throw new Error(ERROR.PURCHASE_MONEY_NOT_DIVISIBLE);
    }

    if (numberMoney < VALUE.LOTTO_PRICE) {
      throw new Error(ERROR.PURCHASE_MONEY_LESS_STANDARD);
    }
  }

  getNumberTypeMoney() {
    return this.#money;
  }

  getPurchaseAccount() {
    return this.#money / VALUE.LOTTO_PRICE;
  }
}

module.exports = Purchase;
