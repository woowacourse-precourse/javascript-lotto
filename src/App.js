const { getPurchaseAmount } = require("./UserInput.js");
const { printUserPurchaseAmount } = require("./Output.js");
const { Print } = require("./lib/MissionUtils.js");
class App {
  $purchaseAmount;
  $lottos = [];
  $winNum = [];
  async play() {
    await this.savePurchaseAmount();
  }
  async savePurchaseAmount() {
    let $purchaseAmount = await getPurchaseAmount().then((data) => data);
    printUserPurchaseAmount($purchaseAmount);
  }
}

let app = new App();
app.play();

module.exports = App;
