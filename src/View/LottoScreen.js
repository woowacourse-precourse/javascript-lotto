const MissionUtils = require("@woowacourse/mission-utils");
const MESSAGE = require("./Message");
const Validate = require("../Validate");
const LottoApp = require("../Domain/LottoApp");

class LottoScreen {
  static insertMoney() {
    MissionUtils.Console.readLine(MESSAGE.INSERT_MONEY, (money) => {
      Validate.money(money);
      const lottoApp = new LottoApp(money);
      console.log(lottoApp.getLottos()[0].getNumbers());
    });
  }

  static printBuyAmount(amount) {
    MissionUtils.Console.print(amount + MESSAGE.BUY_AMOUNT);
  }
}

module.exports = LottoScreen;
