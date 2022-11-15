const { PRICE } = require('./settings');

class Purchase {
  static countLotto(money) {
    return money / PRICE;
  }
}

module.exports = Purchase;
