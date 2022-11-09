const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
    this.inputMoney();
  }

  inputMoney() {
    MissionUtils.Console.readLine("", (answer) => {});
  }
}

module.exports = App;
