const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_USER_INPUT, LOTTO_ERROR_MESSAGE } = require('./constants');

class App {
  play() {
    Console.readLine(LOTTO_USER_INPUT.PURCHASE_LOTTO, (purchaseLotto) => {
      if (this.validateUserInput(purchaseLotto)) Console.print(purchaseLotto/1000);
    });
  }

  validateUserInput(purchaseLotto) {
    if (isNaN(purchaseLotto)) throw new Error(LOTTO_ERROR_MESSAGE.NOT_NUMBER);
    if (purchaseLotto % 1000 !== 0) throw new Error(LOTTO_ERROR_MESSAGE.NOT_DIVIDE);

    return true;
  }
}

module.exports = App;

const app = new App();
app.play();
