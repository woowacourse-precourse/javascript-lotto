const MissionUtils = require("@woowacourse/mission-utils");
const { CONSOLE_MESSAGE } = require("./constants");
const LottoMachine = require("./LottoMachine");
const LottoResult = require("./LottoResult");
const { stringToNumberArray } = require("./utils");

class App {
  #result;
  #lottoMachine;

  play() {
    this.inputPurchaseMoney();
  }
  
  inputPurchaseMoney() {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.INPUT_PURCHASE_MONEY,(inputMoney)=>{
      this.#lottoMachine = new LottoMachine(inputMoney);
      this.showPurchasedLotto();
    });
  }

  showPurchasedLotto() {
    const lottoList = this.#lottoMachine.getLottoList();
    MissionUtils.Console.print(`\n${lottoList.length}${CONSOLE_MESSAGE.SHOW_PURCHASED_MONEY}`);
    lottoList.forEach((lotto)=>{
      MissionUtils.Console.print(lotto.getNumbers());
    });
    this.inputWinningLotto();
  }

  inputWinningLotto() {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.INPUT_WINNING_LOTTO,(winningNumber)=>{
      stringToNumberArray(winningNumber);
      this.inputBonusNumber(winningNumber);
    });
  }
  
  inputBonusNumber(winningNumber) {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.INPUT_BONUS_LOTTO,(bonusNumber)=>{
      this.#result = new LottoResult(winningNumber,bonusNumber,this.#lottoMachine);
    });
  }
}

new App().play();
module.exports = App;
