const { Random, Console } = require("@woowacourse/mission-utils");
const { error_message } = require("./const");

const Lotto = require("./Lotto");
const Bonus = require("./Bonus");

class App {
  constructor() {
    this.lottoQuantity = 0;
    this.lottoArrays = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
  }

  play() {
    this.getPurchasePrice();
  }

  getPurchasePrice() {
    Console.readLine("구입금액을 입력해 주세요.\n", (price) => {
      this.checkPurchasePrice(price);
      this.printLottoQuantity(price);
      this.printLottoArrays();
    });
  }

  checkPurchasePrice(price) {
    if (price % 1000 !== 0)
      throw new Error(error_message.not_thousand_won_unit);
  }

  printLottoQuantity(price) {
    this.lottoQuantity = parseInt(price) / 1000;
    Console.print(`\n${this.lottoQuantity}개를 구매했습니다.`);
  }

  printLottoArrays() {
    for (let i = 0; i < this.lottoQuantity; i++) {
      const lottoNums = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedLottoNums = lottoNums.sort((a, b) => a - b);
      Console.print(sortedLottoNums);
      this.lottoArrays.push(sortedLottoNums);
    }
    this.enterWinningNumbers();
  }

  enterWinningNumbers() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (numbers) => {
      this.winningNumbers = numbers.split(",").map(Number);
      new Lotto(this.winningNumbers);

      this.enterBonusNumber();
    });
  }

  enterBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (number) => {
      this.bonusNumber = Number(number);
      new Bonus(this.bonusNumber, this.winningNumbers);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
