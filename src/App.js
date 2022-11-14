const { COMMAND } = require('../util/Message');
const { Console } = require('@woowacourse/mission-utils');
const CreateLotto = require('./CreateLotto');
const {
  MoneyExceptions,
  WinningExceptions,
  BonusExceptions,
} = require('./Exceptions');
const CompareNumbers = require('./CompareNumbers');
const lotto = require('../util/lotto');

class App {
  constructor() {
    this.money = 0;
    this.lottoArr = [];
    this.winningArr = [];
    this.bonus = 0;
  }

  play() {
    this.getUserMoney();
  }

  getUserMoney() {
    Console.readLine(COMMAND.MONEY, (money) => {
      new MoneyExceptions(money).check();
      this.money = parseInt(money);
      this.lottoArr = new CreateLotto(money).make();
      this.getWinning();
    });
  }

  getWinning() {
    Console.readLine(COMMAND.WINNING, (winning) => {
      new WinningExceptions(winning.split(',')).check();
      this.winningArr = winning.split(',').map((num) => parseInt(num));
      this.getBonus();
    });
  }

  getBonus() {
    Console.readLine(COMMAND.BONUS, (bonus) => {
      new BonusExceptions(bonus).check(this.winningArr);
      this.bonus = parseInt(bonus);
      const result = new CompareNumbers(
        this.lottoArr,
        this.winningArr,
        this.bonus
      ).getResult();
      this.printResult(result);
    });
  }

  printResult(result) {
    Console.print(COMMAND.RESULT);
    for (let index = 5; index > 0; index--) {
      Console.print(`${lotto[index].message}${result[index]}개`);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
