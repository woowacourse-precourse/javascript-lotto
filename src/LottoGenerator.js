const { Console, Random } = require("@woowacourse/mission-utils");
const { RULES, RESULT } = require("./constants");

class LottoGenerator {
  #lottoSet;
  #money;

  constructor(money) {
    this.#lottoSet = [];
    this.#money = money;
  }

  getLottoQuantity(money) {
    const lottoQuantity = parseInt(money, 10) / RULES.PURCHASE_UNIT;
    Console.print(`${RESULT.PURCHASE_CHECK(lottoQuantity)}`);
    this.createLotto(lottoQuantity);
  }

  getLottoNumbers() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(RULES.START_RANGE, RULES.END_RANGE, RULES.LENGTH);
    return lottoNumbers.sort((previous, current) => previous - current);
  }

  createLotto(lottoQuantity) {
    Array.from({ length: lottoQuantity }, () => {
      const lottoNumbers = this.getLottoNumbers();
      this.#lottoSet.push(lottoNumbers);
      Console.print("[" + lottoNumbers.join(", ") + "]");
    });
    Console.print("");
  }

  play() {
    this.getLottoQuantity(this.#money);
    return this.#lottoSet;
  }
}

module.exports = LottoGenerator;
