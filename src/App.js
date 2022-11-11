const { Console } = require("@woowacourse/mission-utils");
const Money = require("./Money");

class App {
  constructor() {
    this.money = 0;
    this.quantity = 0;
  }

  play() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      new Money(money);
      this.money = money;
      this.printQuantity(this.money);
    });
  }

  printQuantity(money) {
    const UNIT = 1000;
    this.quantity = parseInt(money, 10) / UNIT;
    Console.print(`\n${this.quantity}개를 구매했습니다.`);
  }
}

module.exports = App;
