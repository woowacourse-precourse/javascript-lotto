const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.buyCost = 0;
  }

  getCost() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (cost) => {
      if (cost / 1000 < 1) {
        throw new Error("[ERROR] 로또 구입금액이 부족합니다.");
      }
      this.buyCost = cost;
    });
  }

  play() {}
}

module.exports = App;
