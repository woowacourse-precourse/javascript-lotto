const MissionUtils = require("@woowacourse/mission-utils");

class Purchase {
  #money;
  #lottoNums;

  constructor(money) {
    this.validate(money);
    this.#money = money;
  }

  validate(money) {
    // 숫자 검증..!
    if (money % 1000 !== 0 || money === 0) {
      throw new Error("[ERROR] 금액을 천원 단위로 입력해야합니다.");
    }
  }

  getLottoCount() {
    return this.#money / 1000;
  }

  autoIssue(lottoCount) {
    this.#lottoNums = new Array(lottoCount)
      .fill(null)
      .map(() => this.generateNums());
    console.log(this.#lottoNums);
    return this.#lottoNums;
  }

  generateNums() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  getPurchasedNum() {
    return this.#lottoNums;
  }

  getMoney() {
    return this.#money;
  }
}

module.exports = Purchase;
