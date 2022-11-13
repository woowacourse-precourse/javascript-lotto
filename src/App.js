const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.money = 0;
  }

  play() {
    MissionUtils.Console.readLine("구매금액을 입력해 주세요.\n", (answer) => {
      this.validateMoney(answer);
      this.money = parseInt(answer);
    });
  }

  validateMoney(value) {
    const reg = /^\d+$/;
    if (!reg.test(value)) {
      throw new Error("[ERROR] 구매금액은 숫자여야 합니다.");
    }
    const money = parseInt(value);
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 구매금액은 1,000원 단위여야 합니다.");
    }
  }
}

module.exports = App;
