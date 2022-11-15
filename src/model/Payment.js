const { LOTTO, ERROR_MESSAGE } = require("../constants");

class Payment {
  #payment;

  constructor(payment) {
    this.validate(payment);
    this.#payment = payment;
    this.getPayment = this.getPayment.bind(this);
  }

  validate(payment) {
    if (!Number.isInteger(Number(payment))) {
      throw new Error(ERROR_MESSAGE.NAN);
    }
    if (payment < LOTTO.PRICE) {
      throw new Error(ERROR_MESSAGE.MIN_PRICE);
    }
    if ((payment % LOTTO.PRICE) !== 0) {
      throw new Error(ERROR_MESSAGE.PRICE_UNIT);
    }
  }

  getPayment() {
    return this.#payment;
  }
}

module.exports = Payment;
