const MissionUtils = require("@woowacourse/mission-utils");

class BuyLotto {
  #price;

  constructor() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (price) => {
      this.lostPrice(price);
      this.#price = price;
      MissionUtils.Console.print(`${this.nTimes()}개를 구매했습니다.`);
    });
    // 종료
    MissionUtils.Console.close();
  }

  nTimes() {
    return this.#price / 1000;
  }
  lostPrice(price) {
    if (price % 1000 !== 0) {
      throw new Error("[ERROR] 나누어 떨어지지 않는 금액입니다.");
    }
  }
  havePrice() {
    return this.#price;
  }
}
module.exports = BuyLotto;
