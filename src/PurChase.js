const { LOTTO_INFO, ERROR_MESSAGES } = require("./Constants");

class PurChase {
  #payment;

  constructor(payment) {
    this.validate(payment);
    this.#payment = payment;
  }

  validate(payment) {
    if (Number(payment) < LOTTO_INFO.LOTTO_PRICE) {
      throw new Error(ERROR_MESSAGES.INVALID_COST_MIN);
    }

    if (Number.isNaN(Number(payment))) {
      throw new Error(ERROR_MESSAGES.INVALID_COST_TYPE);
    }

    if (Number(payment) % LOTTO_INFO.LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_COST_UNIT);
    }
  }

  getPayment() {
    return Number(this.#payment);
  }
}
module.exports = PurChase;
