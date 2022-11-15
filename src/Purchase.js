const { ERROR, VALUE } = require('./lib/constants');
const {
  checkMoneyIsNan,
  checkMoneyDivision,
  checkMoneyLessStandard,
} = require('./lib/utils/purchaseUtils');

class Purchase {
  #money;

  constructor(money) {
    this.validate(money);
    this.#money = Number(money);
  }

  validate(money) {
    if (checkMoneyIsNan(money)) {
      throw new Error(ERROR.PURCHASE_MONEY_NAN);
    }

    if (checkMoneyDivision(money)) {
      throw new Error(ERROR.PURCHASE_MONEY_NOT_DIVISIBLE);
    }

    if (checkMoneyLessStandard(money)) {
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
