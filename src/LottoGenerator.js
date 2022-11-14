const MissionUtils = require("@woowacourse/mission-utils");

class LottoGenerator {
  LOTTO_PRICE = 1000;

  constructor(payment) {
    this.validate(payment);
    this.numberOfLotto = Number(payment) / LOTTO_PRICE;
  }

  validate(payment) {
    if (isNaN(payment)) {
      throw new Error("[ERROR]");
    }

    if (payment % 1000 !== 0) {
      throw new Error("[ERROR]");
    }
  }
}

module.exports = LottoGenerator;
