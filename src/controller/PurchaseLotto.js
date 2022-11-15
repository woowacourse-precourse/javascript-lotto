const { DEFAULT } = require("../utils/constant.js");
const { Console, Random } = require("@woowacourse/mission-utils");

class PurchaseLotto {
  #input;
  #randomLottoNums;
  #lottoCount;

  constructor(input) {
    this.#input = input;
    this.#randomLottoNums = DEFAULT.INITIAL_ARRAY;
    this.#lottoCount = DEFAULT.ZERO;

    this.start();
  }

  getLottoCount() {
    return Number(this.#input / DEFAULT.MONEY_UNIT);
  }

  getRandomLottoNums(lottoCount) {
    const randomNumArrays = DEFAULT.INITIAL_ARRAY;
    for (let i = 0; i < lottoCount; i++) {
      const randomNums = Random.pickUniqueNumbersInRange(
        DEFAULT.MIN_LOTTO_NUM,
        DEFAULT.MAX_LOTTO_NUM,
        DEFAULT.LOTTO_LENGTH,
      );
      randomNums.sort((a, b) => a - b);
      randomNumArrays.push(randomNums);
    }
    return randomNumArrays;
  }

  start() {
    this.#lottoCount = this.getLottoCount();
    Console.print(`${this.#lottoCount}개를 구매했습니다.`);
    this.#randomLottoNums = this.getRandomLottoNums(this.#lottoCount);

    this.#randomLottoNums.forEach((lottoNums) =>
      Console.print(`[${lottoNums.join(", ")}]`),
    );
  }

  getLottos() {
    return this.#randomLottoNums;
  }
}

module.exports = PurchaseLotto;
