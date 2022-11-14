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
        this.amountDivide();
      }
    );
  }

  amountDivide() {
    this.purchaseNumber = this.purchaseAmout / 1000;
    this.showPurchaseNumber();
  }

  showPurchaseNumber() {
    MissionUtils.Console.print(`\n${this.purchaseNumber}개를 구매했습니다.`);
    this.randomNumber.randomComputerNumber(
      this.purchaseAmout,
      this.purchaseNumber
    );
  }
}

module.exports = AmountNumber;
