const MissionUtils = require("@woowacourse/mission-utils");
const { READLINE_PHRASE, OUTPUT_PHRASE } = require("./Constant");

class App {
  play() {
    this.inputPurchaseAmount();
  }

  inputPurchaseAmount() {
    MissionUtils.Console.readLine(
      READLINE_PHRASE.INPUT_PURCHASE_AMMOUNT,
      (money) => {
        this.printPurchaseQuantity(money);
      }
    );
  }
  printPurchaseQuantity(money) {
    MissionUtils.Console.print(
      OUTPUT_PHRASE.LINE_UP +
        this.getPurchaseQuantity(money) +
        OUTPUT_PHRASE.PURCHASE_QUANTITY
    );
  }
  getPurchaseQuantity(money) {
    return parseInt(money / 1000);
  }
}

const app = new App();
app.play();

module.exports = App;
