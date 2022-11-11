const MissionUtils = require("@woowacourse/mission-utils");
const { PURCHASEAMOUNT_INPUT_MESSAGE } = require("./constants");
const Validation = require("./validation");

class App {
  play() {
    this.inputPurchaseAmount();
  }
  inputPurchaseAmount() {
    MissionUtils.Console.readLine(
      PURCHASEAMOUNT_INPUT_MESSAGE,
      (purchaseAmount) => {
        Validation.checkPurchaseAmount(purchaseAmount);
        console.log(purchaseAmount);
      }
    );
  }
}

module.exports = App;
