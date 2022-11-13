const LottoGenerator = require("./LottoGenerator");
const { LOTTO_SPEC } = require("../constants");

const ERRORS = Object.freeze({
  RANGE: "[ERROR] 1000원 이상 입력해주세요.",
  NOT_DIVIDE: "[ERROR] 1000원 단위로 입력해주세요.",
});

class LottoMachine {
  buy(money) {
    this.validate(money);
    const amount = Math.floor(money / LOTTO_SPEC.MONEY_UNIT);
    return Array.from({ length: amount }, LottoGenerator.generate);
  }

  validate(money) {
    this.isValidRange(money);
    this.isDiv(money);
  }

  isValidRange(money) {
    if (money < LOTTO_SPEC.MONEY_UNIT) {
      throw new Error(ERRORS.RANGE);
    }
  }

  isDiv(money) {
    const remainder = money % LOTTO_SPEC.MONEY_UNIT;
    if (remainder !== 0) {
      throw new Error(ERRORS.NOT_DIVIDE);
    }
  }
}

module.exports = LottoMachine;
