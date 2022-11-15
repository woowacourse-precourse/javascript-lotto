const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("./constant");
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
    Console.readLine(INPUT_MESSAGE.PURCHASE, (money) => {
      validateInputMoney(money);
      this.userMoney = money;
      this.userLottoNumbers = this.view.showUserLotto(
        this.lottoMachine.getLottoQuantity(money)
      );
      this.inputWinningNum();
    });
  }

  inputWinningNum() {
    Console.readLine(INPUT_MESSAGE.WINNING_NUMBER, (number) => {
      this.winningNumbers = number
        .split(",")
        .map((winningNumber) => Number(winningNumber));
      new Lotto(this.winningNumbers);
      this.inputBonusNum();
    });
  }

  inputBonusNum() {
    Console.readLine(INPUT_MESSAGE.BONUS_NUMBER, (bonusNum) => {
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
