const { ERROR } = require("./Constants");

class LottoPayment {
  lottoPayment;
  lottoCount;

  constructor(payment) {
    this.getLottoPayment(payment);
    this.lottoCount = this.getLottoCount();
  }

  validate(payment) {
    if (payment % 1000 !== 0) {
      throw new Error(ERROR.PAYMENT_UNIT);
    }
    if (isNaN(payment)) throw new Error(ERROR.PAYMENT_TYPE);
  }

  getLottoPayment(input) {
    this.validate(input);
    this.lottoPayment = input;
  }

  getLottoCount() {
    return this.lottoPayment / 1000;
  }
}

module.exports = LottoPayment;