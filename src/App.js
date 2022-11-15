const { Console, Random } = require("@woowacourse/mission-utils");
const Money = require("./Money");
const Lotto = require("./Lotto");
const Bonus = require("./Bonus");
const Result = require("./Result");

class App {
  constructor() {
    this.money = 0;
    this.purchaseQuantity = 0;
    this.lottoList = [];
    this.winningNumbers;
    this.bonusNumber;
    this.profit = 0;
  }

  play() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      new Money(money);
      this.money = money;
      this.printPurchaseQuantity(this.money);
    });
  }

  printPurchaseQuantity(money) {
    const UNIT = 1000;
    const convertIntoQuantity = money / UNIT;
    this.purchaseQuantity = convertIntoQuantity;
    Console.print(`\n${this.purchaseQuantity}개를 구매했습니다.`);

    this.issueLotto(this.purchaseQuantity);
  }

  issueLotto(quantity) {
    const START_LOTTO_NUMBER = 1;
    const END_LOTTO_NUMBER = 45;
    const TOTAL_LOTTO_COUNT = 6;

    for (let line = 0; line < quantity; line++) {
      const lotto = Random.pickUniqueNumbersInRange(
        START_LOTTO_NUMBER,
        END_LOTTO_NUMBER,
        TOTAL_LOTTO_COUNT
      );
      Console.print(lotto);
      this.lottoList.push(lotto);
    }

    this.inputWinningNumbers();
  }

  inputWinningNumbers() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (winnigNumbers) => {
      this.winningNumbers = winnigNumbers.split(",");
      new Lotto(this.winningNumbers);
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (bonusNumber) => {
      new Bonus(bonusNumber);
      this.bonusNumber = bonusNumber;
      this.getResult();
    });
  }

  getResult() {
    const compare = new Result(
      this.lottoList,
      this.winningNumbers,
      this.bonusNumber
    );
    const getProfit = compare.profit;
    this.printTotalProfit(getProfit);
  }
  printTotalProfit(getProfit) {
    const PERCENTAGE = 100;
    const profitPercentage = (getProfit / this.money) * PERCENTAGE;
    this.profit = Math.round(profitPercentage * 10) / 10;
    Console.print(`총 수익률은 ${this.profit}%입니다.`);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
