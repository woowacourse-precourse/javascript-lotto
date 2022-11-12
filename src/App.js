const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    this.purchaseAmountInputHandler();
  }

  purchaseAmountInputHandler = () => {
    const REQUIRE_PURCHASE_AMOUNT = '구입 금액을 입력해 주세요.\n';
    MissionUtils.Console.readLine(REQUIRE_PURCHASE_AMOUNT, this.userMoneyInputHandler);
  };

  userMoneyInputHandler = (userMoney) => {

  };
}

module.exports = App;
