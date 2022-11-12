const MissionUtils = require('@woowacourse/mission-utils');
const PurchaseLotto = require('./PurchaseLotto');

class App {
  purchasedLottoNumbers;

  play() {
    this.purchaseAmountInputHandler();
  }

  purchaseAmountInputHandler = () => {
    const REQUIRE_PURCHASE_AMOUNT = '구입 금액을 입력해 주세요.\n';
    MissionUtils.Console.readLine(REQUIRE_PURCHASE_AMOUNT, this.winningNumberInputHandler);
  };

  winningNumberInputHandler = (userMoney) => {
    const PURCHASE_LOTTO = new PurchaseLotto(userMoney);
    this.purchasedLottoNumbers = PURCHASE_LOTTO.purchasedLottoNumbers;
    const REQUIRE_WINNING_NUMBER = '\n당첨 번호를 입력해 주세요.\n';
    MissionUtils.Console.readLine(REQUIRE_WINNING_NUMBER, this.bonusNumberInputHandler);
  };
}

module.exports = App;
