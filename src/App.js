const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  play() {
    this.purchaseAmount();
  }

  purchaseAmount() {
    Console.readLine("구매금액을 입력해 주세요.\n", (amount) => {
      Console.close();
      Console.print(amount);
    });
  }
}

const app = new App();
app.play();
module.exports = App;
