const { Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      Console.print(money);
    });
  }
}

module.exports = App;
