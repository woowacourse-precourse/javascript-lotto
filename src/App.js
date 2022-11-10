const Console = require("./Console");
const Validation = require("./Validation");

class App {
  play() {
    Console.askAndGetUserInput(Console.ASK_PURCHASE_AMOUNT_MESSAGE, (purchaseAmount) => {
      Validation.checkPurchaseAmount(purchaseAmount);

      const lottoCount = Console.calculateLottoCountWithPurchaseAmount(purchaseAmount);
      Console.print(`\n${lottoCount}${Console.LOTTO_COUNT}`);
    });
  }
}

new App().play();

module.exports = App;
