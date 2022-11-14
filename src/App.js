const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
const PurchaseLotto = require("./PurchaseLotto.js");

class App {
  constructor() {
    this.wonLotto = null;
    this.userLotto = null;
  }
  play() {
    this.userPurchase();
  }

  userPurchase() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (payment) => {
      this.purchaseLotto = new PurchaseLotto(payment);
    });
  }
}

module.exports = App;
