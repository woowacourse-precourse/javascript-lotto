const { Console, Random } = require("@woowacourse/mission-utils");
const Money = require("./Money");
const Type = require("./Type");
const Lotto = require("./Lotto");
const Bonus = require("./Bonus");
const Count = require("./Count");
const Result = require("./Result");
const { INPUT, OUTPUT } = require("./constants/messges");
const { LOTTO, MONEY } = require("./constants/values");

class App {
  constructor() {
    this.money = 0;
    this.quantity = 0;
    this.publishList = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
  }

  play() {
    Console.readLine(`${INPUT.BUY}${OUTPUT.LINE}`, (money) => {
      new Money(money);
      this.money = money;
      this.printQuantity(this.money);
    });
  }

  printQuantity(money) {
    this.quantity = parseInt(money, 10) / MONEY.UNIT;
    Console.print(`${OUTPUT.LINE}${this.quantity}${OUTPUT.BUY}`);
    this.publishLotto(this.quantity);
  }

  publishLotto(quantity) {
    for (let turn = 0; turn < quantity; turn++) {
      const publishPiece = Random.pickUniqueNumbersInRange(
        LOTTO.MINIMUM,
        LOTTO.MAXIMUM,
        LOTTO.LENGTH
      );
      this.publishList.push(publishPiece);
      Console.print(JSON.stringify(publishPiece).replace(/,/g, ", "));
    }

    this.inputWinning();
  }

  inputWinning() {
    Console.readLine(
      `${OUTPUT.LINE}${INPUT.WINNNG}${OUTPUT.LINE}`,
      (numbers) => {
        this.type = new Type();
        this.winningNumbers = this.type.changeType(numbers);
        new Lotto(this.winningNumbers);
        this.inputBonus();
      }
    );
  }

  inputBonus() {
    Console.readLine(`${OUTPUT.LINE}${INPUT.BONUS}${OUTPUT.LINE}`, (number) => {
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
    Console.print(`${OUTPUT.LINE}${OUTPUT.RESULT_TITLE}`);

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
