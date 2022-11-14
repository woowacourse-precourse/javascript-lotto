const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.buyMoney = 0;
  }

  play() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요\n", (answer) => {
      let lottoNum = 0;
      this.buyMoney = answer;
    });
  }
}

module.exports = App;
