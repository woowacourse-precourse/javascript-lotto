const MissionUtils = require("@woowacourse/mission-utils");
const MESSAGE = require("./Message");
const Validate = require("../Validate");
const LottoApp = require("../Domain/LottoApp");
const CONSTANT = require("../constant");

class LottoScreen {
  lottoApp;

  static insertMoney() {
    MissionUtils.Console.readLine(MESSAGE.INSERT_MONEY, (money) => {
      LottoScreen.lottoApp = new LottoApp(money);
      LottoScreen.printLine(money / CONSTANT.LOTTO_PRICE);
    });
  }

  static printLine(amount) {
    MissionUtils.Console.print(amount + MESSAGE.BUY_AMOUNT);
    LottoScreen.printLottoNumbers();
  }

  static printLottoNumbers() {
    const lottos = LottoScreen.lottoApp.lottos; // [{lotto} , {lotto} ...]
    lottos.forEach((lotto) => MissionUtils.Console.print(lotto.numbers));
    LottoScreen.selectWinNumber();
  }

  static selectWinNumber() {
    MissionUtils.Console.readLine(MESSAGE.LOTTO_NUMBER_CHOICE, (choice) => {
      LottoScreen.lottoApp.winNumber = choice;
      LottoScreen.selectBonuse();
    });
  }

  static selectBonuse() {
    MissionUtils.Console.readLine(MESSAGE.BONUSE, (number) => {
      LottoScreen.lottoApp.bonuse = number;
    });
  }

  static printResult() {}
}

module.exports = LottoScreen;
