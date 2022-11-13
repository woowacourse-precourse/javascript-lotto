const MissionUtils = require("@woowacourse/mission-utils");

class AmountNumber {
  constructor(purchaseAmout, purchaseNumber) {
    this.purchaseAmout = purchaseAmout;
    this.purchaseNumber = purchaseNumber;
  }

  amount() {
    MissionUtils.Console.readLine(
      "구입금액을 입력해 주세요.\n",
      (amountInput) => {
        this.purchaseAmout = amountInput;
        this.amountDivide();
      }
    );
  }

  amountDivide() {
    this.purchaseNumber = this.purchaseAmout / 1000;
  }
}
