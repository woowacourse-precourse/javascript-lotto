const { PRICE_OF_LOTTO } = require('./utils/constants');

class Deposit {
  #amount;

  constructor(amount) {
    this.validate(amount);
    this.#amount = amount;
  }

  validate(amount) {
    if (amount % PRICE_OF_LOTTO) {
      throw new Error('[ERROR] 로또 구입 금액은 1000원 단위만 가능합니다.');
    }
  }

  getQuantity() {
    return this.#amount / PRICE_OF_LOTTO;
  }
}

module.exports = Deposit;
