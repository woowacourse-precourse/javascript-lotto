const { Console } = require("@woowacourse/mission-utils");
const Lottery = require("./Lottery");

class App {
  play() {
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (amount) => {
      const lottery = new Lottery(amount);
      lottery.inputSixNumbers();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
