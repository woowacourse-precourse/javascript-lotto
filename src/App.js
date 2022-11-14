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
      Validation.isValidPurchaseAmount(Number(purchaseAmount));

      const lottoCount = Lotto.calculateLottoCountWithPurchaseAmount(Number(purchaseAmount));
      Console.print(`\n${lottoCount}${Console.LOTTO_COUNT}`);

      const lottos = this.generateLottoWithLottoCount(lottoCount);
      lottos.forEach((lotto) => this.lottos.push(lotto));
      Console.printLotto(this.lottos);

      this.askWinningNumber();
    });
  }

  countSameNumberWithWinningNumber(lotto, winningNumbers) {
    return lotto.filter((number) => winningNumbers.includes(number)).length;
  }

  generateLottoWithLottoCount(lottoCount) {
    return Array.from(
      { length: lottoCount },
      () => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => (a > b ? 1 : -1)))
    ).map((lotto) => lotto.lottoNumbers);
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
      Validation.isValidBonusNumber(Number(bonusNumber));
      this.bonusNumber = Number(bonusNumber);

      Console.print("\n" + Console.STATISTICS);

      this.calculateWinningHistory(this.lottos, this.winningNumbers, this.bonusNumber, this.winningHistory);
      this.printWinningHistory(this.winningHistory);

      const yeild = this.calculateYeild(this.lottos, this.winningHistory);

      Console.print(`총 수익률은 ${yeild}입니다.`);
      Console.close();
    });
  }

  calculateWinningHistory(lottos, winningNumbers, bonusNumber, winningHistory) {
    lottos.forEach((lotto) => {
      const sameNumberCount = this.countSameNumberWithWinningNumber(lotto, winningNumbers);

      if (sameNumberCount === 3) winningHistory[THREE] += 1;
      if (sameNumberCount === 4) winningHistory[FOUR] += 1;
      if (sameNumberCount === 5 && !lotto.includes(bonusNumber)) winningHistory[FIVE] += 1;
      if (sameNumberCount === 5) winningHistory[FIVE_WITH_BONUS] += 1;
      if (sameNumberCount === 6) winningHistory[SIX] += 1;
    });
  }

  printWinningHistory(winningHistory) {
    Console.print(
      Object.entries(winningHistory)
        .map(([key, value]) => {
          return `${key}${value}개`;
        })
        .join("\n")
    );
  }

  calculateYeild(lottos, winningHistory) {
    const totalPrize =
      winningHistory[THREE] * 5000 +
      winningHistory[FOUR] * 50000 +
      winningHistory[FIVE] * 1500000 +
      winningHistory[FIVE_WITH_BONUS] * 30000000 +
      winningHistory[SIX] * 2000000000;
    const totalPurchaseAmount = lottos.length * 1000;

    if (totalPurchaseAmount === 0) return 0 + "%";
    return Math.round((totalPrize / totalPurchaseAmount) * 1000) / 10 + "%";
  }
}

new App().play();

module.exports = App;
