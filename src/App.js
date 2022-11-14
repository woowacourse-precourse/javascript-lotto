const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
const PurchaseLotto = require("./PurchaseLotto.js");

class App {
  constructor() {
    this.wonLotto = [];
    this.userLotto = [];
    this.totalLotto = 0;
  }
  play() {
    this.userPurchase();
    this.createUserLotto(this.totalLotto);
    console.log(this.userLotto);
  }

  userPurchase() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (payment) => {
      this.isNumber(payment);
      this.purchaseLotto = new PurchaseLotto(parseInt(payment));
      this.totalLotto = this.purchaseLotto.getTotalLotto();
    });
  }

  createUserLotto(totalLotto) {
    for (let number = 0; number < totalLotto; number++) {
      const RANDOM = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      if (RANDOM) {
        const NEW_LOTTO = RANDOM.sort((a, b) => a - b);
        this.userLotto.push(NEW_LOTTO);
      }
    }
  }

  isNumber(payment) {
    if (isNaN(payment)) {
      throw new Error("[ERROR] 로또 구입 금액은 숫자만 입력해주세요.");
    }
  }

  sortLotto(newLotto) {}
}

module.exports = App;
