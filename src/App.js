const Lotto = require('./Lotto')
let lotto = new Lotto();
class App {
  play() {
    lotto.getLotto();
  }
}

module.exports = App;
