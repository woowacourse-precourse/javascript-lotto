const MissionUtils = require("@woowacourse/mission-utils");
const MESSAGE = require("./Message");

const LottoApp = require("../Domain/LottoApp");

class LottoScreen {
  static insertMoney() {
    MissionUtils.Console.readLine(MESSAGE.INSERT_MONEY, (money) => {
      LottoApp.buyLottos(money);
    });
  }
}

module.exports = LottoScreen;
