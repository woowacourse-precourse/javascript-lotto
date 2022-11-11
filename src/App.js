const { Console } = require('@woowacourse/mission-utils');
const { PURCHASE } = require('./constants');
const { validate, isPurchaseInput } = require('./Validator');

class App {
  #purchaseAmout = 0;

  play() {
    this.askPurchaseAmount();
  }

  askPurchaseAmount() {
    Console.readLine(PURCHASE.INPUT, answer => {
      validate(answer, isPurchaseInput);
      this.#purchaseAmout = answer;
    });
  }
}

const app = new App();
app.play();

module.exports = App;
