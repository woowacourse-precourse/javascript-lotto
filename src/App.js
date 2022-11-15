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

class App {
  constructor() {
    this.exception = new Exception();
    this.purchaseAmount = UNIT.DEFAULT;
    this.bonusNumber = UNIT.DEFAULT;
    this.profit = UNIT.DEFAULT;
    this.userLotto = UNIT.STORAGE_SPACE;
    this.winNumber = UNIT.STORAGE_SPACE;
    this.rank = {};
  }

  printResult() {
    Console.print(`\n${GUIDE.TITLE}\n${GUIDE.LINE}`);
    const rankNumber = Object.keys(RANK).slice(0, 5).reverse();
    rankNumber.forEach((nowRank) => {
      Console.print(
        `${CORRECT[nowRank]} (${this.divideThousandUnit(
          PRIZE_MONEY[RANK[nowRank]]
        )}${GUIDE.WON}) ${GUIDE.BAR} ${this.rank[nowRank]}${GUIDE.PCS}`
      );
    });
    Console.print(`${GUIDE.TOTAL_PROFIT} ${this.profit}${GUIDE.PERCENT}`);
  }

  divideThousandUnit(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getProfit() {
    const [integer, decimal] = new Profit(this.purchaseAmount, this.rank)
      .calculate()
      .split(".")
      .map(Number);
    this.profit = `${this.divideThousandUnit(integer)}.${decimal}`;
    this.printResult();
    Console.close();
  }

  compareNumber() {
    this.rank = new CompareLotto(
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
