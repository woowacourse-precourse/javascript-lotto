const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_USER_INPUT } = require('./constants');

class App {
  play() {
    Console.readLine(LOTTO_USER_INPUT.PURCHASE_LOTTO, (purchaseLotto) => {
      Console.print(purchaseLotto);
    });
  }
}

module.exports = App;

const app = new App();
app.play();
