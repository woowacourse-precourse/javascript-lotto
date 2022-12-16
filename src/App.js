const { GameController } = require('./controller/GameController');

class App {
  play() {
    new GameController();
  }
}

module.exports = App;
