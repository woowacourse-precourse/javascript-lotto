const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./model/Lotto");
const UserLottos = require("./model/Lottos");

class App {
  constructor() {
    this.userLottos = null;
    this.winningLotto = null;
    this.bonusNumber = 0;
  }

  play() {}
  askPurchaseAmount() {
    MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요.",
      (purchaseAmount) => {
        this.userLottos = new UserLottos(purchaseAmount);
        this.userLottos.printCount();
        this.userLottos.printLottos();

        askWinningLottoNumber();
      }
    );
  }

  askWinningLottoNumber() {
    MissionUtils.Console.readLine(
      "당첨 번호를 입력해 주세요.",
      (winningNumber) => {
        const winningLottoNumbers = winningNumber
          .split(",")
          .map((num) => Number(num));
        this.winningLotto = new Lotto(winningLottoNumbers);

        askBonusNumber();
      }
    );
  }

  askBonusNumber() {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.",
      (bonusNum) => {
        this.bonusNumber = bonusNum;
      }
    );
  }
}

const app = new App();
app.play();

module.exports = App;
