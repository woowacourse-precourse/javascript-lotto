const { Console } = require("@woowacourse/mission-utils");
const { PRICE_PER_LOTTO, MESSAGE } = require("./domain/constant");

class App {
  play() {
    this.start();
  }

  start() {
    Console.print(MESSAGE.START_GAME);
    Console.readLine(MESSAGE.ENTER_PURCHASE_AMOUNT, (purchaseAmount) =>
      this.validatePerchaseAmount(purchaseAmount)
    );
  }

  validatePerchaseAmount(purchaseAmount) {}
}

module.exports = App;
