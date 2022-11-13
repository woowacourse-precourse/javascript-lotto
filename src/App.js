const Player = require('./Player');
const Lotto = require('./Lotto');
const Machine = require('./Machine');
const { Console, Statistics } = require('./util');
const { MESSAGES, RESULTS } = require('./constants');

class App {
  play() {
    this.#payMoney();
  }

  #payMoney() {
    Console.readLine(`${MESSAGES.PAYMONEY}\n`, (money) => {
      this.machine = new Machine(money);
      this.#issueLottery(money);
    });
  }

  #issueLottery(money) {
    const tickets = this.machine.insertMoney(money);
    this.player = new Player(tickets);
    this.#askWinningNum();
  }

  #askWinningNum() {
    Console.readLine(`\n${MESSAGES.ASK_WINNING}\n`, (numbers) => {
      this.lotto = new Lotto(numbers.split(',').map(Number));
      this.#askBonusNum();
    });
  }

  #askBonusNum() {
    Console.readLine(`\n${MESSAGES.ASK_BONUS}\n`, (number) => {
      this.lotto.winningNums = number;
      this.#showResult(this.player.pocket, this.lotto.winningNums);
    });
  }

  #showResult(tickets, luckyNum) {
    const count = Statistics.countWinning(tickets, luckyNum);
    const { PRIZE, TEXT } = RESULTS
    let profit = 0;
    Console.print('\n당첨 통계\n---');
    for (let i = 0; i < count.length; i++) {
      Console.print(TEXT[i] + count[i] + '개');
      profit += PRIZE[i] * count[i];
    }
    const ROR = Statistics.rateOfReturn(profit, this.machine.insertedMoney);
    Console.print(`총 수익률은 ${ROR}%입니다.`);
    Console.close();
  }
}

const lottery = new App();
lottery.play();

module.exports = App;
