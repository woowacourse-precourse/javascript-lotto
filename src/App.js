const { Console } = require('@woowacourse/mission-utils');
const { PURCHASE } = require('./constants');

class App {
  #purchaseAmout = 0;

  play() {
    this.askPurchaseAmount();
  }

  askPurchaseAmount() {
    Console.readLine(PURCHASE.INPUT, answer => {
      this.#purchaseAmout = answer;
    });
  }
}

const app = new App();
app.play();

module.exports = App;
