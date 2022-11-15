const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const LottoMachine = require("./LottoMachine");
const { validateInputMoney, validateInputBonusNum } = require("./Validator");
const View = require("./View");

class App {
  constructor() {
    this.lottoMachine = new LottoMachine();
    this.view = new View(this.lottoMachine);
    this.userLottoNumbers;
    this.userMoney;
    this.winningNumbers;
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      validateInputMoney(money);
      this.userMoney = money;
      this.userLottoNumbers = this.view.showUserLotto(
        this.lottoMachine.getLottoQuantity(money)
      );
      this.inputWinningNum();
    });
  }

  inputWinningNum() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (number) => {
      this.winningNumbers = number
        .split(",")
        .map((winningNumber) => Number(winningNumber));
      new Lotto(this.winningNumbers);
      this.inputBonusNum();
    });
  }

  inputBonusNum() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (bonusNum) => {
      validateInputBonusNum(this.winningNumbers, bonusNum);
      const rank = this.lottoMachine.compareInputWinNum(
        this.userLottoNumbers,
        this.winningNumbers,
        Number(bonusNum)
      );
      this.result(rank);
    });
  }

  result(equalScore) {
    this.view.showWinResult(equalScore);
    this.view.showProfit(
      this.lottoMachine.getProfitRate(equalScore, this.userMoney)
    );
    this.end();
  }

  end() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
