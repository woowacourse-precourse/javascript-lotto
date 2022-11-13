const { Random } = require("@woowacourse/mission-utils");
const { LOTTO_SPEC, ERROR_MESSAGES } = require("../constants");

class LottoMachine {
  buy(money) {
    this.validate(money);
    const amount = Math.floor(money / LOTTO_SPEC.MONEY_UNIT);
    return Array.from({ length: amount }, this.generate);
  }

  generate() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      LOTTO_SPEC.MIN_NUMBER,
      LOTTO_SPEC.MAX_NUMBER,
      LOTTO_SPEC.LENGTH,
    );
    return randomNumbers.sort((numA, numB) => numA - numB);
  }

  validate(money) {
    this.isValidRange(money);
    this.isValidUnit(money);
  }

  isValidRange(money) {
    if (money < LOTTO_SPEC.MONEY_UNIT) {
      throw new Error(ERROR_MESSAGES.MONEY_RANGE);
    }
  }

  isValidUnit(money) {
    const remainder = money % LOTTO_SPEC.MONEY_UNIT;
    if (remainder !== 0) {
      throw new Error(ERROR_MESSAGES.MONEY_UNIT);
    }
  }
}

module.exports = LottoMachine;
