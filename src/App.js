const User = require('./User');
const { Console, Random } = require('@woowacourse/mission-utils');
const MESSAGE = require('./MESSAGE');

class App {
  #winNumber;
  #bonusNumber;

  play() {
    this.user = new User();
    this.getMoney();
  }

  getMoney() {
    Console.readLine(MESSAGE.INPUT.MONEY, (money) => {
      this.user.buyLottos(Number(money));
      this.drawLotto();
    });
  }

  drawLotto() {
    Console.readLine(MESSAGE.INPUT.WINNUMBER, (numbers) => {
      let WINNUMBER = numbers.split(',').map((v) => Number(v));
      this.#winNumber = WINNUMBER;
      this.drawBonus();
    });
  }

  drawBonus() {
    Console.readLine(MESSAGE.INPUT.BONUSNUMBER, (number) => {
      this.#bonusNumber = number;
    });
  }
}

const app = new App();
app.play();

module.exports = App;
