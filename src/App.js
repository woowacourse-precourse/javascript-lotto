const Console = require("@woowacourse/mission-utils").Console;
const appConst = require("./constant/AppConst");
const Purchase = require("./Purchase");
const Lotto = require("./Lotto");
const BonusNumber = require("./BonusNumber");
const Result = require("./Result");

class App {
  constructor() {
    this.bundleOfLotto = null;
    this.userLotto = null;
  }

  play() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    Console.readLine(appConst.ASK_AMOUNTS_MESSAGE, (amount) => {
      const purchase = new Purchase(amount);
      this.bundleOfLotto = Purchase.createRandomLotto(purchase.numberOfLotto);

      this.showNumberOfPurchasedLotto(purchase.numberOfLotto);
      this.showEveryLotto();

      this.getWinningNumber();
    });
  }

  showNumberOfPurchasedLotto(amount) {
    Console.print(`\n${amount}개를 구매했습니다.`);
  }

  showEveryLotto() {
    this.bundleOfLotto.forEach((item) => {
      Console.print(`[${item.join(", ")}]`);
    });
  }

  getWinningNumber() {
    Console.readLine(appConst.ASK_WINNING_NUMBER_MESSAGE, (userInput) => {
      const arrayedUserInput = Lotto.getArrayedUserInput(userInput);
      Lotto.checkUesrInputHaveOnlyNumberAndComma(arrayedUserInput);

      const splitedInput = Lotto.getSplitedUserInput(userInput);
      Lotto.checkWinningNumberStartZero(splitedInput);
      this.userLotto = Lotto.getUserLotto(splitedInput);
      new Lotto(this.userLotto);

      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(appConst.ASK_BONUS_NUMBER, (bonus) => {
      new BonusNumber(this.userLotto, bonus);

      const result = new Result(this.bundleOfLotto, this.userLotto, bonus);
      result.calculateEachLotto();

      this.showResult(result.rank);
      this.showEarningsRate(result.earningsRate);
    });
  }

  showResult(rank) {
    Console.print(appConst.NOTIFY_WINNING_STATE);

    rank.forEach((item, index) => {
      Console.print(`${appConst.CONDITION_OF_EACH_RANK[index]}` + `${item}개`);
    });
  }

  showEarningsRate(earningsRate) {
    Console.print(`총 수익률은 ${earningsRate}%입니다.`);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
