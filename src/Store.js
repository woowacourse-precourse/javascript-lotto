const { ERROR } = require('./utils/constants');
class Store {
  #money;

  constructor(money) {
    this.validate(money);
  }

  validate(money) {
    if (/[^0-9]/.test(money)) {
      throw new Error(ERROR.NOT_A_NUMBER);
    }
    if (money % 1000) {
      throw new Error(ERROR.UNIT_OF_THOUSAND);
    }
  }
}

module.exports = Store;
