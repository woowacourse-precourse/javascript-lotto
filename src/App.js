const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.money = 0;
  }

  play() {
    MissionUtils.Console.readLine("구매금액을 입력해 주세요.\n", (answer) => {
      this.money = answer;
    });
  }
}

module.exports = App;
