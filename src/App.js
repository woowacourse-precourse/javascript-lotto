const MissionUtils = require("@woowacourse/mission-utils");
const { CONSOLE_MESSAGE } = require("./constants");
const LottoMachine = require("./LottoMachine");
const { stringToNumberArray } = require("./utils");

class App {
  constructor() {
  }

  play() {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.INPUT_PURCHASE_MONEY,(inputMoney)=>{
      const lottoMachine = new LottoMachine(inputMoney);
      this.showPurchasedLotto(lottoMachine);
    });
  }

  showPurchasedLotto(lottoMachine) {
    const lottoList = lottoMachine.getLottoList();
    MissionUtils.Console.print(`\n${lottoList.length}${CONSOLE_MESSAGE.SHOW_PURCHASED_MONEY}`);
    lottoList.forEach((lotto)=>{
      MissionUtils.Console.print(lotto.getNumbers());
    });
    this.inputWinningLotto();
  }

  inputWinningLotto() {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.INPUT_WINNING_LOTTO,(winningNumber)=>{
      stringToNumberArray(winningNumber);
    });
  }
}

new App().play();
module.exports = App;
