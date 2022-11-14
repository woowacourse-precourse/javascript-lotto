const Player = require('./Player');
const Lotto = require('./Lotto');
const Machine = require('./Machine');
const { Console, Stat } = require('./util');
const { MESSAGES, CONSTANTS } = require('./constants');

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
      this.#getStatsResult(this.player.tickets, this.lotto.winningNums);
    });
  }
  
  #getStatsResult(tickets, luckyNum) {
    const count = Stat.countWinning(tickets, luckyNum);
    this.player.sumAllProfit(count);
    const totalProfit = this.player.profit;
    const paidMoney = this.machine.insertedMoney;
    const rateOfReturn = Stat.getROR(totalProfit, paidMoney);
    this.#printResults(count, rateOfReturn);
  }
  
  #printResults(count, rateOfReturn) {
    const { ZERO, FINISH, STATTEXT } = CONSTANTS
    Console.print('\n당첨 통계\n---');

    for (let index = ZERO; index < FINISH; index++) {
      Console.print(STATTEXT[index]+count[index]+'개');
    }

    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
    Console.close();
  }

}

const lottery = new App();
lottery.play();

module.exports = App;
