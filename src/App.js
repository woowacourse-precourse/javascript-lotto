const { Console } = require("@woowacourse/mission-utils");
const InputMoney = require("./InputMoney");

class App {
  constructor() {
    this.money = 0;
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.money = new InputMoney(money);
    });
  }
}

module.exports = App;
