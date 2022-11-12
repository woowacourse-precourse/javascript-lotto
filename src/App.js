const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const UserLotto = require("./UserLotto");
const {
  isValidateUserInput,
  isValidateBonusNumber,
} = require("./utils/validator");
class App {
  constructor() {
    this.userLotto = new UserLotto();
    this.lotto;
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
    MissionUtils.Console.print("\n당첨 번호를 입력해 주세요.");
    MissionUtils.Console.readLine("", (numbers) => {
      const splitNumbers = numbers.split(",");
      const numbersArr = splitNumbers.map((number) => Number(number));
      this.lotto = new Lotto(numbersArr);
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    MissionUtils.Console.print("\n보너스 번호를 입력해 주세요.");
    MissionUtils.Console.readLine("", (inputBonus) => {
      const bonusNumber = Number(inputBonus);
      const winningNumber = this.lotto.getNumbers();
      if (isValidateBonusNumber(bonusNumber, winningNumber)) {
        this.printResult(bonusNumber);
      }
    });
  }
}

const app = new App();
app.play();
module.exports = App;
