const Lotto = require('./Lotto');

class App {
  lotto = new Lotto();

  play() {
    this.lotto.getPurchaseAmount();
  }
}

const test = new App();
test.play();

module.exports = App;
