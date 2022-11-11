const { Console, Random } = require("@woowacourse/mission-utils");
const Money = require("./Money");

class App {
  constructor() {
    this.money = 0;
    this.quantity = 0;
    this.publishList = [];
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
    this.publishLotto(this.quantity);
  }

  publishLotto(quantity) {
    for (let turn = 0; turn < quantity; turn++) {
      const MINIMUN_NUMBER = 1;
      const MAXIMUN_NUMBER = 45;
      const NUMBER_LENGTH = 6;
      const publishPiece = Random.pickUniqueNumbersInRange(
        MINIMUN_NUMBER,
        MAXIMUN_NUMBER,
        NUMBER_LENGTH
      );
      this.publishList.push(publishPiece);
      Console.print(JSON.stringify(publishPiece).replace(/,/g, ", "));
    }
  }
}

module.exports = App;
