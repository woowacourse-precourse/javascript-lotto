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
    this.winningRanks = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
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

      this.getWinningStatistics();
    });
  }

  getWinningStatistics() {
    for (let lottoNumbers of this.lottoArrays) {
      this.compareLottoNumbers(lottoNumbers);
    }
    this.printWinningStatistics();
  }

  compareLottoNumbers(lottoNumbers) {
    let count = 0;
    for (let winningNumber of this.winningNumbers) {
      if (lottoNumbers.includes(winningNumber)) count++;
    }
    this.getWinningRanks(count, lottoNumbers);
  }

  getWinningRanks(count, lottoNumbers) {
    switch (count) {
      case 3:
        this.winningRanks.fifth++;
        break;

      case 4:
        this.winningRanks.fourth++;
        break;

      case 5:
        lottoNumbers.includes(this.bonusNumber)
          ? this.winningRanks.second++
          : this.winningRanks.third++;
        break;

      case 6:
        this.winningRanks.first++;
        break;
    }
  }

  printWinningStatistics() {
    Console.print("\n당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${this.winningRanks.fifth}`);
    Console.print(`4개 일치 (50,000원) - ${this.winningRanks.fourth}`);
    Console.print(`5개 일치 (1,500,000원) - ${this.winningRanks.third}`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.winningRanks.second}`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.winningRanks.first}`);
  }
}

const app = new App();
app.play();

module.exports = App;
