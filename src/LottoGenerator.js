const MissionUtils = require("@woowacourse/mission-utils");
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
      throw new Error("[ERROR] 숫자를 입력해 주세요.");
    } else if (payment < 1000) {
      throw new Error("[ERROR] 돈이 부족합니다.");
    } else if (payment % this.#PRICE !== 0) {
      throw new Error("[ERROR] 1000으로 나누어 떨어지지 않습니다.");
    }
  }
}

module.exports = LottoGenerator;
