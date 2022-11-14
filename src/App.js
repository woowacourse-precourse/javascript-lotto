const { Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.money = 0;
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.inputMoney = money;
    });
  }
}

const app = new App();
app.play();
// module.exports = App;
