const { Console, Random } = require("@woowacourse/mission-utils");
const LOTTO = require("./constants/constants");
const MESSAGE = require("./constants/message");
const Lotto = require("./Lotto");

class LottoMachine {
  #payment;

  getPayment() {
    Console.readLine(MESSAGE.REQUEST.PAYMENT, (payment) => {
      this.validatePayment(payment);

      this.#payment = payment;
    });
  }

  getRandomNumberLottos() {
    const lottos = [];

    while (this.#payment !== 0) {
      const numbers = Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.NUMBER_MAX_LENGTH);
      const lotto = new Lotto(numbers);

      lottos.push(lotto.getNumbers());

      this.#payment -= LOTTO.PRICE;
    }

    return lottos;
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
