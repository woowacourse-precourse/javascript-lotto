const Game = require('./Game');

class App {
  game = new Game();

  play() {
    this.game.gameStart();
  }
}

module.exports = App;
