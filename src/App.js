const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.purchaseAmout = 0;
  }

  play() {}
  askPurchaseAmount() {
    MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요.",
      (purchaseAmount) => {
        this.purchaseAmout = purchaseAmount;
      }
    );
  }
}

module.exports = App;
