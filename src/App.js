const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants.js");

class App {
  play() {
    this.inputBuyingAmount();
  }

  inputBuyingAmount() {
    Console.readLine(MESSAGE.INPUT_BUYING_AMOUNT, (amount) => {
      console.log(amount);
    });
  }
}

const a = new App();
a.play();

module.exports = App;
