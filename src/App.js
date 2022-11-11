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

      Console.askAndGetUserInput("\n" + Console.ASK_WINNING_NUMBER, (winningNumbers) => {
        this.winningNumbers = winningNumbers
          .split(",")
          .map(Number)
          .sort((a, b) => (a > b ? 1 : -1));

        Console.askAndGetUserInput("\n" + Console.ASK_BONUS_NUMBER, (bonusNumber) => {
          this.bonusNumber = Number(bonusNumber);

          Console.print(Console.STATISTICS);

          Object.entries(
            this.lottos.reduce(
              (acc, lotto) => {
                const sameNumberCount = this.countSameNumberWithWinningNumber(lotto);

                switch (sameNumberCount) {
                  case 3:
                    acc["3개 일치"] += 1;
                    break;
                  case 4:
                    acc["4개 일치"] += 1;
                    break;
                  case 5:
                    acc["5개 일치"] += 1;
                    break;
                  case 6:
                    acc["6개 일치"] += 1;
                    break;
                }

                if (this.bonusNumber === lotto.includes(this.bonusNumber) && sameNumberCount === 5) {
                  acc["5개 일치"] -= 1;
                  acc["5개 일치, 보너스 볼 일치"] += 1;
                }

                return acc;
              },
              { "3개 일치": 0, "4개 일치": 0, "5개 일치": 0, "5개 일치, 보너스 볼 일치": 0, "6개 일치": 0 }
            )
          ).forEach(([a, b]) => console.log(a, b));
        });
      });
    });
  }

  countSameNumberWithWinningNumber(lotto) {
    return lotto.filter((number) => this.winningNumbers.includes(number)).length;
  }
}

new App().play();

module.exports = App;
