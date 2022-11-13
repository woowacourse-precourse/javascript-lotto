const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.purchaseAmout = 0;
    this.userLottoCount = 0;
  }

  play() {}
  askPurchaseAmount() {
    MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요.",
      (purchaseAmount) => {
        this.purchaseAmout = purchaseAmount;
        this.userLottoCount = getUserLottoCount(this.purchaseAmout);
      }
    );
  }

  getUserLottoCount(purchaseAmount) {
    return purchaseAmount / 1000;
  }
}

module.exports = App;
