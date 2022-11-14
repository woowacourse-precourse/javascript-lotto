const MissionUtils = require("@woowacourse/mission-utils");

const Lotto = require("./Lotto.js");
const PurchaseLotto = require("./PurchaseLotto.js");
const UserLotto = require("./UserLotto.js");

class App {
  constructor() {
    this.wonLotto = [];
    this.userLottoNumber = [];
    this.totalLotto = 0;
  }
  play() {
    this.userPurchase();
    this.userLotto = new UserLotto(this.totalLotto);
    this.userLottoNumber = this.userLotto.getUserLotto();
  }

  userPurchase() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (payment) => {
      this.isNumber(payment);
      this.purchaseLotto = new PurchaseLotto(parseInt(payment));
      this.totalLotto = this.purchaseLotto.getTotalLotto();
    });
  }

  isNumber(payment) {
    if (isNaN(payment)) {
      throw new Error("[ERROR] 로또 구입 금액은 숫자만 입력해주세요.");
    }
  }
}

module.exports = App;
