const { Console, Random } = require("@woowacourse/mission-utils");
const Money = require("./Money");
const Type = require("./Type");
const Lotto = require("./Lotto");
const Bonus = require("./Bonus");
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
      new Bonus(number);
      this.bonusNumber = parseInt(number, 10);
      this.compare(this.publishList, this.winningNumbers, this.bonusNumber);
    });
  }

  compare(publish, winning, bonus) {
    let total = {
      three: 0,
      four: 0,
      five: 0,
      bonus: 0,
      six: 0,
    };

    publish.forEach((piece) => {
      let count = { winning: 0, bonus: 0 };
      piece.forEach((number) => {
        this.countWinning(number, winning, count);
        this.countBonus(number, bonus, count);
      });
      this.countTotal(count, total);
    });

    this.printResult(total);
  }

  countWinning(number, winning, count) {
    if (winning.includes(number)) {
      count.winning += 1;
    }
  }

  countBonus(number, bonus, count) {
    if (number === bonus) {
      count.bonus += 1;
    }
  }

  countTotal(count, total) {
    if (count.winning === 3) total.three += 1;
    if (count.winning === 4) total.four += 1;
    if (count.winning === 5) {
      if (count.bonus === 1) total.bonus += 1;
      else total.five += 1;
    }
    if (count.winning === 6) total.six += 1;
  }

  printResult(total) {
    Console.print(`\n당첨 통계\n---`);

    let totalReward = 0;
    Object.entries(total).forEach(([number, quantity]) => {
      const result = new Result([number, quantity]);
      totalReward += result.totalReward;
    });

    this.countBenefit(totalReward);
  }

  countBenefit(totalReward) {
    const benefit = (totalReward / this.money) * 100;
    const benefitRate = Math.round(benefit * 10) / 10;
    Console.print(benefitRate);
  }
}

module.exports = App;
