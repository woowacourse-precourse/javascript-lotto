const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.userAmount;
  }

  play() {}

  printStartGame() {
    MissionUtils.Console.readLine("구입금액을 입력해주세요: ", (amount) => {
      this.userAmount = amount;
    });
  }
}

module.exports = App;
