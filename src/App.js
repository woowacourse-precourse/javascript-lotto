const { Console } = require("@woowacourse/mission-utils");
const { PRICE_PER_LOTTO, MESSAGE } = require("./domain/constant");

class App {
  play() {
    this.start();
  }

  start() {
    Console.print(MESSAGE.startGame);
    Console.readLine(MESSAGE.enterPurchaseAmount, (purchaseAmount) =>
      this.validatePerchaseAmount(purchaseAmount)
    );
  }

  validatePerchaseAmount(purchaseAmount) {}
}

module.exports = App;
