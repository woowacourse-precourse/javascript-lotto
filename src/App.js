const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { LOTTO_MESSAGE } = require("./constant.js");

class App {
  play() {
    MissionUtils.Console.readLine(LOTTO_MESSAGE.INPUT_MONEY_MSG, (money) => {
      Lotto.checkMoney(money);
    });
  }
}

module.exports = App;
