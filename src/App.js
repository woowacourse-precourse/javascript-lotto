const { Console, Random } = require("@woowacourse/mission-utils");
const Money = require("./Money");
const Lotto = require("./Lotto");
const Bonus = require("./Bonus");
const Count = require("./Count");
const Result = require("./Result");
const { INPUT, OUTPUT } = require("./constants/messges");
const { LOTTO, MONEY, CALCULATION } = require("./constants/values");

class App {
  constructor() {
    this.money = 0;
    this.quantity = 0;
    this.publishList = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
  }

  play() {
    this.getMoney();
  }

  getMoney() {
    Console.readLine(`${INPUT.BUY}${OUTPUT.LINE}`, (money) => {
      this.money = new Money(money).changeIntoNumber();

      this.printQuantity(this.money);
    });
  }

  printQuantity(money) {
    this.quantity = money / MONEY.UNIT;
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
        const lotto = new Lotto(numbers);
        this.winningNumbers = lotto.changeIntoNumber();

        this.inputBonus();
      }
    );
  }

  inputBonus() {
    Console.readLine(`${OUTPUT.LINE}${INPUT.BONUS}${OUTPUT.LINE}`, (number) => {
      this.bonusNumber = new Bonus().changeIntoNumber(
        number,
        this.winningNumbers
      );

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
    this.countBenefit(count.totalReward, this.money);
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

  countBenefit(totalReward, money) {
    const benefit = (totalReward / money) * CALCULATION.PERCENTILE;
    const benefitRate = Math.round(benefit * 10) / 10;

    this.printBenefit(benefitRate);
  }

  printBenefit(rate) {
    Console.print(OUTPUT.BENEFIT(rate));
    Console.close();
  }
}

module.exports = App;
