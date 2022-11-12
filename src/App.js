const { Console, Random } = require("@woowacourse/mission-utils");
const Money = require("./Money");
const Type = require("./Type");
const Lotto = require("./Lotto");
const Bonus = require("./Bonus");
const Count = require("./Count");
const Result = require("./Result");

class App {
  constructor() {
    this.money = 0;
    this.quantity = 0;
    this.publishList = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
  }

  play() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      new Money(money);
      this.money = money;
      this.printQuantity(this.money);
    });
  }

  printQuantity(money) {
    const UNIT = 1000;
    this.quantity = parseInt(money, 10) / UNIT;
    Console.print(`\n${this.quantity}개를 구매했습니다.`);
    this.publishLotto(this.quantity);
  }

  publishLotto(quantity) {
    for (let turn = 0; turn < quantity; turn++) {
      const MINIMUN_NUMBER = 1;
      const MAXIMUN_NUMBER = 45;
      const NUMBER_LENGTH = 6;
      const publishPiece = Random.pickUniqueNumbersInRange(
        MINIMUN_NUMBER,
        MAXIMUN_NUMBER,
        NUMBER_LENGTH
      );
      this.publishList.push(publishPiece);
      Console.print(JSON.stringify(publishPiece).replace(/,/g, ", "));
    }

    this.inputWinning();
  }

  inputWinning() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (numbers) => {
      this.type = new Type();
      this.winningNumbers = this.type.changeType(numbers);
      new Lotto(this.winningNumbers);
      this.inputBonus();
    });
  }

  inputBonus() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (number) => {
      this.bonusNumber = parseInt(number, 10);
      new Bonus(this.bonusNumber, this.winningNumbers);
      this.getReward();
    });
  }

  getReward() {
    const count = new Count(
      this.publishList,
      this.winningNumbers,
      this.bonusNumber
    );

    this.printResult(count);
    this.countBenefit(count);
  }

  printResult(count) {
    Console.print(`\n당첨 통계\n---`);

    count.quantityList.forEach((quantity, index) => {
      const result = new Result(
        quantity,
        count.numberList[index],
        count.rewardList[index]
      );
      count.totalReward += result.totalReward;
    });
  }

  countBenefit(count) {
    const benefit = (count.totalReward / this.money) * 100;
    const benefitRate = Math.round(benefit * 10) / 10;
    this.printBenefit(benefitRate);
  }

  printBenefit(rate) {
    Console.print(`총 수익률은 ${rate}%입니다.`);
    Console.close();
  }
}

module.exports = App;
