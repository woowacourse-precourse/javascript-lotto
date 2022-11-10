const Lotto = require("./Lotto");

class App {
  constructor() {
    this.lotto = new Lotto();
  }

  play() {
    this.lotto.play();
  }
}

module.exports = App;

const app = new App();
app.play();