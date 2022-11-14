const Purchase = require("./Purchase");
const { Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    this.purchaseLotto();
  }

  purchaseLotto() {
    Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      this.purchase = new Purchase(input);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
