const Machine = require('./Machine');
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
    Console.print(this.machine.insertedMoney);
  }
}

const app = new App();
app.play();

module.exports = App;
