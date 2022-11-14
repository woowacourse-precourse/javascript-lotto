const {ERROR} = require("../Constants")

class LottoPayment {
  lottoPayment;
  lottoCount;

  constructor(payment) {
    this.validate(payment);
    this.setLottoPayment(payment);
    this.setLottoCount();
  }

  validate(payment) {
    if (payment % 1000 !== 0) {
      throw new Error(ERROR.PAYMENT_UNIT);
    }
    if (isNaN(payment)) throw new Error(ERROR.PAYMENT_TYPE);
  }

  setLottoPayment(input) {
    this.lottoPayment = input;
  }

  setLottoCount() {
    this.lottoCount = this.lottoPayment / 1000;
  }
}

module.exports = LottoPayment;