const { COMMAND } = require('../util/Message');
const { Console } = require('@woowacourse/mission-utils');
const CreateLotto = require('./CreateLotto');

class App {
  constructor() {
    this.lottos = [];
  }

  play() {
    this.getUserMoney();
  }

  getUserMoney() {
    Console.readLine(COMMAND.MONEY, (money) => {
      const createLotto = new CreateLotto(money);
      this.lottos = createLotto.make();
      this.getWinning();
    });
  }

  getWinning() {
    Console.readLine(COMMAND.WINNING, (winning) => {
      const winningArr = winning.split(',').map((num) => parseInt(num));
    });
  }
}

const app = new App();
app.play();

module.exports = App;
