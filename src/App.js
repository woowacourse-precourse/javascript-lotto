const Lotto = require("./Lotto");
const Console = require("./Console");
const Validation = require("./Validation");

class App {
  constructor() {
    this.lottos = [];
  }

  play() {
    Console.askAndGetUserInput(Console.ASK_PURCHASE_AMOUNT_MESSAGE, (purchaseAmount) => {
      Validation.checkPurchaseAmount(purchaseAmount);

      const lottoCount = Console.calculateLottoCountWithPurchaseAmount(purchaseAmount);
      Console.print(`\n${lottoCount}${Console.LOTTO_COUNT}`);

      Lotto.generateLottoWithLottoCount(lottoCount)
        .map((lotto) => lotto.lottoNumbers)
        .forEach((lotto) => Console.print(lotto));
    });
  }
}

new App().play();

module.exports = App;
