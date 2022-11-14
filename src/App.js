const Purchase = require("./Purchase");
const WinningNumber = require("./Generator");
const { Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    this.purchaseLotto();
    this.generateWinningNumber();
  }

  purchaseLotto() {
    Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      this.purchase = new Purchase(input);
      this.purchase.quantityOfPurchase();
    });
  }

  generateWinningNumber() {
    this.winningNumber = new WinningNumber();
  }
}

const app = new App();
app.play();

module.exports = App;
