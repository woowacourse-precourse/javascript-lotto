const { Console } = require("@woowacourse/mission-utils");
const MakeLotteries = require("./components/MakeLotteries");

class App {
  play() {
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (amount) => {
      const makeLotteries = new MakeLotteries(amount);
      makeLotteries.inputSixNumbers();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
