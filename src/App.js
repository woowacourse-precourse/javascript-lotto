const Lotto = require("./Lotto");

class App {
  constructor() {
    this.lotto = new Lotto();
  }

  play() {
    this.lotto.start();
  }
}

module.exports = App;

const app = new App();
app.play();