const MissionUtils = require("@woowacourse/mission-utils");
const { READLINE_PHRASE, OUTPUT_PHRASE } = require("./Constant");

class App {
  play() {
    this.inputPurchaseAmount();
  }
  inputPurchaseAmount() {
    MissionUtils.Console.readLine(
      READLINE_PHRASE.INPUT_PURCHASE_AMMOUNT,
      (answer) => {
        MissionUtils.Console.print(
          parseInt(answer / 1000) + OUTPUT_PHRASE.RESPONSE_PURCHASE_AMMOUNT
        );
      }
    );
  }
}

const app = new App();
app.play();

module.exports = App;
