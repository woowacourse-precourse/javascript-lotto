const MissionUtils = require("@woowacourse/mission-utils");
const MESSAGE = require("./Message");
const Validate = require("../Validate");
const LottoApp = require("../Domain/LottoApp");
const CONSTANT = require("../constant");

class LottoScreen {
  lottoApp;

  static insertMoney() {
    MissionUtils.Console.readLine(MESSAGE.INSERT_MONEY, (money) => {
      Validate.money(money);
      LottoScreen.lottoApp = new LottoApp(money);
      LottoScreen.printLine(money / CONSTANT.LOTTO_PRICE);
    });
  }

  static printLine(amount) {
    MissionUtils.Console.print(amount + MESSAGE.BUY_AMOUNT);
    LottoScreen.printLottoNumbers();
    LottoScreen.selectWinNumber();
  }

  static printLottoNumbers() {
    const lottos = LottoScreen.lottoApp.getLottos(); // [{lotto} , {lotto} ...]
    lottos.forEach((lotto) => MissionUtils.Console.print(lotto.getNumbers()));
  }

  static selectWinNumber() {
    MissionUtils.Console.readLine(MESSAGE.LOTTO_NUMBER_CHOICE, (choice) => {
      Validate.selectWinNumber(choice);
      
    });
  }
}

module.exports = LottoScreen;
