const { ERROR } = require('./utiles/Constant');
class Shop {
  #money;

  constructor(money) {
    this.validate(money);
    this.#money = money;
  }

  validate(money) {
    if (isNaN(money)) throw new Error(`${ERROR.PREFIX} ${ERROR.NUMBER_ONLY}`);
    if (this.#invalidMonetaryUnit(money))
      throw new Error(`${ERROR.PREFIX} ${ERROR.MONETARY_UNIT}`);
    return true;
  }

  #invalidMonetaryUnit(money) {
    return money % 1000;
  }
}

const shop = new Shop(1500);

module.exports = Shop;
