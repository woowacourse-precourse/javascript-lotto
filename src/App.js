const { Console } = require("@woowacourse/mission-utils");
const Money = require("./Money");

class App {
  constructor() {
    this.money = 0;
  }

  play() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      new Money(money);
      this.money = money;
    });
  }
}

module.exports = App;
