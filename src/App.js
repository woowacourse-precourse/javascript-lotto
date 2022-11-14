const { getPurchaseAmount, getWinningNumber } = require("./UserInput.js");
const { printUserPurchaseAmount } = require("./Output.js");
const { Print } = require("./lib/MissionUtils.js");
const { createLotto } = require("./Random.js");
class App {
  $purchaseAmount;
  $lottos;
  $winNum;
  async play() {
    await this.savePurchaseAmount();
    this.$lottos = createLotto(this.$purchaseAmount);
    await this.saveWinningNumber();
  }
  async savePurchaseAmount() {
    this.$purchaseAmount = await getPurchaseAmount().then(
      (data) => Number(data) / 1000
    );
    printUserPurchaseAmount(this.$purchaseAmount);
  }
  async saveWinningNumber() {
    this.$winNum = await getWinningNumber().then((data) =>
      data.split(",").map((v) => +v)
    );
  } //나눌 때 예외처리, 숫자,6개인지
}

let app = new App();
app.play();

module.exports = App;
