const { Random, Console } = require("@woowacourse/mission-utils");
const { error_message } = require("./const");

class App {
  play() {
    this.getPurchasePrice();
  }

  getPurchasePrice() {
    Console.readLine("구입금액을 입력해 주세요.\n", (price) => {
      this.checkPurchasePrice(price);
      price;
    });
  }

  checkPurchasePrice(price) {
    if (price % 1000 !== 0)
      throw new Error(error_message.not_thousand_won_unit);
  }
}

const app = new App();
app.play();

module.exports = App;
