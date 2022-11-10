const Lotto = require("./Lotto");

class App {
  constructor() {
    this.Lotto = new Lotto();
  }

  play() {
    this.Lotto.start();
  }
}

const app = new App();
app.play();

module.exports = App;
