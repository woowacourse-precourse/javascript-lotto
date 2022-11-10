const Lottery = require("./Lottery");

class App {
  play() {
    const lottery = new Lottery();
    lottery.inputPurchaseAmount();
  }
}

const app = new App();
app.play();

module.exports = App;
