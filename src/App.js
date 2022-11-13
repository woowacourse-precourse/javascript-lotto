const MissionUtils = require("@woowacourse/mission-utils");
const UserLottos = require("./UserLottos");

class App {
  constructor() {
    this.purchaseAmout = 0;
    this.userLottoCount = 0;
    this.userLottos = new UserLottos();
    this.userLottoNumbers = [];
    this.winningLotto = [];
  }

  play() {}
  askPurchaseAmount() {
    MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요.",
      (purchaseAmount) => {
        this.purchaseAmout = purchaseAmount;
        this.userLottoNumbers = this.userLottos.getNumbers(purchaseAmount);
      }
    );
  }
}

const app = new App();
app.play();

module.exports = App;
