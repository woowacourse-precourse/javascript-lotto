const User = require('./User');
const MESSAGE = require('./constants/message');
const { Console } = require('@woowacourse/mission-utils');
const { checkValidLotto, checkValidBonus } = require('./utils/validator');

class App {
  #winNumber;
  #bonusNumber;

  constructor() {
    this.user = new User();
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine(MESSAGE.INPUT.MONEY, (money) => {
      this.user.buyLottos(Number(money));
      this.drawLotto();
    });
  }

  drawLotto() {
    Console.readLine(MESSAGE.INPUT.WINNUMBER, (numbers) => {
      let winNumber = numbers.split(',').map((v) => Number(v));
      checkValidLotto(winNumber);
      this.#winNumber = winNumber;
      this.drawBonus();
    });
  }

  drawBonus() {
    Console.readLine(MESSAGE.INPUT.BONUSNUMBER, (number) => {
      let bonusNumber = number.split(',').map((v) => Number(v));
      checkValidBonus(this.#winNumber, bonusNumber);
      this.#bonusNumber = bonusNumber[0];
      this.lottoResult();
    });
  }

  lottoResult() {
    this.user.checkLottos(this.#winNumber, this.#bonusNumber);
    this.user.checkRateOfReturn();
  }
}

const app = new App();
app.play();

module.exports = App;
