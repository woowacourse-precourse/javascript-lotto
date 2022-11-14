const MissionUtils = require("@woowacourse/mission-utils");
const Calculator = require("./Calculator");

class App {
  play() {
    MissionUtils.Console.print("구입금액을 입력해 주세요.");

    const calculator = new Calculator();
    const purchaseAmount = this.receivePurchaseAmount();
    const amountOfLotto = calculator.calculateAmountOfLotto(purchaseAmount);

    MissionUtils.Console.print(`${amountOfLotto}개를 구매했습니다.`);
  }

  receivePurchaseAmount() {
    let purchaseAmount = 0;
    MissionUtils.Console.readLine("로또 구입 금액", (answer) => {
      console.log(answer);
      purchaseAmount = answer;
    });
    this.checkPurchaseAmount(purchaseAmount);
    return purchaseAmount;
  }

  checkPurchaseAmount(purchaseAmount) {
    if (purchaseAmount % 1000 !== 0) {
      console.log("[ERROR]");
      throw new Error("[ERROR]");
    }
  }
}

module.exports = App;
