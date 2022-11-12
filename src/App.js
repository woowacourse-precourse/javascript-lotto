const MissionUtils = require("@woowacourse/mission-utils");
const LottoMachine = require("./LottoMachine");
const WinningCalculator = require("./WinningCalculator");
const WinningLotto = require("./WinningLotto");

class App {
  play() {
    this.getMoneyInput();
  }

  getMoneyInput() {
    MissionUtils.Console.readLine("구입 금액을 입력해 주세요.", (input) => {
      this.lottoMachine = new LottoMachine(input);
      this.lottoMachine.print();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
