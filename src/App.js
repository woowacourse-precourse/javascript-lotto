const MissionUtils = require("@woowacourse/mission-utils");
const PurchaseAmount = require("./game-machine/PurchaseAmount");
const CalculateLotto = require("./game-machine/CalculateLotto");
const DrawLotto = require("./draw-machine/DrawLotto");

class App {

  constructor(){
    this.purchase_amount;
  }
  play() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount(){
    const amount = new PurchaseAmount();
    this.purchase_amount=amount.inputPurchaseAmount();
  }

}
const app = new App();
app.play();
module.exports = App;
