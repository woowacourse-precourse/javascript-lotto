const { Console } = require("@woowacourse/mission-utils");
const LOTTO = require("./constants/constants");
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
    if (!this.isChange(payment)) throw new Error(MESSAGE.ERROR.CHANGE_MUST_BE_ZERO);
  }

  isNotANumber(number) {
    return isNaN(Number(number));
  }

  isChange(number) {
    return number % LOTTO.PRICE === 0;
  }
}

module.exports = LottoMachine;
