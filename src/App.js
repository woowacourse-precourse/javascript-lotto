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
      this.isNumber(payment);
      this.purchaseLotto = new PurchaseLotto(parseInt(payment));
    });
  }
  isNumber(payment) {
    if (payment.match(/^[0-9]+$/) === false) {
      throw new Error("[ERROR] 로또 구입 금액은 숫자만 입력해주세요.");
    }
  }
}

module.exports = App;
