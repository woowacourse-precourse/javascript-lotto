const MissionUtils = require("@woowacourse/mission-utils");
const RandomNumber = require("./RandomNumber");
const AmountError = require("../errors/AmountError");

class AmountNumber {
  constructor(purchaseAmout, purchaseNumber) {
    this.purchaseAmout = purchaseAmout;
    this.purchaseNumber = purchaseNumber;
    this.randomNumber = new RandomNumber();
  }

  amount() {
    MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요.\n",
      (amountInput) => {
        console.log("");
        this.purchaseAmout = amountInput;
        new AmountError(this.purchaseAmout);
        this.amountDivide();
      }
    );
  }

  amountDivide() {
    this.purchaseNumber = this.purchaseAmout / 1000;
    this.randomNumber.showPurchaseNumber(this.purchaseNumber);
  }
}

module.exports = AmountNumber;
