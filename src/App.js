const Player = require('./Player');
const Lotto = require('./Lotto');
const Machine = require('./Machine');
const { Console, Statistics } = require('./util');
const { MESSAGES, PRIZE, RESULTS } = require('./constants');

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
    const [tickets, luckyNum] = [this.player.pocket, this.lotto.winningNums];
    const count = Statistics.countWinning(tickets, luckyNum);
    let profit = 0;
    Console.print('\n당첨 통계\n---');
    for (let i = 0; i < count.length; i++) {
      Console.print(`${RESULTS[i]}${count[i]}개`);
      profit += Number(PRIZE[i]) * Number(count[i]);
    }
    const ROR = Statistics.rateOfReturn(profit, this.machine.insertedMoney);
    Console.print(`총 수익률은 ${ROR}%입니다.`);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
