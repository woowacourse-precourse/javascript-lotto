const Machine = require('./Machine');
const Player = require('./Player');
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
    Console.print('done.')
  }
}

const app = new App();
app.play();

module.exports = App;
