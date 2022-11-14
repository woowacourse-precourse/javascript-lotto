const { Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.inputMoney = 0;
  }

  play() {
    Console.readLine("구입금액을 입력해 주세요.\n", (inputMoney) => {
      this.inputMoney = inputMoney;
    });
  }
}

const app = new App();
app.play();
// module.exports = App;
