const Lotto = require("./Lotto");
const Console = require("./Console");
const Validation = require("./Validation");

class App {
  constructor() {
    this.lottos = [];
    this.winningNumbers = [];
    this.bonusNumber = null;
  }

  play() {
    Console.askAndGetUserInput(Console.ASK_PURCHASE_AMOUNT_MESSAGE, (purchaseAmount) => {
      Validation.checkPurchaseAmount(purchaseAmount);

      const lottoCount = Console.calculateLottoCountWithPurchaseAmount(purchaseAmount);
      Console.print(`\n${lottoCount}${Console.LOTTO_COUNT}`);

      Lotto.generateLottoWithLottoCount(lottoCount)
        .map((lotto) => lotto.lottoNumbers)
        .forEach((lotto) => {
          this.lottos.push(lotto);
          Console.print(lotto);
        });

      // Console.print("\n" + Console.ASK_WINNING_NUMBER);

      Console.askAndGetUserInput("\n" + Console.ASK_WINNING_NUMBER, (winningNumbers) => {
        this.winningNumbers = winningNumbers.split(",").map(Number);

        Console.askAndGetUserInput("\n" + Console.ASK_BONUS_NUMBER, (bonusNumber) => {
          this.bonusNumber = Number(bonusNumber);
        });
      });
    });
  }
}

new App().play();

module.exports = App;
