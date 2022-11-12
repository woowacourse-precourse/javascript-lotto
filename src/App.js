const MissionUtils = require("@woowacourse/mission-utils");
const LottoMachine = require("./LottoMachine");
const WinningCalculator = require("./WinningCalculator");
const WinningLotto = require("./WinningLotto");

class App {
  play() {
    this.getMoneyInput();
  }

  getMoneyInput() {
    MissionUtils.Console.readLine("구입 금액을 입력해 주세요.\n", (input) => {
      this.lottoMachine = new LottoMachine(input);
      this.lottoMachine.print();

      this.getWinningNumberInput();
    });
  }

  getWinningNumberInput() {
    MissionUtils.Console.readLine("\n당첨 번호를 입력해 주세요.\n", (winningNumberInput) => {
      MissionUtils.Console.readLine("\n보너스 번호를 입력해 주세요.\n", (bonusNumberInput) => {
        const winningNumbers = winningNumberInput.split(",").map((number) => Number(number));
        const bonusNumber = Number(bonusNumberInput);
        this.winningLotto = new WinningLotto(winningNumbers, bonusNumber);

        const winningCalculator = new WinningCalculator(this.lottoMachine.lottos, this.winningLotto);
        winningCalculator.print();
        MissionUtils.Console.close();
      });
    });
  }
}

const app = new App();
app.play();

module.exports = App;
