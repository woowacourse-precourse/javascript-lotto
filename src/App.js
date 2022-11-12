const Machine = require('./Machine');
const Player = require('./Player');
const Lotto = require('./Lotto');
const { Console } = require('./util');
const { MESSAGES } = require('./constants');

class App {
  play() {
    this.#payMoney();
  }

  #payMoney() {
    Console.readLine(`${MESSAGES.START}\n`, (money) => {
      this.machine = new Machine(money);
      this.#issueLottery();
    });
  }

  #issueLottery() {
    const tickets = this.machine.insertMoney(this.machine.insertedMoney);
    this.player = new Player(tickets);
    this.#askWinningNum();
  }

  #askWinningNum() {
    Console.readLine(`\n${MESSAGES.GET_LOTTOS}\n`, (numbers) => {
      this.lotto = new Lotto(numbers.split(',').map(Number));
      this.#askBonusNum();
    });
  }

  #askBonusNum() {
    Console.readLine(`\n${MESSAGES.GET_BONUS}\n`, (number) => {
      this.lotto.winningNums = number;
      this.#showResult();
    });
  }

  #showResult() {
    Console.print(this.lotto.winningNums);
  }
}

const app = new App();
app.play();

module.exports = App;
