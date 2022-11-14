const MissionUtils = require("@woowacourse/mission-utils");
const { CONSOLE_MESSAGE } = require("./constants");
const LottoMachine = require("./LottoMachine");
const LottoManage = require("./LottoManage");

class App {
  constructor() {
    this.lottoManage = new LottoManage();
  }

  play() {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.INPUT_PURCHASE_MONEY,(inputMoney)=>{
      new LottoMachine(inputMoney);
    })
    this.lottoManage.inputWinningLotto();
  }

  showPurchasedLotto() {
    MissionUtils.Console.print(`\n${this.#lottoList.length}${CONSOLE_MESSAGE.SHOW_PURCHASED_MONEY}`);
    this.#lottoList.forEach((lotto)=>{
      MissionUtils.Console.print(lotto.getNumbers());
    });
  }
}

new App().play();
module.exports = App;
