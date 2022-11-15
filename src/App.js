const MissionUtils = require("@woowacourse/mission-utils");
const PurchaseAmount = require("./game-machine/PurchaseAmount");
const CalculateLotto = require("./game-machine/CalculateLotto");
const DrawLotto = require("./draw-machine/DrawLotto");

class App {
  play() {
    const amount = new PurchaseAmount();
    amount.inputPurchaseAmount();
  }
}
const app = new App();
app.play();
module.exports = App;
