const GameService = require('./GameService');

class App {
  play() {
    new GameService().inputLottoPurchase();
  }
}

module.exports = App;
