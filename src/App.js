const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants.js");
const buyingAmountValidator = require("./buyingAmountValidator.js");

class App {
  play() {
    this.inputBuyingAmount();
  }

  inputBuyingAmount() {
    Console.readLine(MESSAGE.INPUT_BUYING_AMOUNT, buyingAmountValidator);
  }
}

const a = new App();
a.play();

module.exports = App;
