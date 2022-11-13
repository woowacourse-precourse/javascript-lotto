const { Random } = require("@woowacourse/mission-utils");

const Lotto = require("./Lotto");
const Console = require("./Console");
const Validation = require("./Validation");
const { THREE, FOUR, FIVE, FIVE_WITH_BONUS, SIX } = require("./constants");

class App {
  constructor() {
    this.lottos = [];
    this.winningNumbers = [];
    this.bonusNumber = null;
    this.winningHistory = {
      [THREE]: 0,
      [FOUR]: 0,
      [FIVE]: 0,
      [FIVE_WITH_BONUS]: 0,
      [SIX]: 0,
    };
  }

  play() {
    Console.askAndGetUserInput(Console.ASK_PURCHASE_AMOUNT_MESSAGE, (purchaseAmount) => {
      Validation.isValidPurchaseAmount(purchaseAmount);

      const lottoCount = Lotto.calculateLottoCountWithPurchaseAmount(purchaseAmount);
      Console.print(`\n${lottoCount}${Console.LOTTO_COUNT}`);

      this.generateLottoWithLottoCount(lottoCount);
      Console.printLotto(this.lottos);

      this.askWinningNumber();
    });
  }

  countSameNumberWithWinningNumber(lotto, winningNumbers) {
    return lotto.filter((number) => winningNumbers.includes(number)).length;
  }

  generateLottoWithLottoCount(lottoCount) {
    Array.from(
      { length: lottoCount },
      () => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => (a > b ? 1 : -1)))
    )
      .map((lotto) => lotto.lottoNumbers)
      .forEach((lotto) => {
        this.lottos.push(lotto);
      });
  }

  askWinningNumber() {
    Console.askAndGetUserInput("\n" + Console.ASK_WINNING_NUMBER, (winningNumbers) => {
      Validation.isValidWinningNumber(winningNumbers);

      this.winningNumbers = winningNumbers
        .split(",")
        .map(Number)
        .sort((a, b) => (a > b ? 1 : -1));

      this.askBonusNumber();
    });
  }

  askBonusNumber() {
    Console.askAndGetUserInput("\n" + Console.ASK_BONUS_NUMBER, (bonusNumber) => {
      this.bonusNumber = Number(bonusNumber);

      Console.print(Console.STATISTICS);

      console.log(
        this.lottos.reduce((acc, lotto) => {
          const sameNumberCount = this.countSameNumberWithWinningNumber(lotto, this.winningNumbers);

          switch (sameNumberCount) {
            case 3:
              acc[THREE] += 1;
              break;
            case 4:
              acc[FOUR] += 1;
              break;
            case 5:
              acc[FIVE] += 1;
              break;
            case 6:
              acc[SIX] += 1;
              break;
            default:
              break;
          }

          if (this.bonusNumber === lotto.includes(this.bonusNumber) && sameNumberCount === 5) {
            acc[FIVE] -= 1;
            acc[FIVE_WITH_BONUS] += 1;
          }

          return acc;
        }, this.winningHistory)
      );

      Console.close();
    });
  }
}

new App().play();

module.exports = App;
