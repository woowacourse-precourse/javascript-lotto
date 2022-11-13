const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES } = require('./constant/Constant');

class App {
  #purchaseAmount;

  play() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    MissionUtils.Console.readLine(MESSAGES.INPUTPURCHASEAMOUNT, (input) => {
      this.#purchaseAmount = Number(input);
      console.log(this.#purchaseAmount);
      MissionUtils.Console.close(); 
    })
  }
}

const app = new App();
app.play();

module.exports = App;

