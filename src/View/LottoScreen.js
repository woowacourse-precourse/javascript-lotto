const MissionUtils = require("@woowacourse/mission-utils");
const MESSAGE = require("./Message");
const Validate = require("../Validate");
const LottoApp = require("../Domain/LottoApp");

class LottoScreen {
  static insertMoney() {
    MissionUtils.Console.readLine(MESSAGE.INSERT_MONEY, (money) => {
      Validate.money(money);
      LottoApp.buyLottos(money);
    });
  }

  static printBuyAmount(amount) {
    MissionUtils.Console.print(amount + MESSAGE.BUY_AMOUNT);
  }
}

module.exports = LottoScreen;
