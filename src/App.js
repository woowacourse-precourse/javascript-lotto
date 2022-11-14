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

      this.setQuantity(this.money);
    });
  }

  setQuantity(money) {
    this.quantity = money / MONEY.UNIT;
    Console.print(`${OUTPUT.LINE}${OUTPUT.BUY(this.quantity)}`);

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

    this.getWinning();
  }

  getWinning() {
    Console.readLine(
      `${OUTPUT.LINE}${INPUT.WINNNG}${OUTPUT.LINE}`,
      (numbers) => {
        const lotto = new Lotto(numbers);
        this.winningNumbers = lotto.changeIntoNumber();

        this.getBonus();
      }
    );
  }

  getBonus() {
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

    this.setResult(count);
    this.getBenefit(count.totalReward, this.money);
  }

  setResult(count) {
    Console.print(`${OUTPUT.LINE}${OUTPUT.RESULT_TITLE}`);

    Object.values(count.quantityList).forEach((quantity, index) => {
      const result = new Result(
        quantity,
        count.numberList[index],
        count.rewardList[index]
      );
      count.totalReward += result.totalReward;
    });
  }

  getBenefit(totalReward, money) {
    const benefit = (totalReward / money) * CALCULATION.PERCENTILE;
    const benefitRate = Math.round(benefit * 10) / 10;

    this.setBenefit(benefitRate);
  }

  setBenefit(rate) {
    Console.print(OUTPUT.BENEFIT(rate));
    Console.close();
  }
}

module.exports = App;
