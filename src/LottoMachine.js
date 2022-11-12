const { Console } = require("@woowacourse/mission-utils");
const MESSAGE = require("./constants/message");

class LottoMachine {
  #payment;

  getPayment() {
    Console.readLine(MESSAGE.REQUEST.PAYMENT, (payment) => {
      this.#payment = payment;
    });
  }
}

module.exports = LottoMachine;
