const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  play() {
    this.purchaseAmount();
  }

  purchaseAmount() {
    Console.readLine("구매금액을 입력해 주세요.\n", (amount) => {
      this.validatePurchaseAmount(amount);
      Console.close();
      Console.print(amount);
    });
  }

  validatePurchaseAmount(amount) {
    if (amount < 1000)
      throw new Error("[ERROR] 구매금액은 1000원 이상이어야 합니다.");
    const regex = /[^0-9]/g;
    if (amount / 1000 !== 0)
      throw new Error("[ERROR] 1000원으로 나누어 떨어져야 합니다.");
  }
}

const app = new App();
app.play();
module.exports = App;
