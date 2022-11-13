const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./model/Lotto");
const UserLottos = require("./model/Lottos");

class App {
  constructor() {
    this.userLottos = null;
    this.winningNumbers = [];
    this.bonusNumber = 0;

    this.result = null;
  }

  play() {
    this.askPurchaseAmount();
  }

  askPurchaseAmount() {
    MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요.",
      (purchaseAmount) => {
        this.userLottos = new UserLottos(purchaseAmount);
        this.userLottos.printCount();
        this.userLottos.printLottos();

        this.askWinningLottoNumber();
      }
    );
  }

  askWinningLottoNumber() {
    MissionUtils.Console.readLine(
      "당첨 번호를 입력해 주세요.",
      (winningNumber) => {
        this.winningNumbers = winningNumber
          .split(",")
          .map((num) => Number(num));

        this.askBonusNumber();
      }
    );
  }

  askBonusNumber() {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.",
      (bonusNum) => {
        this.bonusNumber = Number(bonusNum);

        this.printResult();
      }
    );
  }

  printResult() {
    this.userLottos.printResult(this.winningNumbers, this.bonusNumber);
  }
}

const app = new App();
app.play();

module.exports = App;
