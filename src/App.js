const MissionUtils = require("@woowacourse/mission-utils");
const Money = require("./Money");

class App {
  constructor() {
    this.money = 0;
    this.purchaseQuantity = 0;
  }

  play() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      new Money(money);
      this.money = money;
      this.printPurchaseQuantity(this.money);
    });
  }

  printPurchaseQuantity(money) {
    const UNIT = 1000;
    const convertIntoQuantity = money / UNIT;
    this.purchaseQuantity = convertIntoQuantity;
    MissionUtils.Console.print(`\n${this.purchaseQuantity}개를 구매했습니다.`);
  }
}

const app = new App();
app.play();

module.exports = App;
