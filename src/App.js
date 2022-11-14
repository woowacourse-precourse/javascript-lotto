const Lotto = require("./Lotto");

class App {
  constructor() {
    this.lotto = new Lotto();
  }

  play() {
    this.lotto.askLottoCost();
  }
}

const app = new App;
app.play();
// module.exports = App;
