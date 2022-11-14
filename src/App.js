const { Console } = require("@woowacourse/mission-utils");
const LottoList = require("./LottoList");
const BonusNumber = require("./BonusNumber");
const printError = require("./errors/existError.js");
const checkValidation = require("./errors/checkValidation");
class App {
  constructor() {
    this.lottos = null;
    this.winningNumbers = null;
    this.bonusNumber = null;
  }
  play() {
    this.requestMoney();
  }
  requestMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      const { errorMessage } = checkValidation.checkMoney(money);
      if (errorMessage) existError(errorMessage);
      this.lottos = new LottoList(money);

      this.lottos.printLottoCount();
      this.lottos.printLottoList();
      this.setWinningNumbers();
    });
  }
  setWinningNumbers() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (winningNumbers) => {
      winningNumbers = winningNumbers.split(",").map((item) => Number(item));

      checkValidation.checkNumberList(winningNumbers);
      const { errorMessage } = checkValidation.checkNumberList(winningNumbers);
      if (errorMessage) exitWithError(errorMessage);

      this.winningNumbers = new WinningNumbers(winningNumbers);

      this.requestBonus();
    });
  }
  requestBonus() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (bonusNumber) => {
      bonusNumber = Number(bonusNumber);

      checkValidation.checkBonusNumber(bonusNumber, this.winningNumbers.value);
      const { errorMessage } = checkValidation.checkBonusNumber(
        bonusNumber,
        this.winningNumbers.value
      );
      if (errorMessage) exitWithError(errorMessage);
      this.bonusNumber = new BonusNumber(bonusNumber);

      this.printWinningStat();
    });
  }
  printWinningStat() {
    Console.print("\n당첨 통계\n---");

    const lottoResultSet = this.lottos.getResult(
      this.winningNumbers.value,
      this.bonusNumber.value
    );
    this.lottos.printWinning(lottoResultSet);
    this.lottos.printLottoRate();

    this.end();
  }
  end() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
