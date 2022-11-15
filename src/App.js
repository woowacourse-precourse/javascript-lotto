const Lotto = require('./Lotto');

class App {
  lotto = new Lotto();

  play() {
    this.lotto.getPurchaseAmount();
  }
}

module.exports = App;
