const MissionUtils = require("@woowacourse/mission-utils");
const UserLottos = require("./model/UserLottos");

class App {
  constructor() {
    this.purchaseAmout = 0;
    this.userLottoCount = 0;
    this.userLottos = new UserLottos();
    this.userLottoNumbers = [];
    this.winningLottoNumber = [];
  }

  play() {}
  askPurchaseAmount() {
    MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요.",
      (purchaseAmount) => {
        this.purchaseAmout = purchaseAmount;
        this.userLottoNumbers = this.userLottos.getNumbers(purchaseAmount);
        this.winningLotto = this.askWinningLottoNumber();
      }
    );
  }

  askWinningLottoNumber() {
    MissionUtils.Console.readLine(
      "당첨 번호를 입력해 주세요.",
      (winningNumber) => {
        this.winningLottoNumber = winningNumber
          .split(",")
          .map((num) => Number(num));
      }
    );
  }
}

const app = new App();
app.play();

module.exports = App;
