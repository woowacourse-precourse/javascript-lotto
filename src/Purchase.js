const MissionUtils = require("@woowacourse/mission-utils");
const Constant = require("./components/Constant");

class Purchase {
  static inputMoney() {
    MissionUtils.Console.readLine(Constant.ORDER_MESSAGE, Purchase.validate);
  }
}

module.exports = Purchase;
