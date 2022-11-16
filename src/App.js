const { Console } = require("@woowacourse/mission-utils");
const MakeLotteries = require("./components/MakeLotteries");
const { INPUT_MSG } = require("./constants");

class App {
  play() {
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    Console.readLine(INPUT_MSG.AMOUNT_MSG, (amount) => {
      const makeLotteries = new MakeLotteries(amount);
      makeLotteries.inputSixNumbers();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
