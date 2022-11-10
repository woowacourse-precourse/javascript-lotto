const MissionUtils = require("@woowacourse/mission-utils");
const { INPUT_MSG, ERROR_MSG } = require("./constants/Message");
const Validator = require("./Validator");

class App {
  constructor() {
    this.validator = new Validator();
    this.winningNumber = [];
    this.bonusNumber = 0;
    this.purchase = 0;
  }
  inputPurchase() {
    MissionUtils.Console.readLine(INPUT_MSG.PURCHASE_AMOUT, (input) => {
      const purchaseAmount = this.validator.checkPurchaseAmount(input, 1000);
      if (purchaseAmount === -1) this.error(ERROR_MSG.PURCHASE_AMOUT);

      MissionUtils.Console.close();
    });
  }
  error(msg) {
    MissionUtils.Console.close();
    throw new Error(`[ERROR] ${msg}`);
  }
  play() {
    this.inputPurchase();
  }
}

module.exports = App;
