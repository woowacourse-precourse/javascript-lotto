const GameService = require('./GameService');

class App {
  play() {
    new GameService().buyLotto();
  }
}

module.exports = App;
