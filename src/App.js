const { Console } = require("@woowacourse/mission-utils");
class App {
  play() {
    this.requestMoney();
  }
  requestMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {});
  }
}

const app = new App();
app.play();

module.exports = App;
