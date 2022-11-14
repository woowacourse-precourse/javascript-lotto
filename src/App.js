const { COMMAND } = require('../util/Message');
const { Console } = require('@woowacourse/mission-utils');
const CreateLotto = require('./CreateLotto');

class App {
  constructor() {
    this.lottoArr = [];
    this.winningArr = [];
  }

  play() {
    this.getUserMoney();
  }

  getUserMoney() {
    Console.readLine(COMMAND.MONEY, (money) => {
      const createLotto = new CreateLotto(money);
      this.lottoArr = createLotto.make();
      this.getWinning();
    });
  }

  getWinning() {
    Console.readLine(COMMAND.WINNING, (winning) => {
      this.winningArr = winning.split(',').map((num) => parseInt(num));
    });
  }
}

const app = new App();
app.play();

module.exports = App;
