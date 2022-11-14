const { Console } = require("@woowacourse/mission-utils");
const CountLotto = require("./CountLotto");
class App {
  constructor() {
    this.game = new CountLotto();
  }
  play() {
    this.requestMoney();
  }
  requestMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.game.setLottoCount(money);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
