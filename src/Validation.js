const MESSAGE = require("./constant/message");
const { PRICE } = require("./constant");

class Validation {
  constructor() {}

  static validatePayment(paymentString) {
    const payment = Number(paymentString);
    if (isNaN(payment)) {
      throw new Error(MESSAGE.ERROR.PURCHASE_INTEGER);
    }

    if (payment < PRICE) {
      throw new Error(MESSAGE.ERROR.PURCHASE_RANGE);
    }

    if (payment % PRICE !== 0) {
      throw new Error(MESSAGE.ERROR.PURCHASE_UNIT);
    }
  }
}

module.exports = Validation;
