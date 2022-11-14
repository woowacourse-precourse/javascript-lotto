const MissionUtils = require("@woowacourse/mission-utils");
const { ERROR_MESSAGE } = require("./message");
const { Random } = MissionUtils;

class LottoGenerator {
  #PRICE = 1000;

  constructor(payment) {
    this.payment = payment;
  }

  generate(payment) {
    const count = parseInt(payment) / this.#PRICE;
    const myLotto = [];
    this.validatePayment(payment);
    while (myLotto.length < count) {
      const randomLotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      myLotto.push(randomLotto);
    }
    return myLotto;
  }

  validatePayment(input) {
    const payment = parseInt(input);
    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    } else if (payment < 1000) {
      throw new Error(ERROR_MESSAGE.LESS_MONEY);
    } else if (payment % this.#PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.NOT_DIVIDED);
    }
  }
}

module.exports = LottoGenerator;
