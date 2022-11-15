const Lotto = require("./Lotto");
class App {
  play() {
    const lotto = new Lotto();
    lotto.getInputMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
