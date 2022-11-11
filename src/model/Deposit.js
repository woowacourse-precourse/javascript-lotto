const { PRICE_OF_LOTTO } = require('../utils/constants');

class Deposit {
  #amount;

  constructor(amount) {
    this.validate(amount);
    this.#amount = amount;
  }

  get amount() {
    return this.#amount;
  }

  get quantity() {
    return this.#amount / PRICE_OF_LOTTO;
  }

  validate(amount) {
    if (Number.isNaN(amount)) {
      throw new Error('[ERROR] 로또 구입 금액은 숫자만 입력 가능합니다.');
    }

    if (amount % PRICE_OF_LOTTO) {
      throw new Error('[ERROR] 로또 구입 금액은 1000원 단위만 가능합니다.');
    }
  }
}

module.exports = Deposit;
