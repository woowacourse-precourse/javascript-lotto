const MissionUtils = require("@woowacourse/mission-utils");
const { PURCHASE_AMOUNT_ERROR } = require("./Constants");
const { checkPurchaseAmount } = require("./Validation");

class LottoView {
  inputPurchaseAmount() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (answer) => {
      checkPurchaseAmount(answer);
      MissionUtils.Console.close();
    });
  }
}

module.exports = LottoView;
