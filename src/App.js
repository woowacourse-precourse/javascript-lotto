const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
    this.inputMoney();
  }

  inputMoney() {
    MissionUtils.Console.readLine("", (answer) => {
      this.lotteryCount(answer);
    });
  }

  lotteryCount(answer) {
    for (let i = 0; i < answer / 1000; i++) {
      this.lotteryNumber();
    }
  }

  lotteryIssue() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = App;
