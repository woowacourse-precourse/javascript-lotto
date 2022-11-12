const MissionUtils = require("@woowacourse/mission-utils");
const { PURCHASE_AMOUNT_ERROR } = require("./Constants");
const { checkPurchaseAmount } = require("./Validation");

class LottoView {
  getPurchaseAmount() {
    return new Promise((resolve) => {
      this.inputPurchaseAmount(resolve);
    });
  }

  inputPurchaseAmount(resolve) {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (answer) => {
      checkPurchaseAmount(answer);
      resolve(answer);
      MissionUtils.Console.close();
    });
  }

  inputLottoNumbers() {}
}

module.exports = LottoView;
