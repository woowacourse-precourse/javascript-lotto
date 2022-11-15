const MissionUtils = require("@woowacourse/mission-utils");
const { CONSOLE_MESSAGE, PRINT_RESULT, RANK_STRING } = require("./constants");
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
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.INPUT_WINNING_LOTTO,(winningNumberString)=>{
      const winningNumber = stringToNumberArray(winningNumberString);
      this.inputBonusNumber(winningNumber);
    });
  }
  
  inputBonusNumber(winningNumber) {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.INPUT_BONUS_LOTTO,(bonusNumber)=>{
      this.#result = new LottoResult(winningNumber,Number(bonusNumber),this.#lottoMachine);
      this.showWinningStats();
    });
  }
  showWinningStats() {
    this.#result.makeResult();
    MissionUtils.Console.print(PRINT_RESULT.TITLE);
    Object.keys(RANK_STRING).forEach((rank) => {
      const ranking = this.#result.getRank();
      MissionUtils.Console.print(`${RANK_STRING[rank]} - ${ranking[rank] ? 1 : 0}개`);
    })
  }
}

new App().play();
module.exports = App;
