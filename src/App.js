const UI = require("./UI");
const { BUY_LOTTO } = require("./constant/constant");
const BuyLotto = require("./BuyLotto");

class App {
  play() {
    UI.readLine(BUY_LOTTO.ANNOUNCEMENT, BuyLotto);
  }
}

const app = new App();
app.play();

module.exports = App;
