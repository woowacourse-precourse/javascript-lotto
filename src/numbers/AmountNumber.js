const MissionUtils = require("@woowacourse/mission-utils");
const RandomNumber = require("./RandomNumber");

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
        this.purchaseAmout = amountInput;
        this.amounterror();
        this.amountDivide();
      }
    );
  }

  amounterror() {
    if (this.purchaseAmout % 1000 !== 0) {
      throw new Error("[ERROR] 구매 금액은 1000원단위로 입력해주세요");
    }
  }

  amountDivide() {
    this.purchaseNumber = this.purchaseAmout / 1000;
    this.randomNumber.showPurchaseNumber(this.purchaseNumber);
  }
}

module.exports = AmountNumber;
