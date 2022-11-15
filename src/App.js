const User = require('./User');
const MESSAGE = require('./constants/message');
const { Console } = require('@woowacourse/mission-utils');
const { checkValidLotto, checkValidBonus } = require('./utils/validator');

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
      checkValidLotto(WINNUMBER);
      this.#winNumber = WINNUMBER;
      this.drawBonus();
    });
  }

  drawBonus() {
    Console.readLine(MESSAGE.INPUT.BONUSNUMBER, (number) => {
      let BONUSNUMBER = number.split(',').map((v) => Number(v));
      checkValidBonus(this.#winNumber, BONUSNUMBER);
      this.#bonusNumber = BONUSNUMBER[0];
    });
  }
}

const app = new App();
app.play();

module.exports = App;
