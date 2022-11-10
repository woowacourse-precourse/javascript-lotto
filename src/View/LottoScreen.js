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
      LottoScreen.printBuyingAmount(money / CONSTANT.LOTTO_PRICE);
    });
  }

  static printBuyingAmount(amount) {
    MissionUtils.Console.print(amount + MESSAGE.BUY_AMOUNT);
    LottoScreen.printLottoNumbers();
  }

  static printLottoNumbers() {
    const lottos = LottoScreen.lottoApp.getLottos();
    lottos.forEach((lotto) => MissionUtils.Console.print(lotto.getNumbers()));
  }
}

module.exports = LottoScreen;
