const { Console } = require("@woowacourse/mission-utils");
const { RULES, RESULT } = require("./constants");

class LottoGenerator {
  #lottoSet;
  #money;

  constructor(money) {
    this.#lottoSet = [];
    this.#money = money;
  }

  getLottoQuantity(money) {
    const LottoQuantity = parseInt(money, 10) / RULES.PURCHASE_UNIT;
    Console.print(`${RESULT.PURCHASE_CHECK(LottoQuantity)}`);
  }
}

module.exports = LottoGenerator;
