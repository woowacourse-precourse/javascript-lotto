const { COMMAND } = require('../util/Message');
const { Console } = require('@woowacourse/mission-utils');
const CreateLotto = require('./CreateLotto');
const { MoneyExceptions, BonusExceptions } = require('./Exceptions');
const CompareNumbers = require('./CompareNumbers');
const Lotto = require('./Lotto');
const lotto = require('../util/lotto');
const { ZERO, DECIMAL_PLACES, FIFTH } = require('../util/constants');

class App {
  #money;
  #lottoArr;
  #winningArr;
  #bonus;

  play() {
    this.getUserMoney();
  }

  getUserMoney() {
    Console.readLine(COMMAND.MONEY, (money) => {
      this.#money = new MoneyExceptions(money).check();
      this.#lottoArr = new CreateLotto(money).make();
      this.getWinning();
    });
  }

  getWinning() {
    Console.readLine(COMMAND.WINNING, (winning) => {
      new Lotto(winning.split(','));
      this.#winningArr = winning.split(',').map((num) => parseInt(num));
      this.getBonus();
    });
  }

  getBonus() {
    Console.readLine(COMMAND.BONUS, (bonus) => {
      this.#bonus = new BonusExceptions(bonus).check(this.#winningArr);
      this.printResult();
    });
  }

  printResult() {
    const result = new CompareNumbers(
      this.#lottoArr,
      this.#winningArr,
      this.#bonus
    ).getResult();

    Console.print(COMMAND.RESULT);

    for (let rank = FIFTH; rank > ZERO; rank--) {
      Console.print(`${lotto[rank].message}${result[rank]}개`);
    }

    Console.print(`${COMMAND.YIELD}${this.calculateYield(result)}%입니다.`);
    this.end();
  }

  calculateYield(result) {
    const income = result.reduce((acc, num, rank) => {
      return (acc += lotto[rank].amount * num);
    });
    const percent = (income / this.#money) * 100;
    return percent.toFixed(DECIMAL_PLACES);
  }

  end() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
