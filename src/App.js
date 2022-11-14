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
    this.inputPurchase();
    this.userLotto = new UserLotto(this.totalLotto);
    this.userLottoNumber = this.userLotto.getUserLotto();
    this.inputWonLotto();
  }

  inputPurchase() {
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

  inputWonLotto() {
    MissionUtils.Console.readLine(
      "\n당첨 번호를 입력해 주세요.\n",
      (lottoNumber) => {
        const winLotto = lottoNumber.split(",");
        this.lotto = new Lotto(winLotto);
      }
    );
  }
}

module.exports = App;
