const LottoPlay = require("./LottoPlay.js");
class App {
  constructor() {
    this.LottoPlay = new LottoPlay();
  }
  play() {
    this.LottoPlay.play();
  }
}

module.exports = App;
