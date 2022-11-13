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
  #exception;
  #changeLotto;

  constructor() {
    this.Lotto = new Lotto();
    this.#exception = new Exception();
    this.#changeLotto = new ChangeLotto();
    this.compareLotto = new CompareLotto();
    this.input = UNIT.DEFAULT;
    this.bonusNumber = UNIT.DEFAULT;
    this.profit = UNIT.DEFAULT;
    this.userLotto = UNIT.STORAGE_SPACE;
    this.winNumber = UNIT.STORAGE_SPACE;
    this.rank = {};
  }

  divideThousandUnit(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  askWinNumber() {
    Console.readLine(`\n${COMMAND.WIN}\n`, (input) => {
      this.winNumber = input.split(",").map(Number);
      this.#exception.isAllow(new Lotto(this.winNumber));
      this.askBonusNumber();
    });
  }

  askBonusNumber() {
    Console.readLine(`\n${COMMAND.BONUS}\n`, (input) => {
      this.#exception.isAllow(new BonusNumber(input), this.winNumber);
      this.bonusNumber = input;
      this.compareNumber();
    });
  }

  compareNumber() {
    this.rank = new CompareLotto(
      this.userLotto,
      this.winNumber,
      this.bonusNumber
    ).compare();
    this.getProfit();
  }

  getProfit() {
    const [integer, decimal] = new Profit(this.input, this.rank)
      .calculate()
      .split(".")
      .map(Number);
    this.profit = `${this.divideThousandUnit(integer)}.${decimal}`;
    this.printResult();
    Console.close();
  }

  printResult() {
    Console.print(`\n${GUIDE.TITLE}\n${GUIDE.LINE}`);
    Object.keys(RANK)
      .slice(0, 5)
      .reverse()
      .forEach((nowRank) => {
        Console.print(
          `${CORRECT[nowRank]} (${this.divideThousandUnit(
            PRIZE_MONEY[RANK[nowRank]]
          )}${GUIDE.WON}) ${GUIDE.BAR} ${this.rank[nowRank]}${GUIDE.PCS}`
        );
      });
    Console.print(`${GUIDE.TOTAL_PROFIT} ${this.profit}${GUIDE.PERCENT}`);
  }

  play() {
    Console.readLine(`${COMMAND.BUY}\n`, (input) => {
      this.#exception.isAllow(new PurchaseError(input));
      this.input = input;
      this.userLotto = this.#changeLotto.change(this.input);
      this.askWinNumber();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
