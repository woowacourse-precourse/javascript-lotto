const { Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./constants/message");

class LottoMachine {
  #payment;

  getPayment() {
    Console.readLine(MESSAGE.REQUEST.PAYMENT, (payment) => {
      this.validatePayment(payment);

      this.#payment = payment;
    });
  }

  validatePayment(payment) {
    if (this.isNotANumber(payment)) throw new Error(MESSAGE.ERROR.PAYMENT_MUST_BE_NUMBER);
  }

  isNotANumber(number) {
    return isNaN(Number(number));
  }
}

module.exports = LottoMachine;
