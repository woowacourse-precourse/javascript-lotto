const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const UserLotto = require("./UserLotto");
const { isValidateUserInput } = require("./utils/validator");
class App {
  constructor() {
    this.userLotto = new UserLotto();
  }
  play() {
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
    MissionUtils.Console.readLine("", (amount) => {
      if (isValidateUserInput(amount)) {
        this.userLotto.createUserLotto(amount);
        this.userLotto.printUserLottoInformation();
        this.inputWinningNumber();
      }
    });
  }

  inputWinningNumber() {
    MissionUtils.Console.print("당첨 번호를 입력해 주세요.");
    MissionUtils.Console.readLine("", (numbers) => {
      this.lotto = new Lotto(numbers.split(","));
    });
  }
}

const app = new App();
app.play();
module.exports = App;
