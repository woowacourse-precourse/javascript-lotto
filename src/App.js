const MissionUtils = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE } = require("./Constants");
const Validation = require("./validation");

class App {
  play() {
    this.inputPurchaseAmount();
  }
  inputPurchaseAmount() {
    MissionUtils.Console.readLine(
      GUIDE_MESSAGE.PURCHASEAMOUNT_INPUT_MESSAGE,
      (purchaseAmount) => {
        Validation.checkPurchaseAmount(purchaseAmount);
        console.log(purchaseAmount);
      }
    );
  }
}

module.exports = App;
