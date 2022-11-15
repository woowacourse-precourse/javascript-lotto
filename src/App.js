const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}

  inputMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해주세요", (input) => {
      if (input % 1000 !== 0) {
        throw new error("[ERROR] 잘못된 금액입니다.");
      }
    });
  }
}

module.exports = App;
