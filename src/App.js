const Exception = require("./error/exception");
const PurchaseError = require("./error/purchase");
const BonusNumber = require("./error/bonusNumber");
const ChangeLotto = require("./ChangeLotto");
const Lotto = require("./error/Lotto");
const CompareLotto = require("./CompareLotto");
const Profit = require("./Profit");

const { Console } = require("@woowacourse/mission-utils");
const {
  COMMAND,
  GUIDE,
  RANK,
  PRIZE_MONEY,
  CORRECT,
  UNIT,
} = require("./utils/constant");
const { TITLE, LINE, WON, BAR, PCS } = GUIDE;

class App {
  constructor() {
    this.exception = new Exception();
    this.purchaseAmount = UNIT.DEFAULT;
    this.bonusNumber = UNIT.DEFAULT;
    this.profit = UNIT.DEFAULT;
    this.userLotto = UNIT.STORAGE_SPACE;
    this.winNumber = UNIT.STORAGE_SPACE;
    this.rankCnt = {};
  }

  printResult() {
    const ranking = Object.keys(RANK).slice(0, 5).reverse();
    Console.print(`\n${TITLE}\n${LINE}`);
    ranking.forEach((nowRank) => {
      const prizeMoney = this.makeWonUnit(PRIZE_MONEY[nowRank]);
      Console.print(
        `${CORRECT[nowRank]} (${prizeMoney}${WON}) ${BAR} ${this.rankCnt[nowRank]}${PCS}`
      );
    });
    Console.print(`${GUIDE.TOTAL_PROFIT} ${this.profit}${GUIDE.PERCENT}`);
  }

  makeWonUnit(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getProfit() {
    const [integer, decimal] = new Profit(this.purchaseAmount, this.rankCnt)
      .calculate()
      .split(".")
      .map(Number);
    this.profit = `${this.makeWonUnit(integer)}.${decimal}`;
    this.printResult();
    Console.close();
  }

  compareNumber() {
    this.rankCnt = new CompareLotto(
      this.userLotto,
      this.winNumber,
      this.bonusNumber
    ).compare();
    this.getProfit();
  }

  askBonusNumber() {
    Console.readLine(`\n${COMMAND.BONUS}\n`, (input) => {
      this.exception.isAllow(new BonusNumber(input), this.winNumber);
      this.bonusNumber = input;
      this.compareNumber();
    });
  }

  askWinNumber() {
    Console.readLine(`\n${COMMAND.WIN}\n`, (input) => {
      this.winNumber = input.split(",").map(Number);
      this.exception.isAllow(new Lotto(this.winNumber));
      this.askBonusNumber();
    });
  }

  play() {
    Console.readLine(`${COMMAND.BUY}\n`, (purchaseAmount) => {
      this.exception.isAllow(new PurchaseError(purchaseAmount));
      this.purchaseAmount = purchaseAmount;
      this.userLotto = new ChangeLotto(this.purchaseAmount).change();
      this.askWinNumber();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
