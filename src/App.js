const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./model/Lotto");
const UserLottos = require("./model/Lottos");
const { INPUT_MESSEGE } = require("./utils/constants");

class App {
  constructor() {
    this.userLottos = null;
    this.winningNumbers = [];
    this.bonusNumber = 0;
  }

  play() {
    this.askPurchaseAmount();
  }

  askPurchaseAmount() {
    MissionUtils.Console.readLine(
      INPUT_MESSEGE.PURCHASE_AMOUNT,
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
      INPUT_MESSEGE.WINNING_NUMBER,
      (winningNumber) => {
        this.winningNumbers = winningNumber
          .split(",")
          .map((num) => Number(num));

        this.askBonusNumber();
      }
    );
  }

  askBonusNumber() {
    MissionUtils.Console.readLine(INPUT_MESSEGE.BONUS_NUMBER, (bonusNum) => {
      this.bonusNumber = Number(bonusNum);

      this.printResult();
    });
  }

  printResult() {
    this.userLottos.printResult(this.winningNumbers, this.bonusNumber);
  }
}

const app = new App();
app.play();

module.exports = App;
