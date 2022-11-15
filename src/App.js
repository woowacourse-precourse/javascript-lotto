const Lotto = require("./Lotto");

class App {
  constructor() {
    this.Lotto = new Lotto();
  }
  play() {
    this.Lotto.lottoPlay();
  }
}

module.exports = App;
